const STANDARD_RULES = Object.freeze({
  NFC_15_100: Object.freeze({
    label: "NF C 15-100",
    calculationMode: "NFC_15_100",
    voltageDropLimitPercent: 5,
    lightingVoltageDropLimitPercent: 3,
    resistivity: 0.023,
    correctionFactor: 1,
    sections: [1.5, 2.5, 4, 6, 10, 16, 25, 35, 50, 70, 95, 120],
    breakerRatings: [10, 16, 20, 25, 32, 40, 50, 63, 80, 100, 125, 160],
    maxBreakerByCircuitType: {
      ECLAIRAGE: 16,
      PRISE_COURANT: 20,
      CHAUFFAGE: 20,
      FORCE_MOTRICE: 32,
      CLIMATISATION: 32,
      AUTRE: 32,
    },
  }),
  IEC_60364: Object.freeze({
    label: "IEC 60364",
    calculationMode: "IEC_60364",
    voltageDropLimitPercent: 5,
    lightingVoltageDropLimitPercent: 3,
    resistivity: 0.0225,
    correctionFactors: Object.freeze({
      ambientTemperature: 1,
      grouping: 1,
      thermalInsulation: 1,
      soilThermalResistivity: 1,
    }),
    protectionTripFactor: 1.45,
    privateTransformerVoltageDropLimits: Object.freeze({
      lighting: 6,
      other: 8,
    }),
    sections: [1.5, 2.5, 4, 6, 10, 16, 25, 35, 50, 70, 95, 120],
    breakerRatings: [6, 10, 13, 16, 20, 25, 32, 40, 50, 63, 80, 100, 125, 160],
  }),
});

function getStandardRules(standard) {
  const rules = STANDARD_RULES[standard];
  if (!rules) {
    const error = new Error(`Standard de calcul non supporté: ${standard}`);
    error.statusCode = 422;
    error.code = "UNSUPPORTED_CALCULATION_STANDARD";
    error.isOperational = true;
    throw error;
  }
  return rules;
}

function listStandards() {
  return Object.entries(STANDARD_RULES).map(([value, rules]) => ({
    value,
    label: rules.label,
    calculationMode: rules.calculationMode,
    voltageDropLimitPercent: rules.voltageDropLimitPercent,
    lightingVoltageDropLimitPercent: rules.lightingVoltageDropLimitPercent,
  }));
}

module.exports = {
  STANDARD_RULES,
  getStandardRules,
  listStandards,
};
