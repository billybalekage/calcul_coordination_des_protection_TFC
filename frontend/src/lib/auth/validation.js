export function isValidEmail(email) {
  if (typeof email !== "string") return false;

  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

export function isValidResetCode(code) {
  if (typeof code !== "string") return false;

  return /^[0-9]{6}$/.test(code.trim());
}
