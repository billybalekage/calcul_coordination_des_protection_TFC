const express = require("express");
const { createAccount } = require("../controllers/auth.controller");

const router = express.Router();

router.post("/create-account", createAccount);

module.exports = router;
