require("dotenv").config();
const bcrypt = require("bcrypt");
const { getPrismaClient } = require("../src/config/prisma");

async function main() {
  const [, , emailArg, passwordArg, nameArg] = process.argv;
  const email = String(emailArg || process.env.ADMIN_EMAIL || "")
    .trim()
    .toLowerCase();
  const password = passwordArg || process.env.ADMIN_PASSWORD;
  const name = nameArg || process.env.ADMIN_NAME || "Administrateur";

  if (!email || !password) {
    throw new Error(
      "Usage: npm run seed-admin -- email@example.com mot-de-passe [nom]",
    );
  }

  const prisma = getPrismaClient();
  const passwordHash = await bcrypt.hash(password, 12);
  const user = await prisma.user.upsert({
    where: { email },
    update: {
      name,
      password: passwordHash,
      role: "ADMIN",
      status: "ACTIVE",
      emailVerified: new Date(),
    },
    create: {
      name,
      email,
      password: passwordHash,
      role: "ADMIN",
      status: "ACTIVE",
      emailVerified: new Date(),
    },
    select: { id: true, name: true, email: true, role: true, status: true },
  });

  console.log("Admin prêt:", user);
  await prisma.$disconnect();
}

main().catch((error) => {
  console.error("Impossible de créer l'admin:", error.message);
  process.exit(1);
});
