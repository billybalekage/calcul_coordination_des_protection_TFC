#!/usr/bin/env node
require("dotenv").config();

const { getPrismaClient } = require("../src/config/prisma");

async function main() {
  const prisma = getPrismaClient();
  try {
    const users = await prisma.user.findMany();
    console.log(JSON.stringify(users, null, 2));
  } finally {
    await prisma.$disconnect();
  }
}

main().catch((err) => {
  console.error("Error fetching users:", err);
  process.exit(1);
});
