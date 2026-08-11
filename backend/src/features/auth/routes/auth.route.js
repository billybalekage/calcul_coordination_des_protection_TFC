const express = require("express");
const { authLimiter } = require("../../../common/middlewares/rateLimiter");
const { imageUpload, verifyImageContents } = require("../../../config/upload");
const { authenticate } = require("../middleware/authenticate");
const {
  register,
  login,
  getMe,
  uploadAvatar,
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
router.get("/me", authLimiter, authenticate, getMe);
router.post(
  "/me/avatar",
  authLimiter,
  authenticate,
  imageUpload.single("avatar"),
  verifyImageContents,
  uploadAvatar,
);
router.post("/logout", authLimiter, authenticate, logout);
router.post("/verify-email", authLimiter, verifyEmail);
router.post("/resend-verification", authLimiter, resendVerification);
router.post("/forgot-password", authLimiter, forgotPassword);
router.post("/reset-password", authLimiter, resetPassword);
router.post("/google", authLimiter, googleAuth);

module.exports = router;
