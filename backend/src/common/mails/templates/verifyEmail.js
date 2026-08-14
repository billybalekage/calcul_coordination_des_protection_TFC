const { renderEmailLayout } = require("../layout");
const { BRAND } = require("../../constants/brand");

const COPY = {
  en: {
    heading: `Verify your ${BRAND.name} email address`,
    hello: (name) => `Hello, <strong>${name}</strong>.`,
    intro: `Confirm your email address to finish setting up your ${BRAND.name} account. Click the button below to verify your email:`,
    subject: (app) => `Verify your ${BRAND.name} email address`,
    preheader: `Verify your ${BRAND.name} email address`,
    reason: `You're receiving this because you (or someone else) created an account with this email address at ${BRAND.name}.`,
    ctaText: "Verify email",
  },
  fr: {
    heading: `Vérifiez votre adresse email ${BRAND.name}`,
    hello: (name) => `Bonjour, <strong>${name}</strong>.`,
    intro: `Confirmez votre adresse email pour terminer la configuration de votre compte ${BRAND.name}. Cliquez sur le bouton ci-dessous pour vérifier votre adresse :`,
    subject: (app) => `Vérifiez votre adresse email ${BRAND.name}`,
    preheader: `Vérifiez votre adresse email ${BRAND.name}`,
    reason: `Vous recevez cet e-mail car vous (ou quelqu'un d'autre) avez créé un compte avec cette adresse email sur ${BRAND.name}.`,
    ctaText: "Vérifier l'email",
  },
};

function verifyEmailTemplate(data) {
  const { name, verifyUrl, locale = "en" } = data;
  const t = COPY[locale] || COPY.en;

  const bodyHtml = `
    <p style="margin: 0 0 16px 0;">${t.hello(name)}</p>
    <p style="margin: 0 0 16px 0;">${t.intro}</p>
  `;

  const html = renderEmailLayout({
    preheader: t.preheader,
    heading: t.heading,
    bodyHtml,
    cta: { text: t.ctaText, url: verifyUrl },
    reason: t.reason,
    locale,
  });

  return { subject: t.subject(BRAND.name), html };
}

module.exports = { verifyEmailTemplate };
