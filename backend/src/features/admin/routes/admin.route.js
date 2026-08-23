const express = require("express");
const { authenticate } = require("../../auth/middleware/authenticate");
const { requireAdmin } = require("../middleware/requireAdmin");
const controller = require("../controllers/admin.controller");

const router = express.Router();

router.use(authenticate, requireAdmin);
router.get("/dashboard", controller.dashboard);
router.get("/users", controller.listUsers);
router.patch("/users/:userId", controller.updateUser);
router.delete("/users/:userId", controller.deleteUser);
router.get("/projects", controller.listProjects);
router.delete("/projects/:projectId", controller.deleteProject);

module.exports = router;
