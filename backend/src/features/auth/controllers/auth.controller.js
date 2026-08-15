const authService = require("../services/authService");
const { signAccessToken, signRefreshToken } = require("../../../config/jwt");
const {
  setAccessTokenCookie,
  setRefreshTokenCookie,
  clearAccessTokenCookie,
  clearRefreshTokenCookie,
} = require("../utils/cookie");

async function getMe(req, res) {
  const user = await authService.getMe(req.user?.id);
  res.status(200).json({ success: true, user });
}

async function uploadAvatar(req, res) {
  const user = await authService.updateProfilePhoto(req.user?.id, req.file);
  res.status(200).json({
    success: true,
    user,
    message: "Photo de profil mise à jour.",
  });
}

function issueAuthCookies(res, userId) {
  const accessToken = signAccessToken({ userId });
  const refreshToken = signRefreshToken({ userId });
  setAccessTokenCookie(res, accessToken);
  setRefreshTokenCookie(res, refreshToken);
  return { accessToken, refreshToken };
}

async function register(req, res) {
  const { name, email, password } = req.body;
  const user = await authService.createAccount({ name, email, password });
  res.status(201).json({
    success: true,
    user,
    message: "Compte créé. Veuillez vérifier votre adresse email.",
  });
}

async function login(req, res) {
  const { email, password } = req.body;
  const result = await authService.login({ email, password });

  if (result.requiresVerification) {
    return res.status(200).json({
      success: true,
      requiresVerification: true,
      user: result.user,
      message: "Veuillez vérifier votre adresse email avant de continuer.",
    });
  }

  if (result.requiresTwoFactor) {
    return res.status(200).json({
      success: true,
      requiresTwoFactor: true,
      user: result.user,
    });
  }

  issueAuthCookies(res, result.user.id);
  res.status(200).json({
    success: true,
    user: result.user,
    message: "Connexion réussie.",
  });
}

async function verifyEmail(req, res) {
  const { token } = req.body;
  const user = await authService.verifyEmail(token);
  issueAuthCookies(res, user.id);
  res.status(200).json({
    success: true,
    user,
    message: "Adresse email vérifiée.",
  });
}

async function resendVerification(req, res) {
  const { email } = req.body;
  const result = await authService.resendVerification(email);
  res.status(200).json({ success: true, ...result });
}

async function forgotPassword(req, res) {
  const { email } = req.body;
  const result = await authService.forgotPassword(email);
  res.status(200).json({ success: true, ...result });
}

async function resetPassword(req, res) {
  const { token, password } = req.body;
  const user = await authService.resetPassword({ token, password });
  res
    .status(200)
    .json({ success: true, user, message: "Mot de passe réinitialisé." });
}

async function googleAuth(req, res) {
  const { idToken } = req.body;
  const result = await authService.processGoogleAuth({ idToken });
  issueAuthCookies(res, result.user.id);
  res.status(200).json({
    success: true,
    user: result.user,
    message: "Connexion Google réussie.",
  });
}

async function logout(req, res) {
  const userId = req.user?.id || req.session?.userId || null;
  await authService.logout({ userId });
  clearAccessTokenCookie(res);
  clearRefreshTokenCookie(res);
  res.status(200).json({ success: true, message: "Déconnexion réussie." });
}

module.exports = {
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
};
