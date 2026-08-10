const authService = require("../services/authService");

async function createAccount(req, res) {
  const { name, email, password } = req.body;
  const user = await authService.createAccount({ name, email, password });
  res.status(201).json({ success: true, data: user });
}

module.exports = {
  createAccount,
};
