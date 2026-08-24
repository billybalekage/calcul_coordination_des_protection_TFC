const projectService = require("../services/project.service");
const calculService = require("../../calculs/services/calcul.service");
const {
  projectSchema,
  powerSupplySchema,
  circuitSchema,
  cableDataSchema,
  protectionSchema,
  furthestLoadDistanceSchema,
  validate,
} = require("../utils/project.validation");

function projectId(req) {
  return req.params.projectId;
}

async function createProject(req, res) {
  const data = validate(projectSchema, req.body);
  const project = await projectService.createProject(req.user.id, data);
  res.status(201).json({ success: true, project });
}

async function getProjects(req, res) {
  const projects = await projectService.getUserProjects(req.user.id);
  res.status(200).json({ success: true, projects });
}

async function addPowerSupply(req, res) {
  const data = validate(powerSupplySchema, req.body);
  const powerSupply = await projectService.savePowerSupply(
    projectId(req),
    req.user.id,
    data,
  );
  res.status(200).json({ success: true, powerSupply });
}

async function addCircuit(req, res) {
  const data = validate(circuitSchema, req.body);
  const circuit = await projectService.addCircuit(
    projectId(req),
    req.user.id,
    data,
  );
  res.status(201).json({ success: true, circuit });
}

async function updateCircuit(req, res) {
  const data = validate(circuitSchema, req.body);
  const result = await projectService.updateCircuit(
    projectId(req),
    req.user.id,
    req.params.circuitId,
    data,
  );
  if (!result.count)
    return res.status(404).json({ message: "Circuit introuvable." });
  res.status(200).json({ success: true });
}

async function deleteCircuit(req, res) {
  const result = await projectService.deleteCircuit(
    projectId(req),
    req.user.id,
    req.params.circuitId,
  );
  if (!result.count)
    return res.status(404).json({ message: "Circuit introuvable." });
  res.status(204).send();
}

async function addCableData(req, res) {
  const data = validate(cableDataSchema, req.body);
  const cableData = await projectService.saveCableData(
    projectId(req),
    req.user.id,
    data,
  );
  res.status(200).json({ success: true, cableData });
}

async function addProtection(req, res) {
  const data = validate(protectionSchema, req.body);
  const protection = await projectService.saveProtection(
    projectId(req),
    req.user.id,
    data,
  );
  res.status(200).json({ success: true, protection });
}

async function addFurthestLoadDistance(req, res) {
  const data = validate(furthestLoadDistanceSchema, req.body);
  const furthestLoadDistance = await projectService.saveFurthestLoadDistance(
    projectId(req),
    req.user.id,
    data,
  );
  res.status(200).json({ success: true, furthestLoadDistance });
}

async function launchCalculation(req, res) {
  const result = await calculService.calculate(projectId(req), req.user.id);
  res.status(200).json({ success: true, result });
}

async function getProject(req, res) {
  const project = await projectService.getOwnedProject(
    projectId(req),
    req.user.id,
    {
      powerSupply: true,
      circuits: true,
      cableData: true,
      protection: true,
      furthestLoadDistance: true,
      result: true,
    },
  );
  res.status(200).json({ success: true, project });
}

module.exports = {
  createProject,
  getProjects,
  addPowerSupply,
  addCircuit,
  updateCircuit,
  deleteCircuit,
  addCableData,
  addProtection,
  addFurthestLoadDistance,
  launchCalculation,
  getProject,
};
