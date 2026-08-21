const Joi = require("joi");
const Redis = require("ioredis"); // communication avec le serveur distant de redis

const isProductionEnvironment = process.env.NODE_ENV === "production";
const FALLBACK_JWT_ACCESS_SECRET = "dev-access-secret-key-change-me-please-123456";
const FALLBACK_JWT_REFRESH_SECRET = "dev-refresh-secret-key-change-me-please-987654";
const accessSecret =
  process.env.JWT_ACCESS_SECRET ||
  (isProductionEnvironment ? "" : FALLBACK_JWT_ACCESS_SECRET);
const refreshSecret =
  process.env.JWT_REFRESH_SECRET ||
  (isProductionEnvironment ? "" : FALLBACK_JWT_REFRESH_SECRET);

// allow DATABASE_URL to be used in .env while code expects DB_URL
if (!process.env.DB_URL && process.env.DATABASE_URL) {
  process.env.DB_URL = process.env.DATABASE_URL;
}

// schema de validation
const envSchema = Joi.object({
  NODE_ENV: Joi.string()
    .valid("development", "production", "test")
    .default("development"),
  PORT: Joi.number().integer().min(1).max(65535).default(8800),
  DATABASE_URL: Joi.string(),
  CLIENT_URL: Joi.string().uri().default("http://localhost:5173"),
  CALCUL_URL: Joi.string().uri().default("http://localhost:8000"),
  CORS_ORIGINS: Joi.string().allow("", null).default(""),

  RATE_LIMIT_MAX_PUBLIC: Joi.number().integer().default(100),
  RATE_LIMIT_MAX_PRIVATE: Joi.number().integer().default(300),
  RATE_LIMIT_MAX_AUTH: Joi.number().integer().default(20),
  RATE_LIMIT_MAX_UPLOAD: Joi.number().integer().default(10),
  RATE_LIMIT_WINDOW_MS: Joi.number()
    .integer()
    .default(15 * 60 * 1000),

  SLOW_DOWN_DELAY_AFTER: Joi.number().integer().default(50),
  SLOW_DOWN_DELAY_MS: Joi.number().integer().default(500),
  SLOW_DOWN_MAX_DELAY_MS: Joi.number().integer().default(5000),

  KEEP_ALIVE_TIMEOUT: Joi.number().integer().default(61000),
  HEADERS_TIMEOUT: Joi.number().integer().default(65000),
  REQUEST_TIMEOUT: Joi.number().integer().default(120000),

  COOKIE_MAX_AGE_MS: Joi.number()
    .integer()
    .default(24 * 60 * 60 * 1000),

  TRUST_PROXY: Joi.boolean()
    .truthy("1")
    .truthy("true")
    .falsy("0")
    .falsy("false")
    .default(false),

  REDIS_URL: Joi.string().uri().allow("", null),
  REQUEST_SIZE_LIMIT: Joi.string().default("10kb"),

  LOG_LEVEL: Joi.string()
    .valid("fatal", "error", "warn", "info", "debug", "trace")
    .default("info"),

  jwt: Joi.object({
    accessSecret: Joi.string().allow("").default(FALLBACK_JWT_ACCESS_SECRET),
    refreshSecret: Joi.string().allow("").default(FALLBACK_JWT_REFRESH_SECRET),
    accessExpiresInMinutes: Joi.number().default(
      Number(process.env.JWT_ACCESS_EXPIRES_IN_MINUTES) || 15,
    ),
    refreshExpiresInDays: Joi.number().default(
      Number(process.env.JWT_REFRESH_EXPIRES_IN_DAYS) || 30,
    ),
  }).default({}),

  google: Joi.object({
    clientId: Joi.string()
      .allow("", null)
      .default(process.env.GOOGLE_CLIENT_ID || ""),
    clientSecret: Joi.string()
      .allow("", null)
      .default(process.env.GOOGLE_CLIENT_SECRET || ""),
  }).default({}),

  cloudinary: Joi.object({
    cloudName: Joi.string()
      .allow("", null)
      .default(process.env.CLOUDINARY_CLOUD_NAME || ""),
    apiKey: Joi.string()
      .allow("", null)
      .default(process.env.CLOUDINARY_API_KEY || ""),
    apiSecret: Joi.string()
      .allow("", null)
      .default(process.env.CLOUDINARY_API_SECRET || ""),
  }).default({}),

  smtp: Joi.object({
    host: Joi.string()
      .allow("", null)
      .default(process.env.SMTP_HOST || ""),
    port: Joi.number().default(Number(process.env.SMTP_PORT) || 587),
    user: Joi.string()
      .allow("", null)
      .default(process.env.SMTP_USER || ""),
    pass: Joi.string()
      .allow("", null)
      .default(process.env.SMTP_PASS || ""),
    fromName: Joi.string().default(process.env.SMTP_FROM_NAME || "No Reply"),
    fromEmail: Joi.string().default(
      process.env.SMTP_FROM_EMAIL || "no-reply@example.com",
    ),
  }).default({}),
}).unknown(true);

const normalizedEnv = {
  ...process.env,
  jwt: {
    accessSecret,
    refreshSecret,
    accessExpiresInMinutes:
      Number(process.env.JWT_ACCESS_EXPIRES_IN_MINUTES) || 15,
    refreshExpiresInDays: Number(process.env.JWT_REFRESH_EXPIRES_IN_DAYS) || 30,
  },
  google: {
    clientId: process.env.GOOGLE_CLIENT_ID || "",
    clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
  },
  cloudinary: {
    cloudName: process.env.CLOUDINARY_CLOUD_NAME || "",
    apiKey: process.env.CLOUDINARY_API_KEY || "",
    apiSecret: process.env.CLOUDINARY_API_SECRET || "",
  },
  smtp: {
    host: process.env.SMTP_HOST || "",
    port: Number(process.env.SMTP_PORT) || 587,
    user: process.env.SMTP_USER || "",
    pass: process.env.SMTP_PASS || "",
    fromName: process.env.SMTP_FROM_NAME || "No Reply",
    fromEmail: process.env.SMTP_FROM_EMAIL || "no-reply@example.com",
  },
};

const { value: env, error } = envSchema.validate(normalizedEnv, {
  abortEarly: false,
  convert: true,
});

if (error) {
  throw new Error(`Environment validation error: ${error.message}`);
}

const corsOrigins = (env.CORS_ORIGINS || env.CLIENT_URL)
  .split(",")
  .map((origin) => origin.trim().replace(/\/+$/, ""))
  .filter(Boolean);

const redisClient = env.REDIS_URL
  ? new Redis(env.REDIS_URL, {
      maxRetriesPerRequest: null,
      enableOfflineQueue: false,
    })
  : null;

const cookieOptions = {
  httpOnly: true,
  secure: env.NODE_ENV === "production",
  sameSite: "lax",
  maxAge: env.COOKIE_MAX_AGE_MS,
};

const isProduction = env.NODE_ENV === "production";

module.exports = {
  env,
  corsOrigins,
  redisClient,
  cookieOptions,
  isProduction,
};
