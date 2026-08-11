const express = require("express");
const { authLimiter } = require("../../../common/middlewares/rateLimiter");
const {
  register,
  login,
  verifyEmail,
  resendVerification,
  forgotPassword,
  resetPassword,
  googleAuth,
  logout,
} = require("../controllers/auth.controller");

const router = express.Router();

router.post("/register", authLimiter, register);
router.post("/login", authLimiter, login);
router.post("/logout", authLimiter, logout);
router.post("/verify-email", authLimiter, verifyEmail);
router.post("/resend-verification", authLimiter, resendVerification);
router.post("/forgot-password", authLimiter, forgotPassword);
router.post("/reset-password", authLimiter, resetPassword);
router.post("/google", authLimiter, googleAuth);

module.exports = router;
