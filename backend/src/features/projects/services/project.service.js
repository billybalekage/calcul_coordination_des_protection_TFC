const prismaModule = require("../../../config/prisma");
const { NotFoundError } = require("../../../common/errors/AppErrors");

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

async function getUserProjects(userId) {
  return getPrisma().project.findMany({
    where: { userId },
    orderBy: { updatedAt: "desc" },
  });
}

async function createProject(userId, data) {
  const { name, client, location } = data;
  if ((!name, !client, !location)) {
    throw new ValidationError("Tout les champs sont requies");
  }
  return getPrisma().project.create({
    data: { name, client, location, userId },
  });
}

async function savePowerSupply(projectId, userId, data) {
  await getOwnedProject(projectId, userId);
  return getPrisma().powerSupply.upsert({
    where: { projectId },
    create: { ...data, project: { connect: { id: projectId } } },
    update: data,
  });
}

async function addCircuit(projectId, userId, data) {
  await getOwnedProject(projectId, userId);
  return getPrisma().circuit.create({
    data: { ...data, project: { connect: { id: projectId } } },
  });
}

async function updateCircuit(projectId, userId, circuitId, data) {
  await getOwnedProject(projectId, userId);
  return getPrisma().circuit.updateMany({
    where: { id: circuitId, projectId },
    data,
  });
}

async function deleteCircuit(projectId, userId, circuitId) {
  await getOwnedProject(projectId, userId);
  return getPrisma().circuit.deleteMany({
    where: { id: circuitId, projectId },
  });
}

async function saveCableData(projectId, userId, data) {
  await getOwnedProject(projectId, userId);
  return getPrisma().cableData.upsert({
    where: { projectId },
    create: { ...data, project: { connect: { id: projectId } } },
    update: data,
  });
}

async function saveProtection(projectId, userId, data) {
  await getOwnedProject(projectId, userId);
  return getPrisma().protection.upsert({
    where: { projectId },
    create: { ...data, project: { connect: { id: projectId } } },
    update: data,
  });
}

async function saveFurthestLoadDistance(projectId, userId, data) {
  await getOwnedProject(projectId, userId);
  return getPrisma().furthestLoadDistance.upsert({
    where: { projectId },
    create: { ...data, project: { connect: { id: projectId } } },
    update: data,
  });
}

module.exports = {
  createProject,
  getUserProjects,
  getOwnedProject,
  savePowerSupply,
  addCircuit,
  updateCircuit,
  deleteCircuit,
  saveCableData,
  saveProtection,
  saveFurthestLoadDistance,
};
