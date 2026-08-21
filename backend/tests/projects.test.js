process.env.DB_URL =
  process.env.DATABASE_URL || "postgresql://localhost:5432/test";

const test = require("node:test");
const assert = require("node:assert/strict");

const prismaConfig = require("../src/config/prisma");
const projectService = require("../src/features/projects/services/project.service");
const { NotFoundError } = require("../src/common/errors/AppErrors");

const originalGetPrismaClient = prismaConfig.getPrismaClient;

function mockDatabase(overrides = {}) {
  const fakePrisma = {
    project: {
      findFirst: async () => null,
      findMany: async () => [],
      ...(overrides.project || {}),
    },
    powerSupply: {
      upsert: async ({ create }) => create,
      ...(overrides.powerSupply || {}),
    },
    ...(overrides.prisma || {}),
  };

  prismaConfig.getPrismaClient = () => fakePrisma;
  return () => {
    prismaConfig.getPrismaClient = originalGetPrismaClient;
  };
}

test("getOwnedProject returns only a project owned by the user", async () => {
  const project = { id: "project-1", userId: "user-1", name: "Atelier" };
  const restore = mockDatabase({
    project: {
      findFirst: async ({ where }) => {
        assert.deepEqual(where, { id: "project-1", userId: "user-1" });
        return project;
      },
    },
  });

  try {
    const result = await projectService.getOwnedProject("project-1", "user-1");
    assert.deepEqual(result, project);
  } finally {
    restore();
  }
});

test("getOwnedProject rejects a project that is not owned by the user", async () => {
  const restore = mockDatabase();

  try {
    await assert.rejects(
      () => projectService.getOwnedProject("project-1", "user-1"),
      (error) => error instanceof NotFoundError,
    );
  } finally {
    restore();
  }
});

test("savePowerSupply checks ownership and upserts the power supply", async () => {
  let received;
  const restore = mockDatabase({
    project: {
      findFirst: async ({ where }) => {
        assert.deepEqual(where, { id: "project-1", userId: "user-1" });
        return { id: "project-1" };
      },
    },
    powerSupply: {
      upsert: async (args) => {
        received = args;
        return { id: "supply-1", ...args.update };
      },
    },
  });

  const data = {
    type: "TRIPHASE",
    nominalVoltage: 400,
    frequency: 50,
    regimeNeutre: "TT",
    distanceSourceToTGBT: 12,
  };

  try {
    const result = await projectService.savePowerSupply(
      "project-1",
      "user-1",
      data,
    );

    assert.deepEqual(received.where, { projectId: "project-1" });
    assert.deepEqual(received.update, data);
    assert.deepEqual(result, { id: "supply-1", ...data });
  } finally {
    restore();
  }
});
