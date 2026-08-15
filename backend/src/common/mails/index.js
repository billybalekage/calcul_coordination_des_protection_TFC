const mailer = require("../../config/mailer");
const { otpLoginEmail } = require("./templates/otpLogin");
const { passwordChangedEmail } = require("./templates/passwordChanged");
const { passwordResetOtpEmail } = require("./templates/passwordReset");
const { twoFactorChangedEmail } = require("./templates/twoFactorieChanged");
const { verifyEmailTemplate } = require("./templates/verifyEmail");

async function sendOtpLoginEmail(to, data) {
  const { subject, html } = otpLoginEmail(data);
  return mailer.sendMail({ to, subject, html });
}

async function sendPasswordResetOtpEmail(to, data) {
  const { subject, html } = passwordResetOtpEmail(data);
  return mailer.sendMail({ to, subject, html });
}

async function sendPasswordChangedEmail(to, data) {
  const { subject, html } = passwordChangedEmail(data);
  return mailer.sendMail({ to, subject, html });
}

async function sendTwoFactorChangedEmail(to, data) {
  const { subject, html } = twoFactorChangedEmail(data);
  return mailer.sendMail({ to, subject, html });
}

async function sendVerificationEmail(to, data) {
  const { subject, html } = verifyEmailTemplate(data);
  return mailer.sendMail({ to, subject, html });
}

module.exports = {
  sendOtpLoginEmail,
  sendPasswordResetOtpEmail,
  sendPasswordChangedEmail,
  sendTwoFactorChangedEmail,
  sendVerificationEmail,
};
