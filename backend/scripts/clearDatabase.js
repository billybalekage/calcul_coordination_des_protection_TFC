require("dotenv").config();

const { getPrismaClient } = require("../src/config/prisma");

async function clearDatabase() {
  const prisma = getPrismaClient();

  try {
    console.log(
      "⚠️ Suppression de toutes les données de la base de données...",
    );

    await prisma.$executeRawUnsafe(`
      TRUNCATE TABLE
        "Circuit",
        "PowerSupply",
        "FurthestLoadDistance",
        "CableData",
        "Protection",
        "Result",
        "Project",
        "Session",
        "Account",
        "VerificationToken",
        "User"
      RESTART IDENTITY CASCADE;
    `);

    console.log("✅ Toutes les données ont été supprimées avec succès.");
  } finally {
    await prisma.$disconnect();
  }
}

clearDatabase().catch((error) => {
  console.error("Erreur lors de la suppression des données :", error);
  process.exit(1);
});
