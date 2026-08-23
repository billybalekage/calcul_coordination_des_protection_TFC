const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");
const Sentry = require("@sentry/node");
const { env, corsOrigins } = require("./config");
const { loggerMiddleware } = require("./logger");
const errorHandler = require("./common/middlewares/errorHandler");
const notFound = require("./common/middlewares/notFound");
const requestId = require("./common/middlewares/requestId");
const secureHeaders = require("./common/middlewares/headers");
const { globalSlowDown } = require("./common/middlewares/rateLimiter");
const { checkDatabaseConnection } = require("./config/prisma");

const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const authRoute = require("./features/auth/routes/auth.route");
const projectRoute = require("./features/projects/routes/project.route");
const calculRoute = require("./features/calculs/routes/calcul.routes");
const adminRoute = require("./features/admin/routes/admin.route");

const createApp = () => {
  const app = express();

  // Documentation d'api
  const swaggerOptions = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Electrique API",
        version: "1.0.0",
        description: "Documentation automatique de l'API Express",
      },
    },
    apis: ["./src/features/**/*.js", "./src/**/*.js"],
  };

  const swaggerSpec = swaggerJsdoc(swaggerOptions);

  if (env.NODE_ENV !== "production") {
    app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    app.get("/docs.json", (_req, res) => res.json(swaggerSpec));
  }

  app.set("trust proxy", env.TRUST_PROXY ? 1 : false);

  app.use(requestId);
  app.use(loggerMiddleware);
  app.use(secureHeaders);

  app.use(
    helmet({
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          defaultSrc: ["'self'"],
          scriptSrc: ["'self'"],
          styleSrc: ["'self'", "'unsafe-inline'"],
          imgSrc: ["'self'", "data:"],
          objectSrc: ["'none'"],
          frameAncestors: ["'none'"],
          baseUri: ["'self'"],
          formAction: ["'self'"],
        },
      },
      hsts: {
        maxAge: 63072000,
        includeSubDomains: true,
        preload: true,
      },
      referrerPolicy: { policy: "strict-origin-when-cross-origin" },
      frameguard: { action: "deny" },
      crossOriginEmbedderPolicy: true,
      crossOriginResourcePolicy: { policy: "same-origin" },
      dnsPrefetchControl: { allow: false },
      originAgentCluster: true,
      hidePoweredBy: true,
    }),
  );

  // check connection database
  app.get("/api/health", async (req, res) => {
    const [db] = await Promise.all([checkDatabaseConnection()]);
    const health = db.connected;
    res.status(health ? 200 : 503).json({
      status: health ? "ok" : "degraded",
      database: db,
    });
  });

  app.use(
    cors({
      origin: corsOrigins,
      credentials: true,
      methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
      allowedHeaders: [
        "Content-Type",
        "Authorization",
        "X-Requested-With",
        "X-Request-ID",
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

  app.use(globalSlowDown);
  app.use(compression({ threshold: 1024 }));
  app.use(express.json({ limit: env.REQUEST_SIZE_LIMIT }));
  app.use(cookieParser());
  app.use((req, res, next) => {
    res.locals.cookieOptions = {
      httpOnly: true,
      secure: env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: env.COOKIE_MAX_AGE_MS,
    };
    next();
  });
  app.use(
    express.urlencoded({ extended: true, limit: env.REQUEST_SIZE_LIMIT }),
  );

  app.get("/health", (_req, res) => {
    res.status(200).json({
      status: "ok",
      service: "electrique-api",
      timestamp: new Date().toISOString(),
    });
  });

  app.use("/api/v1/auth", authRoute);
  app.use("/api/v1/projects", projectRoute);
  app.use("/api/v1/calculations", calculRoute);
  app.use("/api/v1/admin", adminRoute);

  app.use(notFound);

  if (env.SENTRY_DSN) {
    Sentry.init({ dsn: env.SENTRY_DSN, environment: env.NODE_ENV });

    if (typeof Sentry.setupExpressErrorHandler === "function") {
      Sentry.setupExpressErrorHandler(app);
    } else if (
      Sentry.Handlers &&
      typeof Sentry.Handlers.errorHandler === "function"
    ) {
      app.use(Sentry.Handlers.errorHandler());
    }
  }

  app.use(errorHandler);

  return app;
};

module.exports = createApp;
