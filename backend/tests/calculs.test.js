process.env.DB_URL =
  process.env.DATABASE_URL || "postgresql://localhost:5432/test";

const test = require("node:test");
const assert = require("node:assert/strict");

const prismaConfig = require("../src/config/prisma");
const calculApi = require("../src/features/calculs/config/axios");
const calculService = require("../src/features/calculs/services/calcul.service");
const {
  createReportBuffer,
} = require("../src/features/calculs/services/report.service");
const {
  normalizeCalculationResult,
} = require("../src/features/calculs/utils/normalization");
const {
  BadRequestError,
  NotFoundError,
} = require("../src/common/errors/AppErrors");

const originalGetPrismaClient = prismaConfig.getPrismaClient;
const originalPost = calculApi.post;

test("uses cosPhi in the single-phase employment current formula", () => {
  const input = {
    powerSupply: {
      type: "MONOPHASE",
      nominalVoltage: 230,
    },
    circuits: [
      {
        name: "C1",
        circuitCount: 1,
        type: "AUTRE",
        totalPower: 2300,
        cosPhi: 0.8,
      },
    ],
    cableData: {},
    protection: { ratedCurrent: 16 },
    furthestLoadDistance: { circuitName: "C1", distance: 20 },
  };

  const result = normalizeCalculationResult(
    {
      currentNominal: 0,
      currentDesign: 0,
      recommendedCableSection: 1.5,
      correctedCableCapacity: 0,
      recommendedBreaker: 6,
      voltageDropVolts: 0,
      voltageDropPercent: 0,
      shortCircuitCurrentAtEnd: 1000,
      breakerBreakingCapacity: 6000,
      overloadCheck: "FAIL",
      voltageDropCheck: "PASS",
      breakingCapacityCheck: "PASS",
      coordinationCheck: "FAIL",
    },
    "NFC_15_100",
    input,
  );

  assert.equal(result.currentNominal, 12.5);
});

const projectData = {
  id: "project-1",
  name: "Atelier",
  client: "Client test",
  location: "Lyon",
  powerSupply: {
    type: "TRIPHASE",
    nominalVoltage: 400,
    frequency: 50,
    regimeNeutre: "TT",
    distanceSourceToTGBT: 12,
    standard: "NFC_15_100",
  },
  circuits: [
    {
      name: "Eclairage",
      circuitCount: 1,
      type: "ECLAIRAGE",
      totalPower: 3000,
    },
  ],
  cableData: {
    material: "CUIVRE",
    isolation: "PVC",
    modePose: "AIR_LIBRE",
  },
  protection: {
    type: "DISJONCTEUR",
    ratedCurrent: 32,
    numberOfPoles: 4,
    curveType: "C",
    breakingCapacity: 6000,
  },
  furthestLoadDistance: {
    circuitName: "Eclairage",
    distance: 25,
  },
};

function mockDatabase(project = projectData) {
  let savedResult;
  const fakePrisma = {
    project: {
      findFirst: async () => project,
    },
    result: {
      upsert: async (args) => {
        savedResult = args;
        return args.update;
      },
    },
  };

  prismaConfig.getPrismaClient = () => fakePrisma;
  return {
    getSavedResult: () => savedResult,
    restore: () => {
      prismaConfig.getPrismaClient = originalGetPrismaClient;
    },
  };
}

function restoreApi() {
  calculApi.post = originalPost;
}

test("getCalculationInput builds the FastAPI payload without database technical fields", async () => {
  const database = mockDatabase();

  try {
    const input = await calculService.getCalculationInput(
      "project-1",
      "user-1",
    );

    assert.deepEqual(input.project, {
      id: "project-1",
      name: "Atelier",
      client: "Client test",
      location: "Lyon",
    });
    assert.deepEqual(input.powerSupply, projectData.powerSupply);
    assert.equal(input.circuits.length, 1);
    assert.equal(input.circuits[0].name, "Eclairage");
    assert.equal(input.circuits[0].distance, 25);
    assert.deepEqual(input.circuits[0].cableData, projectData.cableData);
    assert.deepEqual(input.circuits[0].protection, projectData.protection);
    assert.equal(input.powerSupply.id, undefined);
    assert.equal(input.cableData.projectId, undefined);
  } finally {
    database.restore();
  }
});

test("getCalculationInput preserves cosPhi and design factors", async () => {
  const database = mockDatabase({
    ...projectData,
    circuits: [
      {
        ...projectData.circuits[0],
        cosPhi: 0.8,
        utilizationFactor: 0.9,
        simultaneityFactor: 0.7,
      },
    ],
  });

  try {
    const input = await calculService.getCalculationInput(
      "project-1",
      "user-1",
    );

    assert.equal(input.circuits[0].cosPhi, 0.8);
    assert.equal(input.circuits[0].utilizationFactor, 0.9);
    assert.equal(input.circuits[0].simultaneityFactor, 0.7);
  } finally {
    database.restore();
  }
});

test("getCalculationInput rejects an incomplete project", async () => {
  const database = mockDatabase({
    ...projectData,
    circuits: [],
    protection: null,
    furthestLoadDistance: null,
  });

  try {
    await assert.rejects(
      () => calculService.getCalculationInput("project-1", "user-1"),
      (error) => {
        assert.equal(error instanceof BadRequestError, true);
        assert.deepEqual(error.details.missing, ["circuits"]);
        return true;
      },
    );
  } finally {
    database.restore();
  }
});

test("getCalculationInput rejects an unknown project", async () => {
  const database = mockDatabase(null);

  try {
    await assert.rejects(
      () => calculService.getCalculationInput("missing", "user-1"),
      (error) => error instanceof NotFoundError,
    );
  } finally {
    database.restore();
  }
});

test("calculate sends the input to FastAPI and saves its result", async () => {
  const database = mockDatabase();
  const physicalResult = {
    currentNominal: 4.33,
    currentDesign: 5.41,
    recommendedCableSection: 1.5,
    correctedCableCapacity: 15,
    recommendedBreaker: 32,
    voltageDropVolts: 1.2,
    voltageDropPercent: 0.3,
    shortCircuitCurrentAtEnd: 1000,
    breakerBreakingCapacity: 6000,
    overloadCheck: "PASS",
    voltageDropCheck: "PASS",
    breakingCapacityCheck: "PASS",
    coordinationCheck: "PASS",
  };
  let sentInput;
  calculApi.post = async (path, input) => {
    assert.equal(path, "/v1/calculations");
    sentInput = input;
    return { data: { result: physicalResult } };
  };

  try {
    const result = await calculService.calculate("project-1", "user-1");

    assert.deepEqual(result, {
      currentNominal: 4.330127018922194,
      currentDesign: 4.330127018922194,
      recommendedCableSection: 1.5,
      correctedCableCapacity: 15,
      recommendedBreaker: 10,
      voltageDropVolts: 2.875,
      voltageDropPercent: 0.71875,
      shortCircuitCurrentAtEnd: 1000,
      breakerBreakingCapacity: 6000,
      overloadCheck: "PASS",
      voltageDropCheck: "PASS",
      breakingCapacityCheck: "PASS",
      coordinationCheck: "PASS",
      standard: "NFC_15_100",
      assumptions: {
        correctionFactor: 1,
        defaultPowerFactor: true,
      },
    });
    assert.deepEqual(sentInput.project, {
      id: "project-1",
      name: "Atelier",
      client: "Client test",
      location: "Lyon",
    });
    assert.deepEqual(database.getSavedResult(), {
      where: { projectId: "project-1" },
      create: {
        currentNominal: 4.330127018922194,
        currentDesign: 4.330127018922194,
        recommendedCableSection: 1.5,
        correctedCableCapacity: 15,
        recommendedBreaker: 10,
        voltageDropVolts: 2.875,
        voltageDropPercent: 0.71875,
        shortCircuitCurrentAtEnd: 1000,
        breakerBreakingCapacity: 6000,
        overloadCheck: "PASS",
        voltageDropCheck: "PASS",
        breakingCapacityCheck: "PASS",
        coordinationCheck: "PASS",
        project: { connect: { id: "project-1" } },
      },
      update: {
        currentNominal: 4.330127018922194,
        currentDesign: 4.330127018922194,
        recommendedCableSection: 1.5,
        correctedCableCapacity: 15,
        recommendedBreaker: 10,
        voltageDropVolts: 2.875,
        voltageDropPercent: 0.71875,
        shortCircuitCurrentAtEnd: 1000,
        breakerBreakingCapacity: 6000,
        overloadCheck: "PASS",
        voltageDropCheck: "PASS",
        breakingCapacityCheck: "PASS",
        coordinationCheck: "PASS",
      },
    });
  } finally {
    database.restore();
    restoreApi();
  }
});

test("normalization applies the selected standard rules", () => {
  const physicalResult = {
    currentNominal: 10,
    currentDesign: 12,
    recommendedCableSection: 2.5,
    correctedCableCapacity: 20,
    recommendedBreaker: 16,
    voltageDropVolts: 20,
    voltageDropPercent: 4,
    shortCircuitCurrentAtEnd: 2500,
    breakerBreakingCapacity: 6000,
    overloadCheck: "PASS",
    voltageDropCheck: "PASS",
    breakingCapacityCheck: "PASS",
    coordinationCheck: "PASS",
  };

  const lightingInput = {
    powerSupply: {
      type: "MONOPHASE",
      nominalVoltage: 230,
    },
    circuits: [
      {
        name: "Eclairage",
        circuitCount: 1,
        type: "ECLAIRAGE",
        totalPower: 2300,
      },
    ],
    cableData: { material: "CUIVRE" },
    protection: { ratedCurrent: 16 },
    furthestLoadDistance: { circuitName: "Eclairage", distance: 100 },
  };

  assert.equal(
    normalizeCalculationResult(physicalResult, "NFC_15_100", lightingInput)
      .voltageDropCheck,
    "PASS",
  );
  assert.equal(
    normalizeCalculationResult(physicalResult, "NFC_15_100", lightingInput)
      .recommendedCableSection,
    10,
  );
  assert.equal(
    normalizeCalculationResult(physicalResult, "IEC_60364").voltageDropCheck,
    "PASS",
  );
});

test("normalization preserves FastAPI per-circuit results", () => {
  const result = normalizeCalculationResult(
    {
      currentNominal: 8,
      currentDesign: 10,
      recommendedCableSection: 2.5,
      correctedCableCapacity: 22,
      recommendedBreaker: 16,
      voltageDropVolts: 2,
      voltageDropPercent: 1,
      shortCircuitCurrentAtEnd: 5000,
      breakerBreakingCapacity: 6000,
      overloadCheck: "PASS",
      voltageDropCheck: "PASS",
      breakingCapacityCheck: "PASS",
      coordinationCheck: "PASS",
      standard: "IEC_60364",
      perCircuit: [{ circuitName: "C1", ib: 8, recommendedSection: 2.5 }],
    },
    "IEC_60364",
  );

  assert.deepEqual(result.perCircuit, [
    { circuitName: "C1", ib: 8, recommendedSection: 2.5 },
  ]);
  assert.equal(result.standard, "IEC_60364");
  assert.equal(result.assumptions.source, "FastAPI");
});

test("available standards expose selectable calculation profiles", () => {
  const standards = calculService.getAvailableStandards();

  assert.deepEqual(
    standards.map((standard) => standard.value),
    ["NFC_15_100", "IEC_60364"],
  );
  assert.equal(standards[0].calculationMode, "NFC_15_100");
  assert.equal(standards[1].calculationMode, "IEC_60364");
  assert.equal(standards[0].voltageDropLimitPercent, 5);
  assert.equal(standards[0].lightingVoltageDropLimitPercent, 3);
});

test("report service generates a PDF from project and both result sets", async () => {
  const pdf = await createReportBuffer({
    project: {
      id: "project-1",
      name: "Atelier",
      client: "Client test",
      location: "Lyon",
      powerSupply: { standard: "IEC_60364" },
      circuits: [],
      cableData: {},
      protection: {},
      furthestLoadDistance: {},
    },
    physicalResults: { currentNominal: 10 },
    normalizedResults: {
      currentNominal: 10,
      recommendedCableSection: 4,
      overloadCheck: "PASS",
      voltageDropCheck: "PASS",
      breakingCapacityCheck: "PASS",
      coordinationCheck: "PASS",
    },
  });

  assert.ok(Buffer.isBuffer(pdf));
  assert.equal(pdf.subarray(0, 4).toString(), "%PDF");
  assert.ok(pdf.length > 500);
});

test("IEC 60364 applies correction factors and the Ib-In-Iz condition", () => {
  const physicalResult = {
    currentNominal: 0,
    currentDesign: 0,
    recommendedCableSection: 1.5,
    correctedCableCapacity: 0,
    recommendedBreaker: 6,
    voltageDropVolts: 0,
    voltageDropPercent: 0,
    shortCircuitCurrentAtEnd: 1000,
    breakerBreakingCapacity: 6000,
    overloadCheck: "FAIL",
    voltageDropCheck: "PASS",
    breakingCapacityCheck: "PASS",
    coordinationCheck: "FAIL",
  };
  const input = {
    powerSupply: {
      type: "TRIPHASE",
      nominalVoltage: 400,
      correctionFactors: {
        ambientTemperature: 0.9,
        grouping: 0.8,
        thermalInsulation: 1,
        soilThermalResistivity: 1,
      },
    },
    circuits: [
      {
        name: "Moteur",
        circuitCount: 1,
        type: "FORCE_MOTRICE",
        totalPower: 10000,
      },
    ],
    cableData: {
      material: "CUIVRE",
      millivoltsPerAmpereMeter: 7,
    },
    protection: { ratedCurrent: 20 },
    furthestLoadDistance: { circuitName: "Moteur", distance: 30 },
  };

  const result = normalizeCalculationResult(physicalResult, "IEC_60364", input);

  assert.equal(result.recommendedCableSection, 4);
  assert.equal(result.recommendedBreaker, 20);
  assert.ok(Math.abs(result.correctedCableCapacity - 28.8) < 1e-9);
  assert.equal(result.overloadCheck, "PASS");
  assert.equal(result.coordinationCheck, "PASS");
  assert.equal(result.voltageDropCheck, "PASS");
  assert.deepEqual(result.assumptions.correctionFactors, {
    ambientTemperature: 0.9,
    grouping: 0.8,
    thermalInsulation: 1,
    soilThermalResistivity: 1,
  });
});

test("calculate maps FastAPI errors to a calculation service error", async () => {
  const database = mockDatabase();
  calculApi.post = async () => {
    const error = new Error("FastAPI unavailable");
    error.response = { status: 503, data: { detail: "Service unavailable" } };
    throw error;
  };

  try {
    await assert.rejects(
      () => calculService.calculate("project-1", "user-1"),
      (error) => {
        assert.equal(error.statusCode, 503);
        assert.equal(error.code, "CALCULATION_SERVICE_ERROR");
        assert.deepEqual(error.details, { detail: "Service unavailable" });
        return true;
      },
    );
  } finally {
    database.restore();
    restoreApi();
  }
});
