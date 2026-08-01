const express = require("express")
const cookieParser = require("cookie-parser")
const cors = require("cors")
const helmet = require("helmet")
const compression = require("compression")
const Sentry = require("@sentry/node")
const errorHandler = require("./common/middlewares/errorHandler")
const notFound = require("./common/middlewares/notFound")

const createApp = () => {
  const app = express();

  app.use((req, _res, next) => {
    req.id =
      req.get("x-request-id") ||
      `req-${Date.now()}-${Math.random().toString(16).slice(2)}`;
    next();
  });

  app.use(helmet());

  const allowedOrigins = (
    process.env.CORS_ORIGINS ||
    process.env.CLIENT_URL ||
    "http://localhost:3000"
  )
    .split(",")
    .map((origin) => origin.trim())
    .filter(Boolean);

  app.use(
    cors({
      origin: allowedOrigins,
      credentials: true,
      methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
      allowedHeaders: [
        "Content-Type",
        "Authorization",
        "X-Requested-With",
        "x-request-id",
      ],
    }),
  );

  app.use((req, res, next) => {
    if (req.method === "OPTIONS") {
      res.sendStatus(204);
      return;
    }
    next();
  });

  app.use(compression());
  app.use(express.json({ limit: "10mb" }));
  app.use(cookieParser());
  app.use(express.urlencoded({ extended: true, limit: "10mb" }));

  app.get("/health", (_req, res) => {
    res.status(200).json({
      status: "ok",
      service: "electrique-api",
      timestamp: new Date().toISOString(),
    });
  });

  app.use(notFound);

  Sentry.setupExpressErrorHandler(app, {
    shouldHandleError(error) {
      const status = error.status || error.statusCode || 500;
      return status >= 500;
    },
  });

  app.use(errorHandler);

  return app;
}

module.exports = createApp