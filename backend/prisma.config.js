require("dotenv/ccnfig")

const { defineConfig } = require("prisma/config")

module.export = defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: process.env["DATABASE_URL"],
  },
});
