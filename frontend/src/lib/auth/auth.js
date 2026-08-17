import api from "../axios";

async function createUser(data) {
  const response = await api.post("/auth/register", data);
  return response.data;
}

async function Login(data) {
  try {
    const response = await api.post("/auth/login", data);
    return response.data;
  } catch (error) {
    const status = error.response?.status ?? 500;
    const payload = error.response?.data || {};

    return {
      success: false,
      status,
      message:
        payload.message ||
        (status === 401
          ? "Identifiants invalides."
          : "Impossible de se connecter pour le moment."),
      requiresVerification: false,
      requiresTwoFactor: false,
    };
  }
}

async function Logout(data) {
  const response = await api.post("/auth/logout", data);
  return response.data;
}

async function getCurrentUser() {
  try {
    const response = await api.get("/auth/me");
    return response.data;
  } catch (error) {
    if (error?.response?.status === 401 || error?.response?.status === 403) {
      return null;
    }
    throw error;
  }
}

async function UploadAvatar(data) {
  const response = await api.post("/auth/me/avatar", data);
  return response.data;
}

async function VerifyEmail(data) {
  const response = await api.post("/auth/verify-email", data);
  return response.data;
}

async function resendVerification(data) {
  const response = await api.post("/auth/resend-verification", data);
  return response.data;
}

async function forgotPassword(data) {
  const response = await api.post("/auth/forgot-password", data);
  return response.data;
}

async function resetPassword(data) {
  const response = await api.post("/auth/reset-password", data);
  return response.data;
}

async function googleAuth(data) {
  const response = await api.post("/auth/google", data);
  return response.data;
}

export {
  createUser,
  Login,
  Logout,
  getCurrentUser,
  UploadAvatar,
  VerifyEmail,
  resendVerification,
  forgotPassword,
  resetPassword,
  googleAuth,
};

export default {
  createUser,
  Login,
  Logout,
  getCurrentUser,
  UploadAvatar,
  VerifyEmail,
  resendVerification,
  forgotPassword,
  resetPassword,
  googleAuth,
};
