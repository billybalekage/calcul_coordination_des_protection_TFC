const express = require("express");
const { authenticate } = require("../../auth/middleware/authenticate");
const controller = require("../controllers/calcul.controller");

const router = express.Router();

router.use(authenticate);
router.get("/standards", controller.getAvailableStandards);
router.get("/:projectId/report", controller.downloadReport);
router.post("/:projectId", controller.launchCalculation);

module.exports = router;
