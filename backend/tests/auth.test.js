process.env.DB_URL =
  process.env.DATABASE_URL || "postgresql://localhost:5432/test";
process.env.JWT_ACCESS_SECRET =
  process.env.JWT_ACCESS_SECRET || "a_very_secure_access_secret_value_123456";
process.env.JWT_REFRESH_SECRET =
  process.env.JWT_REFRESH_SECRET || "a_very_secure_refresh_secret_value_123456";

const test = require("node:test");
const assert = require("node:assert/strict");
const bcrypt = require("bcrypt");

const {
  ValidationError,
  ConflictError,
} = require("../src/common/errors/AppErrors");
const prismaConfig = require("../src/config/prisma");
const authService = require("../src/features/auth/services/authService");

const originalGetPrismaClient = prismaConfig.getPrismaClient;

function buildPublicUserRecord(record) {
  if (!record) return null;
  const publicRecord = {
    id: record.id,
    name: record.name,
    email: record.email,
    emailVerified: record.emailVerified,
    photo: record.photo ?? null,
    isTwoFactorEnabled: record.isTwoFactorEnabled ?? false,
    createdAt: record.createdAt ?? new Date(),
    updatedAt: record.updatedAt ?? new Date(),
  };
  return publicRecord;
}

function mockDatabase(overrides = {}) {
  const userRecord = {
    id: "user-1",
    name: "Alice",
    email: "alice@example.com",
    emailVerified: null,
    photo: null,
    password: "hashed-password",
    isTwoFactorEnabled: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  const defaultUser = {
    findUnique: async ({ where, select }) => {
      const record = where.email === userRecord.email ? userRecord : null;
      return select ? buildPublicUserRecord(record) : record;
    },
    create: async ({ data, select }) => {
      const record = {
        id: "user-2",
        name: data.name,
        email: data.email,
        emailVerified: data.emailVerified,
        photo: data.photo ?? null,
        password: data.password,
        isTwoFactorEnabled: data.isTwoFactorEnabled ?? false,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      return select ? buildPublicUserRecord(record) : record;
    },
    update: async ({ where, data, select }) => {
      const record = {
        id: where.id,
        name: data.name,
        email: data.email,
        emailVerified: data.emailVerified,
        photo: data.photo ?? null,
        password: data.password,
        isTwoFactorEnabled: data.isTwoFactorEnabled ?? false,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      return select ? buildPublicUserRecord(record) : record;
    },
  };

  const fakePrisma = {
    $transaction: async (operations) =>
      operations.map((operation) => operation),
    user: {
      ...defaultUser,
      ...(overrides.user || {}),
    },
    verificationToken: {
      deleteMany: async () => ({ count: 1 }),
      create: async ({ data }) => ({ ...data, id: "token-1" }),
      findUnique: async () => null,
      delete: async () => ({ id: "token-1" }),
    },
    ...overrides,
  };

  fakePrisma.user = {
    ...defaultUser,
    ...(overrides.user || {}),
  };

  prismaConfig.getPrismaClient = () => fakePrisma;
  return () => {
    prismaConfig.getPrismaClient = originalGetPrismaClient;
  };
}

test("register rejects invalid name", async () => {
  const restore = mockDatabase();
  try {
    await assert.rejects(
      () =>
        authService.createAccount({
          name: "A",
          email: "alice@example.com",
          password: "secret123",
        }),
      (err) => err instanceof ValidationError,
    );
  } finally {
    restore();
  }
});

test("register creates a user and email verification token", async () => {
  const restore = mockDatabase();
  try {
    const user = await authService.createAccount({
      name: "Alice",
      email: "ALICE@example.com",
      password: "secret123",
    });

    assert.equal(user.email, "alice@example.com");
    assert.equal(user.name, "Alice");
    assert.equal(user.password, undefined);
    assert.ok(user.id);
    assert.equal(user.emailVerified, null);
  } finally {
    restore();
  }
});

test("register blocks an already verified user", async () => {
  const restore = mockDatabase({
    user: {
      findUnique: async () => ({
        id: "existing-user",
        email: "alice@example.com",
        emailVerified: new Date(),
      }),
    },
  });

  try {
    await assert.rejects(
      () =>
        authService.createAccount({
          name: "Alice",
          email: "alice@example.com",
          password: "secret123",
        }),
      (err) => err instanceof ConflictError,
    );
  } finally {
    restore();
  }
});

test("register updates an unverified account and replaces the verification token", async () => {
  const restore = mockDatabase({
    user: {
      findUnique: async () => ({
        id: "existing-user",
        name: "Old name",
        email: "alice@example.com",
        emailVerified: null,
      }),
    },
  });

  try {
    const user = await authService.createAccount({
      name: "Alice Updated",
      email: "ALICE@example.com",
      password: "newsecret123",
    });

    assert.equal(user.email, "alice@example.com");
    assert.equal(user.name, "Alice Updated");
    assert.equal(user.emailVerified, null);
  } finally {
    restore();
  }
});

test("login requests verification when email is not yet verified", async () => {
  const restore = mockDatabase({
    user: {
      findUnique: async () => ({
        id: "user-1",
        name: "Alice",
        email: "alice@example.com",
        emailVerified: null,
        password: bcrypt.hashSync("secret123", 10),
        isTwoFactorEnabled: false,
      }),
    },
  });

  try {
    const result = await authService.login({
      email: "alice@example.com",
      password: "secret123",
    });

    assert.equal(result.requiresVerification, true);
    assert.equal(result.user.email, "alice@example.com");
  } finally {
    restore();
  }
});

test("google auth marks the user as verified when Google confirms the email", async () => {
  const googleModule = require("../src/config/google");
  const originalVerifyGoogleIdToken = googleModule.verifyGoogleIdToken;
  const restore = mockDatabase({
    user: {
      findUnique: async ({ where }) => {
        if (where.email === "alice@example.com") {
          return {
            id: "user-1",
            name: "Alice",
            email: "alice@example.com",
            emailVerified: null,
            photo: null,
            isTwoFactorEnabled: false,
          };
        }
        return null;
      },
      update: async ({ where, data, select }) => ({
        id: where.id,
        name: "Alice",
        email: "alice@example.com",
        emailVerified: data.emailVerified,
        photo: data.photo ?? null,
        isTwoFactorEnabled: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      }),
    },
    account: {
      findUnique: async () => null,
      create: async () => ({ id: "ac-1" }),
    },
  });

  try {
    googleModule.verifyGoogleIdToken = async () => ({
      googleId: "google-123",
      email: "alice@example.com",
      name: "Alice",
      avatarUrl: null,
      emailVerified: true,
    });

    const result = await authService.processGoogleAuth({ idToken: "token" });

    assert.equal(result.user.email, "alice@example.com");
    assert.ok(
      result.user.emailVerified instanceof Date || result.user.emailVerified,
    );
  } finally {
    googleModule.verifyGoogleIdToken = originalVerifyGoogleIdToken;
    restore();
  }
});
