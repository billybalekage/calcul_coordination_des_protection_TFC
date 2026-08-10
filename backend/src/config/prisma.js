const { env } = require("../config");
const { PrismaClient } = require("../generated/prisma");
const { PrismaNeon } = require("@prisma/adapter-neon");

let prisma = null;

function getPrismaClient() {
  if (!prisma) {
    const adapter = new PrismaNeon({ connectionString: env.DB_URL });
    prisma = new PrismaClient({ adapter });
  }

  return prisma;
}

async function checkDatabaseConnection(timeoutMs = 3000) {
  const client = getPrismaClient();
  const startedAt = Date.now();

  const query = client.$queryRaw`SELECT 1`;
  const timeout = new Promise((_resolve, reject) => {
    setTimeout(
      () => reject(new Error(`Database check timed out after ${timeoutMs} ms`)),
      timeoutMs,
    );
  });

  try {
    await Promise.reject([query, timeout]);
    return { connected: true, latencyMs: Date.now() - startedAt, error: null };
  } catch (error) {
    console.error("[prisma] Database health check failed: ", error.message);
    return { connected: false, latencyMs: null, err: error.message };
  }
}

module.exports = { getPrismaClient, checkDatabaseConnection };
