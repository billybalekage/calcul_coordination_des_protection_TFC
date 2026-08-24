const prismaModule = require("../../../config/prisma");
const calculApi = require("../config/axios");
const {
  normalizeCalculationResult,
  getPersistableResult,
} = require("../utils/normalization");
const {
  NotFoundError,
  BadRequestError,
} = require("../../../common/errors/AppErrors");
const { listStandards } = require("../config/norme");
const { createReportBuffer } = require("./report.service");

function getPrisma() {
  return prismaModule.getPrismaClient();
}

async function getOwnedProject(projectId, userId, include = {}) {
  if (!userId) {
    throw new NotFoundError("Utiisateur non trouvé");
  }
  const project = await getPrisma().project.findFirst({
    where: { id: projectId, userId },
    include,
  });

  if (!project) throw new NotFoundError("Projet introuvable.");
  return project;
}

async function getCalculationInput(projectId, userId) {
  const project = await getOwnedProject(projectId, userId, {
    powerSupply: true,
    circuits: true,
    cableData: true,
    protection: true,
    furthestLoadDistance: true,
  });

  const missing = [];
  if (!project.powerSupply) missing.push("powerSupply");
  if (!project.circuits.length) missing.push("circuits");
  const unresolvedCircuit = project.circuits.find((circuit) => {
    const hasCable =
      circuit.cableMaterial && circuit.cableIsolation && circuit.modePose;
    const hasProtection =
      circuit.protectionType &&
      circuit.ratedCurrent &&
      circuit.numberOfPoles &&
      circuit.curveType &&
      circuit.breakingCapacity;
    const hasDistance =
      circuit.distance != null ||
      (project.furthestLoadDistance?.circuitName === circuit.name &&
        project.furthestLoadDistance.distance != null);
    return (
      (!hasCable && !project.cableData) ||
      (!hasProtection && !project.protection) ||
      !hasDistance
    );
  });
  if (unresolvedCircuit) missing.push(`circuit:${unresolvedCircuit.name}`);

  if (missing.length) {
    throw new BadRequestError("Le projet est incomplet.", { missing });
  }

  const circuits = project.circuits.map((circuit) => ({
    name: circuit.name,
    circuitCount: circuit.circuitCount,
    type: circuit.type,
    totalPower: circuit.totalPower,
    cosPhi: circuit.cosPhi,
    utilizationFactor: circuit.utilizationFactor,
    simultaneityFactor: circuit.simultaneityFactor,
    distance:
      circuit.distance ??
      (project.furthestLoadDistance?.circuitName === circuit.name
        ? project.furthestLoadDistance.distance
        : null),
    cableData: circuit.cableMaterial
      ? {
          material: circuit.cableMaterial,
          isolation: circuit.cableIsolation,
          modePose: circuit.modePose,
          correctionFactors: circuit.correctionFactors || {},
          izReference: circuit.izReference,
          millivoltsPerAmpereMeter: circuit.millivoltsPerAmpereMeter,
        }
      : project.cableData,
    protection: circuit.protectionType
      ? {
          type: circuit.protectionType,
          ratedCurrent: circuit.ratedCurrent,
          numberOfPoles: circuit.numberOfPoles,
          curveType: circuit.curveType,
          breakingCapacity: circuit.breakingCapacity,
          selectivityVerified: circuit.selectivityVerified,
        }
      : project.protection,
  }));

  return {
    project: {
      id: project.id,
      name: project.name,
      client: project.client,
      location: project.location,
    },
    powerSupply: project.powerSupply,
    circuits,
    cableData: project.cableData,
    protection: project.protection,
    furthestLoadDistance: project.furthestLoadDistance,
  };
}

async function calculate(projectId, userId) {
  const input = await getCalculationInput(projectId, userId);
  const calculation = await runCalculation(input);

  await saveNormalizedResult(projectId, calculation.normalizedResults);
  return calculation.normalizedResults;
}

async function runCalculation(input) {
  let response;

  try {
    response = await calculApi.post("/v1/calculations", input);
  } catch (error) {
    const apiError = new Error("Le moteur de calcul est indisponible.");
    apiError.statusCode =
      error.response?.status >= 400 && error.response.status < 500 ? 422 : 503;
    apiError.code = "CALCULATION_SERVICE_ERROR";
    apiError.details = error.response?.data || null;
    apiError.isOperational = true;
    throw apiError;
  }

  const result = response.data?.result;
  if (!result || typeof result !== "object") {
    throw new Error("Réponse invalide du moteur de calcul.");
  }

  const normalizedResults = normalizeCalculationResult(
    result,
    input.powerSupply.standard,
    input,
  );

  return {
    project: input,
    physicalResults: result,
    normalizedResults,
  };
}

async function saveNormalizedResult(projectId, normalizedResult) {
  await getPrisma().result.upsert({
    where: { projectId },
    create: {
      ...getPersistableResult(normalizedResult),
      project: { connect: { id: projectId } },
    },
    update: getPersistableResult(normalizedResult),
  });
}

function getAvailableStandards() {
  return listStandards();
}

async function generateReport(projectId, userId) {
  const input = await getCalculationInput(projectId, userId);
  const calculation = await runCalculation(input);

  await saveNormalizedResult(projectId, calculation.normalizedResults);
  return createReportBuffer(calculation);
}

module.exports = {
  getCalculationInput,
  calculate,
  getAvailableStandards,
  generateReport,
};
