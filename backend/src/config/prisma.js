const { env } = require("../config");
const { PrismaClient } = require("../generated/prisma");

let prisma = null;

function getPrismaClient() {
  if (!prisma) {
    const connectionString =
      env.DB_URL || env.DATABASE_URL || process.env.DATABASE_URL;

    if (!connectionString) {
      throw new Error(
        "Database connection string is missing. Set DATABASE_URL or DB_URL in your environment variables.",
      );
    }

    let adapter;

    if (/neon|neondatabase|db\.neon\.tech|neon\.tech/i.test(connectionString)) {
      const { PrismaNeon } = require("@prisma/adapter-neon");
      adapter = new PrismaNeon({ connectionString });
    } else if (/^postgres(ql)?:\/\//i.test(connectionString)) {
      const { PrismaPg } = require("@prisma/adapter-pg");
      adapter = new PrismaPg({ connectionString });
    } else {
      throw new Error(
        "Unsupported database URL format. Use a PostgreSQL or Neon connection string.",
      );
    }

    prisma = new PrismaClient({ adapter });
  }

  return prisma;
}

async function checkDatabaseConnection(timeoutMs = 3000) {
  const startedAt = Date.now();

  try {
    const client = getPrismaClient();
    let timeoutHandle;
    const timeout = new Promise((_resolve, reject) => {
      timeoutHandle = setTimeout(
        () =>
          reject(new Error(`Database check timed out after ${timeoutMs} ms`)),
        timeoutMs,
      );
    });

    await Promise.race([client.$queryRaw`SELECT 1`, timeout]);
    clearTimeout(timeoutHandle);
    return { connected: true, latencyMs: Date.now() - startedAt, error: null };
  } catch (error) {
    console.error("[prisma] Database health check failed: ", error.message);
    return { connected: false, latencyMs: null, error: error.message };
  }
}

module.exports = { getPrismaClient, checkDatabaseConnection };
