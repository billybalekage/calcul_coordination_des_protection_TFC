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
  if (!project.cableData) missing.push("cableData");
  if (!project.protection) missing.push("protection");
  if (!project.furthestLoadDistance) missing.push("furthestLoadDistance");

  if (missing.length) {
    throw new BadRequestError("Le projet est incomplet.", { missing });
  }

  return {
    project: {
      id: project.id,
      name: project.name,
      client: project.client,
      location: project.location,
    },
    powerSupply: project.powerSupply,
    circuits: project.circuits,
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
