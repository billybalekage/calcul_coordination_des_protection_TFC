const crypto = require("crypto");
const {
  ValidationError,
  ConflictError,
  UnauthorizedError,
  NotFoundError,
} = require("../../../common/errors/AppErrors");
const prismaModule = require("../../../config/prisma");
const { verifyGoogleIdToken } = require("../../../config/google");
const {
  isValidName,
  isValidEmail,
  isValidPassword,
  hashPassword,
  comparePassword,
  getOtpExpiry,
  generateVerificationOtp,
  publicUserSelect,
} = require("../utils/auth");
const { sendPasswordResetOtpEmail } = require("../../../common/mails");

const EMAIL_VERIFICATION_OTP_TTL_MINUTES = 10;
const RESET_PASSWORD_OTP_TTL_MINUTES = 10;

function normalizeEmail(email) {
  return String(email || "")
    .trim()
    .toLowerCase();
}

function sanitizeName(name) {
  return String(name || "").trim();
}

function generateSecureToken() {
  return crypto.randomBytes(32).toString("hex");
}

function buildPublicUser(user) {
  if (!user) return null;
  const { password, twofactorSecret, ...publicUser } = user;
  return publicUser;
}

async function createVerificationToken(
  prisma,
  identifier,
  tokenValue,
  expiresAt,
) {
  await prisma.verificationToken.deleteMany({
    where: { identifier },
  });

  return prisma.verificationToken.create({
    data: {
      identifier,
      token: tokenValue,
      expires: expiresAt,
    },
  });
}

async function createAccount({ name, email, password } = {}) {
  if (!name || typeof name !== "string" || !isValidName(name)) {
    throw new ValidationError("Veuillez entrer un nom valide.");
  }

  if (!email || typeof email !== "string" || !isValidEmail(email)) {
    throw new ValidationError("Veuillez entrer une adresse email valide.");
  }

  if (!password || typeof password !== "string" || !isValidPassword(password)) {
    throw new ValidationError(
      "Le mot de passe doit contenir au moins 8 caractères.",
    );
  }

  const normalizedEmail = normalizeEmail(email);
  const trimmedName = sanitizeName(name);
  const prisma = prismaModule.getPrismaClient();

  const existingUser = await prisma.user.findUnique({
    where: { email: normalizedEmail },
    select: {
      ...publicUserSelect,
      password: true,
      twofactorSecret: true,
    },
  });

  if (existingUser && existingUser.emailVerified) {
    throw new ConflictError("Un compte avec cette adresse email existe déjà.");
  }

  const hashedPassword = await hashPassword(password);
  const verificationCode = generateVerificationOtp();
  const expiresAt = getOtpExpiry(EMAIL_VERIFICATION_OTP_TTL_MINUTES);

  let user;

  if (existingUser) {
    const [updatedUser] = await prisma.$transaction([
      prisma.user.update({
        where: { id: existingUser.id },
        data: {
          name: trimmedName,
          email: normalizedEmail,
          password: hashedPassword,
          emailVerified: null,
        },
        select: publicUserSelect,
      }),

      prisma.verificationToken.deleteMany({
        where: { identifier: normalizedEmail },
      }),
      prisma.verificationToken.create({
        data: {
          identifier: normalizedEmail,
          token: verificationCode,
          expires: expiresAt,
        },
      }),
    ]);

    user = updatedUser;
  } else {
    const [createdUser] = await prisma.$transaction([
      prisma.user.create({
        data: {
          name: trimmedName,
          email: normalizedEmail,
          password: hashedPassword,
          emailVerified: null,
        },
        select: publicUserSelect,
      }),
      prisma.verificationToken.create({
        data: {
          identifier: normalizedEmail,
          token: verificationCode,
          expires: expiresAt,
        },
      }),
    ]);

    user = createdUser;
  }

  return user;
}

async function login({ email, password } = {}) {
  if (!email || !password) {
    throw new UnauthorizedError("Identifiants invalides.");
  }

  const normalizedEmail = normalizeEmail(email);
  const prisma = prismaModule.getPrismaClient();
  const user = await prisma.user.findUnique({
    where: { email: normalizedEmail },
    select: {
      ...publicUserSelect,
      password: true,
      twofactorSecret: true,
    },
  });

  if (!user || !(await comparePassword(password, user.password))) {
    throw new UnauthorizedError("Identifiants invalides.");
  }

  if (!user.emailVerified) {
    throw new ValidationError(
      "Veuillez vérifier votre adresse email avant de vous connecter.",
    );
  }

  return {
    user: buildPublicUser(user),
    requiresTwoFactor: Boolean(user.isTwoFactorEnabled),
  };
}

async function verifyEmail(token) {
  if (!token || typeof token !== "string") {
    throw new ValidationError("Token de vérification manquant.");
  }

  const prisma = prismaModule.getPrismaClient();
  const verificationToken = await prisma.verificationToken.findUnique({
    where: { token },
  });

  if (!verificationToken) {
    throw new NotFoundError("Token de vérification introuvable.");
  }

  if (new Date(verificationToken.expires).getTime() < Date.now()) {
    await prisma.verificationToken.delete({
      where: { id: verificationToken.id },
    });
    throw new ValidationError("Le code de vérification a expiré.");
  }

  const user = await prisma.user.findUnique({
    where: { email: verificationToken.identifier },
    select: publicUserSelect,
  });

  if (!user) {
    throw new NotFoundError("Utilisateur introuvable.");
  }

  const verifiedUser = await prisma.user.update({
    where: { id: user.id },
    data: { emailVerified: new Date() },
    select: publicUserSelect,
  });

  await prisma.verificationToken.delete({
    where: { id: verificationToken.id },
  });

  return verifiedUser;
}

async function resendVerification(email) {
  if (!email || typeof email !== "string" || !isValidEmail(email)) {
    throw new ValidationError("Veuillez entrer une adresse email valide.");
  }

  const normalizedEmail = normalizeEmail(email);
  const prisma = prismaModule.getPrismaClient();

  const user = await prisma.user.findUnique({
    where: { email: normalizedEmail },
    select: publicUserSelect,
  });

  if (!user) {
    return {
      success: true,
      message: "Si un compte existe, un nouveau code a été envoyé.",
    };
  }

  if (user.emailVerified) {
    throw new ConflictError("Cette adresse email est déjà vérifiée.");
  }

  const verificationCode = generateVerificationOtp();
  const expiresAt = getOtpExpiry(EMAIL_VERIFICATION_OTP_TTL_MINUTES);

  await createVerificationToken(
    prisma,
    normalizedEmail,
    verificationCode,
    expiresAt,
  );

  return {
    success: true,
    message: "Un nouveau code de vérification a été envoyé.",
  };
}

async function forgotPassword(email) {
  if (!email || typeof email !== "string" || !isValidEmail(email)) {
    throw new ValidationError("Veuillez entrer une adresse email valide.");
  }

  const normalizedEmail = normalizeEmail(email);
  const prisma = prismaModule.getPrismaClient();
  const user = await prisma.user.findUnique({
    where: { email: normalizedEmail },
    select: { id: true, email: true },
  });

  if (!user) {
    return {
      success: true,
      message:
        "Si un compte existe, un email de réinitialisation a été envoyé.",
    };
  }

  const token = generateSecureToken();
  const expiresAt = getOtpExpiry(RESET_PASSWORD_OTP_TTL_MINUTES);
  await createVerificationToken(prisma, normalizedEmail, token, expiresAt);

  try {
    await sendPasswordResetOtpEmail(user.email, {
      otp: token,
      name: user.email,
    });
  } catch (error) {
    // secrète côté serveur, aucun retour dans l'API
  }

  return { success: true, message: "Email de réinitialisation envoyé." };
}

async function resetPassword({ token, password } = {}) {
  if (!token || !password || !isValidPassword(password)) {
    throw new ValidationError("Token ou mot de passe invalide.");
  }

  const prisma = prismaModule.getPrismaClient();
  const verificationToken = await prisma.verificationToken.findUnique({
    where: { token },
    select: { id: true, identifier: true, expires: true },
  });

  if (!verificationToken) {
    throw new NotFoundError("Token de réinitialisation introuvable.");
  }

  if (new Date(verificationToken.expires).getTime() < Date.now()) {
    throw new ValidationError("Le token de réinitialisation a expiré.");
  }

  const hashedPassword = await hashPassword(password);
  const updatedUser = await prisma.user.update({
    where: { email: verificationToken.identifier },
    data: { password: hashedPassword },
    select: publicUserSelect,
  });

  await prisma.verificationToken.delete({
    where: { id: verificationToken.id },
  });

  return updatedUser;
}

async function processGoogleAuth({ idToken } = {}) {
  const googlePayload = await verifyGoogleIdToken(idToken);
  const prisma = prismaModule.getPrismaClient();

  const account = await prisma.account.findUnique({
    where: {
      provider_providerAccountId: {
        provider: "google",
        providerAccountId: googlePayload.googleId,
      },
    },
    include: { user: true },
  });

  if (account) {
    return { user: buildPublicUser(account.user) };
  }

  let user = await prisma.user.findUnique({
    where: { email: googlePayload.email },
    select: {
      ...publicUserSelect,
      password: true,
      twofactorSecret: true,
    },
  });

  if (!user) {
    const createdUser = await prisma.$transaction(async (tx) => {
      const created = await tx.user.create({
        data: {
          name: googlePayload.name,
          email: googlePayload.email,
          photo: googlePayload.avatarUrl,
          emailVerified: googlePayload.emailVerified ? new Date() : null,
          password: null,
        },
        select: publicUserSelect,
      });

      await tx.account.create({
        data: {
          userId: created.id,
          type: "oauth",
          provider: "google",
          providerAccountId: googlePayload.googleId,
        },
      });

      return created;
    });

    return { user: createdUser };
  }

  if (googlePayload.emailVerified && user.email === googlePayload.email) {
    await prisma.account
      .create({
        data: {
          userId: user.id,
          type: "oauth",
          provider: "google",
          providerAccountId: googlePayload.googleId,
        },
      })
      .catch((error) => {
        if (error?.code === "P2002") return null;
        throw error;
      });

    const refreshedUser = await prisma.user.findUnique({
      where: { id: user.id },
      select: publicUserSelect,
    });
    return { user: refreshedUser };
  }

  throw new ConflictError(
    "Le compte Google ne peut pas être lié automatiquement à ce compte utilisateur. Une procédure explicite de liaison est requise.",
  );
}

async function logout({ userId } = {}) {
  const prisma = prismaModule.getPrismaClient();
  if (userId) {
    await prisma.session
      .deleteMany({ where: { userId } })
      .catch(() => undefined);
  }
  return { success: true };
}

module.exports = {
  createAccount,
  verifyEmail,
  resendVerification,
  forgotPassword,
  resetPassword,
  login,
  logout,
  processGoogleAuth,
};
