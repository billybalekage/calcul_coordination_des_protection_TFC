const adminService = require("../services/admin.service");

async function dashboard(req, res) {
  const dashboardData = await adminService.getDashboard();
  res.status(200).json({ success: true, ...dashboardData });
}

async function listUsers(req, res) {
  const result = await adminService.listUsers(req.query);
  res.status(200).json({ success: true, ...result });
}

async function updateUser(req, res) {
  const user = await adminService.updateUser(
    req.params.userId,
    req.body,
    req.user.id,
  );
  res.status(200).json({ success: true, user });
}

async function deleteUser(req, res) {
  await adminService.deleteUser(req.params.userId, req.user.id);
  res.status(204).send();
}

async function listProjects(req, res) {
  const result = await adminService.listProjects(req.query);
  res.status(200).json({ success: true, ...result });
}

async function deleteProject(req, res) {
  await adminService.deleteProject(req.params.projectId);
  res.status(204).send();
}

module.exports = {
  dashboard,
  listUsers,
  updateUser,
  deleteUser,
  listProjects,
  deleteProject,
};
