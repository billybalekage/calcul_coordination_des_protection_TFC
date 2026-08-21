const axios = require("axios");
const { env } = require("../../../config");

const calculApi = axios.create({
  baseURL: `${env.CALCUL_URL}/api`,
  timeout: env.REQUEST_TIMEOUT,
  headers: {
    "Content-Type": "application/json",
  },
});

if (env.NODE_ENV === "production" && !env.CALCUL_API_KEY) {
  throw new Error("CALCUL_API_KEY must be configured in production.");
}

calculApi.interceptors.request.use((config) => {
  if (env.CALCUL_API_KEY) {
    config.headers["X-API-Key"] = env.CALCUL_API_KEY;
  }
  return config;
});

module.exports = calculApi;
