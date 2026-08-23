const bcrypt = require("bcrypt");
const crypto = require("crypto");
const SALT_ROUNDS = 12;
const OTP_CODE_LENGTH = 6;

const publicUserSelect = {
  id: true,
  name: true,
  email: true,
  emailVerified: true,
  avatarUrl: true,
  role: true,
  status: true,
  isTwoFactorEnabled: true,
  createdAt: true,
  updatedAt: true,
};

function isValidName(name) {
  if (typeof name !== "string") return false;
  const trimed = name.trim();
  return trimed.length >= 2 && trimed.length <= 100;
}

function isValidEmail(email) {
  if (typeof email !== "string") return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

function isValidPassword(password) {
  if (typeof password !== "string") return false;
  return password.length >= 8;
}

async function hashPassword(password) {
  return bcrypt.hash(password, SALT_ROUNDS);
}

async function comparePassword(password, hash) {
  if (!password || !hash) return false;
  return bcrypt.compare(password, hash);
}

function generateOtpCode() {
  const min = 0;
  const max = 10 ** OTP_CODE_LENGTH;
  const code = crypto.randomInt(min, max);
  return code.toString().padStart(OTP_CODE_LENGTH, "0");
}

function generateAuthOtp() {
  return generateOtpCode();
}

function generateVerificationOtp() {
  return generateOtpCode();
}

function getOtpExpiry(minutes) {
  return new Date(Date.now() + minutes * 60 * 1000);
}

function isOtpExpired(expiresAt) {
  if (!expiresAt) return true;
  return new Date(expiresAt).getTime() < Date.now();
}

module.exports = {
  isValidEmail,
  isValidName,
  isValidPassword,
  generateAuthOtp,
  generateOtpCode,
  generateVerificationOtp,
  getOtpExpiry,
  isOtpExpired,
  hashPassword,
  comparePassword,
  publicUserSelect,
};
