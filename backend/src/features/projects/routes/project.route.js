const express = require("express");
const { authenticate } = require("../../auth/middleware/authenticate");
const controller = require("../controllers/project.controller");

const router = express.Router();

router.use(authenticate);
router.post("/create", controller.createProject);
router.get("/", controller.getProjects);
router.get("/:projectId", controller.getProject);
router.post("/:projectId/power-supply", controller.addPowerSupply);
router.post("/:projectId/circuits", controller.addCircuit);
router.patch("/:projectId/circuits/:circuitId", controller.updateCircuit);
router.delete("/:projectId/circuits/:circuitId", controller.deleteCircuit);
router.post("/:projectId/cable-data", controller.addCableData);
router.post("/:projectId/protection", controller.addProtection);
router.post(
  "/:projectId/furthest-load-distance",
  controller.addFurthestLoadDistance,
);
router.post("/:projectId/calculate", controller.launchCalculation);

module.exports = router;
