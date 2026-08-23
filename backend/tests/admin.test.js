process.env.DB_URL =
  process.env.DATABASE_URL || "postgresql://localhost:5432/test";

const test = require("node:test");
const assert = require("node:assert/strict");
const prismaConfig = require("../src/config/prisma");
const adminService = require("../src/features/admin/services/admin.service");
const { ConflictError } = require("../src/common/errors/AppErrors");

const originalGetPrismaClient = prismaConfig.getPrismaClient;

function mockDatabase(fakePrisma) {
  prismaConfig.getPrismaClient = () => fakePrisma;
  return () => {
    prismaConfig.getPrismaClient = originalGetPrismaClient;
  };
}

test("admin lists users with filters and pagination", async () => {
  let received;
  const restore = mockDatabase({
    user: {
      findMany: async (args) => {
        received = args;
        return [{ id: "user-1", email: "alice@example.com" }];
      },
      count: async () => 3,
    },
  });

  try {
    const result = await adminService.listUsers({
      search: "alice",
      status: "ACTIVE",
      page: 2,
      limit: 1,
    });

    assert.equal(result.pagination.total, 3);
    assert.equal(result.pagination.pages, 3);
    assert.equal(received.skip, 1);
    assert.equal(received.take, 1);
    assert.equal(received.where.AND.length, 2);
  } finally {
    restore();
  }
});

test("admin cannot suspend or delete its own account", async () => {
  const restore = mockDatabase({ user: {} });
  try {
    await assert.rejects(
      () =>
        adminService.updateUser("admin-1", { status: "SUSPENDED" }, "admin-1"),
      (error) => error instanceof ConflictError,
    );
    await assert.rejects(
      () => adminService.deleteUser("admin-1", "admin-1"),
      (error) => error instanceof ConflictError,
    );
  } finally {
    restore();
  }
});
