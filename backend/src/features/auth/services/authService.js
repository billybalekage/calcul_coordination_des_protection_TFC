const {
  ValidationError,
  ConflictError,
} = require("../../../common/errors/AppErrors");
const { getPrismaClient } = require("../../../config/prisma");
const {
  isValidName,
  isValidEmail,
  isValidPassword,
  hashPassword,
  getOtpExpiry,
  generateVerificationOtp,
} = require("../utils/auth");

const EMAIL_VERIFICATION_OTP_TTL_MINUTES = 10;

function normalizeEmail(email) {
  return email.trim().toLowerCase();
}

function sanitizeName(name) {
  return name.trim();
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
      "Le mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial.",
    );
  }

  const normalizedEmail = normalizeEmail(email);
  const trimmedName = sanitizeName(name);
  const prisma = getPrismaClient();

  const existingUser = await prisma.user.findUnique({
    where: { email: normalizedEmail },
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
          password: hashedPassword,
          email: normalizedEmail,
          emailVerified: null,
        },
        select: {
          id: true,
          name: true,
          email: true,
          emailVerified: true,
          photo: true,
          isTwoFactorEnabled: true,
          createdAt: true,
          updatedAt: true,
        },
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
        select: {
          id: true,
          name: true,
          email: true,
          emailVerified: true,
          photo: true,
          isTwoFactorEnabled: true,
          createdAt: true,
          updatedAt: true,
        },
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

module.exports = {
  createAccount,
};
