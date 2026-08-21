const axios = require("axios");
const { env } = require("../../../config");

const calculApi = axios.create({
  baseURL: `${env.CALCUL_URL}/api`,
  timeout: env.REQUEST_TIMEOUT,
  headers: {
    "Content-Type": "application/json",
  },
});

calculApi.interceptors.request.use((config) => {
  if (env.CALCUL_API_KEY) {
    config.headers["X-API-Key"] = env.CALCUL_API_KEY;
  }
  return config;
});

module.exports = calculApi;
