process.env.DB_URL =
  process.env.DATABASE_URL || "postgresql://localhost:5432/test";

const test = require("node:test");
const assert = require("node:assert/strict");

const mailerConfig = require("../src/config/mailer");
const mails = require("../src/common/mails");
const prismaConfig = require("../src/config/prisma");
const utilsAuth = require("../src/features/auth/utils/auth");

test("sendVerificationEmail calls sendMail with verifyUrl and name", async () => {
  const originalSendMail = mailerConfig.sendMail;
  let captured = null;
  mailerConfig.sendMail = async (args) => {
    captured = args;
    return { accepted: [args.to] };
  };

  try {
    await mails.sendVerificationEmail("to@example.com", {
      name: "Alice",
      verifyUrl: "https://app.test/verify?token=abc123",
      expiresInMinutes: 10,
      locale: "fr",
    });

    assert.ok(captured, "sendMail was not called");
    assert.equal(captured.to, "to@example.com");
    assert.ok(captured.html.includes("https://app.test/verify?token=abc123"));
    assert.ok(
      captured.html.includes("Alice") || captured.html.includes("Bonjour"),
    );
  } finally {
    mailerConfig.sendMail = originalSendMail;
  }
});

test("sendPasswordResetOtpEmail includes the code", async () => {
  const originalSendMail = mailerConfig.sendMail;
  let captured = null;
  mailerConfig.sendMail = async (args) => {
    captured = args;
    return { accepted: [args.to] };
  };

  try {
    await mails.sendPasswordResetOtpEmail("bob@example.com", {
      code: "123456",
      name: "Bob",
      expiresInMinutes: 15,
      locale: "fr",
    });

    assert.ok(captured);
    assert.equal(captured.to, "bob@example.com");
    assert.ok(
      captured.subject.includes("123456") || captured.html.includes("123456"),
    );
  } finally {
    mailerConfig.sendMail = originalSendMail;
  }
});

test("authService.login triggers OTP send when 2FA enabled", async () => {
  // stub sendMail
  const originalSendMail = mailerConfig.sendMail;
  let capturedMail = null;
  mailerConfig.sendMail = async (args) => {
    capturedMail = args;
    return { accepted: [args.to] };
  };

  // stub comparePassword to always succeed
  const originalCompare = utilsAuth.comparePassword;
  utilsAuth.comparePassword = async () => true;

  // stub prisma
  const originalGetPrisma = prismaConfig.getPrismaClient;
  let createdVerification = null;
  const fakePrisma = {
    user: {
      findUnique: async ({ where }) => {
        if (where.email === "alice@example.com") {
          return {
            id: "user-1",
            name: "Alice",
            email: "alice@example.com",
            emailVerified: new Date(),
            password: "hashed",
            isTwoFactorEnabled: true,
          };
        }
        return null;
      },
    },
    verificationToken: {
      deleteMany: async () => ({ count: 1 }),
      create: async ({ data }) => {
        createdVerification = data;
        return { id: "vt-1", ...data };
      },
    },
  };

  prismaConfig.getPrismaClient = () => fakePrisma;

  // clear authService from cache and re-require so it picks up patched utils
  delete require.cache[
    require.resolve("../src/features/auth/services/authService")
  ];
  const authService = require("../src/features/auth/services/authService");

  try {
    const result = await authService.login({
      email: "alice@example.com",
      password: "x",
    });
    assert.ok(result.requiresTwoFactor, "Expected requiresTwoFactor true");
    assert.ok(createdVerification, "Expected verification token to be created");
    assert.equal(createdVerification.identifier, "alice@example.com");
    assert.ok(
      createdVerification.token.length === 6 ||
        typeof createdVerification.token === "string",
    );
    assert.ok(capturedMail, "Expected an email to be sent");
    assert.equal(capturedMail.to, "alice@example.com");
    // email should contain the code
    assert.ok(capturedMail.html.includes(createdVerification.token));
  } finally {
    // restore
    mailerConfig.sendMail = originalSendMail;
    utilsAuth.comparePassword = originalCompare;
    prismaConfig.getPrismaClient = originalGetPrisma;
  }
});
