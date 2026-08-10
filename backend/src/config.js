const Joi = require("joi");
const Redis = require("ioredis"); // communication avec le serveur distant de redis

// schema de validation
const envSchema = Joi.object({
  NODE_ENV: Joi.string() // la variable doit etre une chaine de caractere
    .valid("development", "production", "test")
    .default("development"),

  PORT: Joi.number().integer().min(1).max(65535).default(7000), // lr port est comptrie entre 1 et 65545

  DB_URL: Joi.string(),

  CLIENT_URL: Joi.string().uri().default("http://localhost:5173"),
  CORS_ORIGINS: Joi.string().allow("", null).default(""),
  TRUST_PROXY: Joi.boolean()
    .truthy("1")
    .truthy("true")
    .falsy("0")
    .falsy("false")
    .default(false),
  REDIS_URL: Joi.string().uri().allow("", null),
  REQUEST_SIZE_LIMIT: Joi.string().default("10kb"),
  RATE_LIMIT_WINDOW_MS: Joi.number()
    .integer()
    .default(15 * 60 * 1000),
  RATE_LIMIT_MAX_PUBLIC: Joi.number().integer().default(100),
  RATE_LIMIT_MAX_PRIVATE: Joi.number().integer().default(300),
  RATE_LIMIT_MAX_AUTH: Joi.number().integer().default(20),
  RATE_LIMIT_MAX_UPLOAD: Joi.number().integer().default(10),
  SLOW_DOWN_DELAY_AFTER: Joi.number().integer().default(50),
  SLOW_DOWN_DELAY_MS: Joi.number().integer().default(500),
  SLOW_DOWN_MAX_DELAY_MS: Joi.number().integer().default(5000),
  KEEP_ALIVE_TIMEOUT: Joi.number().integer().default(61000),
  HEADERS_TIMEOUT: Joi.number().integer().default(65000),
  REQUEST_TIMEOUT: Joi.number().integer().default(120000),
  COOKIE_MAX_AGE_MS: Joi.number()
    .integer()
    .default(24 * 60 * 60 * 1000),
  LOG_LEVEL: Joi.string()
    .valid("fatal", "error", "warn", "info", "debug", "trace")
    .default("info"),
}).unknown(true);

// validation des variables d'environnememt
// value contien les variables d'environnements vaidees et converties
const { value: env, error } = envSchema.validate(process.env, {
  // process.env possede toutes les variables d'environements
  abortEarly: false, // si plusieurs variables sont incorecte, Joi les affiche tous
  convert: true, // covertie automatiquement les types
});

// si Erreur de validation d'environement
if (error) {
  throw new Error(`Environment validation error: ${error.message}`);
}

// formatages des origines
const corsOrigins = (env.CORS_ORIGINS || env.CLIENT_URL)
  .split(",") // decoupe la chaine grace au virgules
  .map((origin) => origin.trim()) // supprime les espaces
  .filter(Boolean); // supprime les elements vides

const redisClient = env.REDIS_URL
  ? new Redis(env.REDIS_URL, {
      maxRetriesPerRequest: null, // ne pas limiter le nombre des tentatives lorsqu'une requete echous
      enableOfflineQueue: false, // Si redis est indisponible, ne pas mettre les requetes en attentes
    })
  : null;

const cookieOptions = {
  httpOnly: true, // Cokie inaccessible depuis javaScript
  secure: env.NODE_ENV === "production", // le cookie ne sera envoyé que via https
  sameSite: "lax",
  maxAge: env.COOKIE_MAX_AGE_MS,
};

module.exports = {
  env,
  corsOrigins,
  redisClient,
  cookieOptions,
};
