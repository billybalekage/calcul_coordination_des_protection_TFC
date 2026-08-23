const Joi = require("joi");

const finiteNumber = Joi.number().custom((value, helpers) => {
  if (!Number.isFinite(value)) return helpers.error("number.finite");
  return value;
});
const positiveNumber = finiteNumber.greater(0);
const nonNegativeNumber = finiteNumber.min(0);

const projectSchema = Joi.object({
  name: Joi.string().trim().min(1).max(150).required(),
  client: Joi.string().trim().max(150).allow("", null),
  location: Joi.string().trim().max(255).allow("", null),
}).options({ abortEarly: false, stripUnknown: true });

const powerSupplySchema = Joi.object({
  type: Joi.string().valid("MONOPHASE", "TRIPHASE").required(),
  nominalVoltage: positiveNumber.max(100000).required(),
  frequency: positiveNumber.max(1000).required(),
  regimeNeutre: Joi.string().valid("TT", "TN", "IT").required(),
  distanceSourceToTGBT: nonNegativeNumber.max(100000).required(),
  standard: Joi.string()
    .valid("NFC_15_100", "IEC_60364", "IEEE_141", "IEEE_242")
    .required(),
}).options({ abortEarly: false, stripUnknown: true });

const circuitSchema = Joi.object({
  name: Joi.string().trim().min(1).max(150).required(),
  circuitCount: Joi.number().integer().min(1).max(10000).default(1),
  type: Joi.string()
    .valid(
      "ECLAIRAGE",
      "PRISE_COURANT",
      "FORCE_MOTRICE",
      "CHAUFFAGE",
      "CLIMATISATION",
      "AUTRE",
    )
    .required(),
  totalPower: nonNegativeNumber.max(100000000).required(),
  cosPhi: positiveNumber.max(1).allow(null).default(1),
  utilizationFactor: positiveNumber.max(1).allow(null).default(1),
  simultaneityFactor: positiveNumber.max(1).allow(null).default(1),
}).options({ abortEarly: false, stripUnknown: true });

const cableDataSchema = Joi.object({
  material: Joi.string().valid("CUIVRE", "ALUMINIUM").required(),
  isolation: Joi.string().valid("PVC", "XLPE", "EPR").required(),
  modePose: Joi.string()
    .valid(
      "SOUS_CONDUIT_EN_SAILLIE",
      "ENCASTRE_DANS_MUR",
      "CHEMINEE_DE_CABLES",
      "ENTERRE",
      "AIR_LIBRE",
    )
    .required(),
}).options({ abortEarly: false, stripUnknown: true });

const protectionSchema = Joi.object({
  type: Joi.string()
    .valid("DISJONCTEUR", "FUSIBLE", "INTERRUPTEUR_SECTIONNEUR")
    .required(),
  ratedCurrent: positiveNumber.max(100000).required(),
  numberOfPoles: Joi.number().integer().valid(1, 2, 3, 4).required(),
  curveType: Joi.string().valid("B", "C", "D", "K", "Z").required(),
  breakingCapacity: positiveNumber.max(1000000).required(),
}).options({ abortEarly: false, stripUnknown: true });

const furthestLoadDistanceSchema = Joi.object({
  circuitName: Joi.string().trim().min(1).max(150).required(),
  distance: nonNegativeNumber.max(100000).required(),
}).options({ abortEarly: false, stripUnknown: true });

function validate(schema, payload) {
  const { error, value } = schema.validate(payload);
  if (error) {
    const details = error.details.map((item) => ({
      field: item.path.join("."),
      message: item.message,
    }));
    const validationError = new Error("Données invalides.");
    validationError.statusCode = 422;
    validationError.code = "VALIDATION_ERROR";
    validationError.details = details;
    validationError.isOperational = true;
    throw validationError;
  }
  return value;
}

module.exports = {
  projectSchema,
  powerSupplySchema,
  circuitSchema,
  cableDataSchema,
  protectionSchema,
  furthestLoadDistanceSchema,
  validate,
};
