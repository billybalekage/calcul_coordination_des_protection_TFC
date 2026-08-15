const nodemailer = require("nodemailer");

const { env } = require("../config");

let transporter = null;

function getTransporter() {
  if (!transporter) {
    transporter = nodemailer.createTransport({
      host: env.smtp.host,
      port: env.smtp.port,
      secure: env.smtp.port === 465,
      auth: { user: env.smtp.user, pass: env.smtp.pass },
    });
  }
  return transporter;
}

async function ensureMailerReady(timeoutMs = 5000) {
  const transport = module.exports.getTransporter();

  try {
    await Promise.race([
      transport.verify(),
      new Promise((_resolve, reject) => {
        setTimeout(
          () => reject(new Error(`SMTP check timed out after ${timeoutMs}ms`)),
          timeoutMs,
        );
      }),
    ]);

    return true;
  } catch (error) {
    const message =
      error && error.message
        ? error.message
        : "Vérification de la connexion SMTP échouée.";
    console.error("[mailer] SMTP connection check failed:", message);
    throw new Error(`SMTP not available: ${message}`);
  }
}

async function sendMail({ to, subject, html, attachments }) {
  const transport = module.exports.getTransporter();

  await ensureMailerReady();

  return transport.sendMail({
    from: `"${env.smtp.fromName}" <${env.smtp.fromEmail}>`,
    to,
    subject,
    html,
    ...(attachments && { attachments }),
  });
}

async function checkMailerConnection(timeoutMs = 5000) {
  const startedAt = Date.now();
  const transport = getTransporter();

  const verify = transport.verify();
  const timeout = new Promise((_resolve, reject) => {
    setTimeout(
      () => reject(new Error(`SMTP check timed out after ${timeoutMs}ms`)),
      timeoutMs,
    );
  });

  try {
    await Promise.race([verify, timeout]);
    return { connected: true, latencyMs: Date.now() - startedAt, error: null };
  } catch (err) {
    console.error("[mailer] SMTP connection check failed:", err.message);
    return { connected: false, latencyMs: null, error: err.message };
  }
}

module.exports = {
  getTransporter,
  ensureMailerReady,
  sendMail,
  checkMailerConnection,
};
