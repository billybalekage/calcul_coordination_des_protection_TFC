const { getStandardRules } = require("../config/norme");

const RESULT_FIELDS = [
  "currentNominal",
  "currentDesign",
  "recommendedCableSection",
  "correctedCableCapacity",
  "recommendedBreaker",
  "voltageDropVolts",
  "voltageDropPercent",
  "shortCircuitCurrentAtEnd",
  "breakerBreakingCapacity",
  "overloadCheck",
  "voltageDropCheck",
  "breakingCapacityCheck",
  "coordinationCheck",
];

function getPowerFactor(circuitType) {
  return ["FORCE_MOTRICE", "PRISE_COURANT", "CLIMATISATION"].includes(
    circuitType,
  )
    ? 0.8
    : 1;
}

function calculateEmploymentCurrent(input) {
  const voltage = input.powerSupply.nominalVoltage;
  const phaseFactor = input.powerSupply.type === "TRIPHASE" ? Math.sqrt(3) : 1;

  return input.circuits.reduce((total, circuit) => {
    const power = circuit.totalPower * circuit.circuitCount;
    return (
      total + power / (phaseFactor * voltage * getPowerFactor(circuit.type))
    );
  }, 0);
}

function getCircuitForDistance(input) {
  return (
    input.circuits.find(
      (circuit) => circuit.name === input.furthestLoadDistance.circuitName,
    ) || input.circuits[0]
  );
}

function getNextBreaker(current, ratings) {
  return (
    ratings.find((rating) => rating >= current) || ratings[ratings.length - 1]
  );
}

function getCableCapacity(section, cableData) {
  const materialFactor = cableData.material === "ALUMINIUM" ? 0.75 : 1;
  return section * 10 * materialFactor;
}

function getIecCorrectionFactors(input, rules) {
  return {
    ...rules.correctionFactors,
    ...(input.powerSupply.correctionFactors || {}),
    ...(input.cableData.correctionFactors || {}),
  };
}

function getIecCorrectedCapacity(section, input, rules) {
  const factors = getIecCorrectionFactors(input, rules);
  const correction = Object.values(factors).reduce(
    (product, factor) => product * factor,
    1,
  );
  return getCableCapacity(section, input.cableData) * correction;
}

function normalizeIec60364Result(physicalResult, input, rules, result) {
  const employmentCurrent = calculateEmploymentCurrent(input);
  const circuit = getCircuitForDistance(input);
  const powerFactor = getPowerFactor(circuit.type);
  const phaseFactor = input.powerSupply.type === "TRIPHASE" ? Math.sqrt(3) : 1;
  const circuitCurrent =
    (circuit.totalPower * circuit.circuitCount) /
    (phaseFactor * input.powerSupply.nominalVoltage * powerFactor);
  const distance = input.furthestLoadDistance.distance;
  const voltageDropLimit =
    circuit.type === "ECLAIRAGE"
      ? rules.lightingVoltageDropLimitPercent
      : rules.voltageDropLimitPercent;
  const recommendedBreaker = getNextBreaker(
    employmentCurrent,
    rules.breakerRatings,
  );
  const tripCurrent =
    physicalResult.i2 ??
    input.protection.ratedCurrent * rules.protectionTripFactor;

  const section =
    rules.sections.find((candidate) => {
      const correctedCapacity = getIecCorrectedCapacity(
        candidate,
        input,
        rules,
      );
      const millivoltsPerAmpereMeter =
        input.cableData.millivoltsPerAmpereMeter ??
        (1000 * rules.resistivity) / candidate;
      const voltageDropVolts =
        (phaseFactor * millivoltsPerAmpereMeter * circuitCurrent * distance) /
        1000;
      const voltageDropPercent =
        (voltageDropVolts / input.powerSupply.nominalVoltage) * 100;
      return (
        employmentCurrent <= recommendedBreaker &&
        recommendedBreaker <= correctedCapacity &&
        tripCurrent <= rules.protectionTripFactor * correctedCapacity &&
        voltageDropPercent <= voltageDropLimit
      );
    }) || rules.sections[rules.sections.length - 1];

  const correctedCapacity = getIecCorrectedCapacity(section, input, rules);
  const millivoltsPerAmpereMeter =
    input.cableData.millivoltsPerAmpereMeter ??
    (1000 * rules.resistivity) / section;
  const voltageDropVolts =
    (phaseFactor * millivoltsPerAmpereMeter * circuitCurrent * distance) / 1000;
  const voltageDropPercent =
    (voltageDropVolts / input.powerSupply.nominalVoltage) * 100;
  const overloadCheck =
    employmentCurrent <= recommendedBreaker &&
    recommendedBreaker <= correctedCapacity
      ? "PASS"
      : "FAIL";
  const tripCheck =
    tripCurrent <= rules.protectionTripFactor * correctedCapacity;

  result.currentNominal = employmentCurrent;
  result.currentDesign = employmentCurrent;
  result.recommendedCableSection = section;
  result.correctedCableCapacity = correctedCapacity;
  result.recommendedBreaker = recommendedBreaker;
  result.voltageDropVolts = voltageDropVolts;
  result.voltageDropPercent = voltageDropPercent;
  result.overloadCheck = overloadCheck;
  result.voltageDropCheck =
    voltageDropPercent <= voltageDropLimit ? "PASS" : "FAIL";
  result.coordinationCheck =
    overloadCheck === "PASS" && tripCheck ? "PASS" : "FAIL";
  result.assumptions = {
    correctionFactors: getIecCorrectionFactors(input, rules),
    protectionTripCurrent: tripCurrent,
    voltageDropMethod: input.cableData.millivoltsPerAmpereMeter
      ? "MV_PER_AMPERE_METER"
      : "RESISTIVITY_FALLBACK",
  };
}

function normalizeCalculationResult(physicalResult, standard, input = null) {
  const rules = getStandardRules(standard);
  const result = {};

  for (const field of RESULT_FIELDS) {
    result[field] = physicalResult[field];
  }

  if (Array.isArray(physicalResult.perCircuit)) {
    result.perCircuit = physicalResult.perCircuit;
    result.standard = physicalResult.standard || standard;
    result.assumptions = {
      source: "FastAPI",
      calculationStandard: result.standard,
    };
    return result;
  }

  if (rules.calculationMode === "NFC_15_100" && input) {
    const employmentCurrent = calculateEmploymentCurrent(input);
    const protectionCurrent = input.protection.ratedCurrent;
    const circuit = getCircuitForDistance(input);
    const powerFactor = getPowerFactor(circuit.type);
    const phaseFactor =
      input.powerSupply.type === "TRIPHASE" ? Math.sqrt(3) : 1;
    const circuitCurrent =
      (circuit.totalPower * circuit.circuitCount) /
      (phaseFactor * input.powerSupply.nominalVoltage * powerFactor);
    const distance = input.furthestLoadDistance.distance;
    const voltageDropLimit =
      circuit.type === "ECLAIRAGE"
        ? rules.lightingVoltageDropLimitPercent
        : rules.voltageDropLimitPercent;
    const minimumSection = rules.sections.find((section) => {
      const capacity =
        getCableCapacity(section, input.cableData) / rules.correctionFactor;
      const voltageDropVolts =
        input.powerSupply.type === "TRIPHASE"
          ? (Math.sqrt(3) *
              rules.resistivity *
              distance *
              circuitCurrent *
              powerFactor) /
            section
          : (2 * rules.resistivity * distance * circuitCurrent) / section;
      const voltageDropPercent =
        (voltageDropVolts / input.powerSupply.nominalVoltage) * 100;
      return (
        employmentCurrent <= capacity && voltageDropPercent <= voltageDropLimit
      );
    });
    const section = minimumSection || rules.sections[rules.sections.length - 1];
    const voltageDropVolts =
      input.powerSupply.type === "TRIPHASE"
        ? (Math.sqrt(3) *
            rules.resistivity *
            distance *
            circuitCurrent *
            powerFactor) /
          section
        : (2 * rules.resistivity * distance * circuitCurrent) / section;
    const voltageDropPercent =
      (voltageDropVolts / input.powerSupply.nominalVoltage) * 100;
    const breakerLimit =
      rules.maxBreakerByCircuitType[circuit.type] ||
      rules.maxBreakerByCircuitType.AUTRE;
    const recommendedBreaker = Math.min(
      getNextBreaker(employmentCurrent, rules.breakerRatings),
      breakerLimit,
    );

    result.currentNominal = employmentCurrent;
    result.currentDesign = employmentCurrent;
    result.recommendedCableSection = section;
    result.correctedCableCapacity =
      getCableCapacity(section, input.cableData) / rules.correctionFactor;
    result.recommendedBreaker = recommendedBreaker;
    result.voltageDropVolts = voltageDropVolts;
    result.voltageDropPercent = voltageDropPercent;
    result.voltageDropCheck =
      voltageDropPercent <= voltageDropLimit ? "PASS" : "FAIL";
    result.overloadCheck =
      employmentCurrent <= recommendedBreaker &&
      recommendedBreaker <= result.correctedCableCapacity
        ? "PASS"
        : "FAIL";
    result.coordinationCheck =
      employmentCurrent <= recommendedBreaker ? "PASS" : "FAIL";
  } else if (rules.calculationMode === "IEC_60364" && input) {
    normalizeIec60364Result(physicalResult, input, rules, result);
  } else {
    result.voltageDropPercent = Number(
      Number(result.voltageDropPercent).toFixed(2),
    );
    result.voltageDropCheck =
      result.voltageDropPercent <= rules.voltageDropLimitPercent
        ? "PASS"
        : "FAIL";
  }

  result.standard = standard;
  if (!result.assumptions && rules.calculationMode === "NFC_15_100" && input) {
    result.assumptions = {
      correctionFactor: rules.correctionFactor,
      defaultPowerFactor: true,
    };
  }

  return result;
}

function getPersistableResult(normalizedResult) {
  return Object.fromEntries(
    RESULT_FIELDS.map((field) => [field, normalizedResult[field]]),
  );
}

module.exports = {
  normalizeCalculationResult,
  getPersistableResult,
};
