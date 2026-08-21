const PDFDocument = require("pdfkit");

function formatValue(value) {
  if (value === null || value === undefined || value === "") return "-";
  if (typeof value === "boolean") return value ? "Oui" : "Non";
  if (typeof value === "object") return JSON.stringify(value);
  return String(value);
}

function addTitle(document, title) {
  document.fontSize(18).fillColor("#17324d").text(title);
  document.moveDown(0.5);
  document.fillColor("#000000");
}

function addSection(document, title) {
  document.moveDown(0.8);
  document.fontSize(13).fillColor("#245b7a").text(title);
  document.moveDown(0.3);
  document.fillColor("#000000");
}

function addObject(document, value, indent = 0) {
  if (!value || typeof value !== "object") return;

  for (const [key, item] of Object.entries(value)) {
    if (Array.isArray(item)) {
      document.fontSize(10).text(`${" ".repeat(indent)}${key}:`);
      item.forEach((entry, index) => {
        document.text(`${" ".repeat(indent + 2)}[${index + 1}]`);
        addObject(document, entry, indent + 4);
      });
    } else if (item && typeof item === "object") {
      document.fontSize(10).text(`${" ".repeat(indent)}${key}:`);
      addObject(document, item, indent + 2);
    } else {
      document
        .fontSize(10)
        .text(`${" ".repeat(indent)}${key}: ${formatValue(item)}`);
    }
  }
}

function addResultsTable(document, title, results) {
  addSection(document, title);
  addObject(document, results, 0);
}

function createReportDocument({ project, physicalResults, normalizedResults }) {
  const document = new PDFDocument({
    size: "A4",
    margin: 50,
    info: {
      Title: `Rapport de calcul - ${project.name || project.id}`,
      Author: "Electrique API",
      Subject: "Calcul et normalisation des protections électriques",
    },
  });

  addTitle(document, "Rapport de calcul des protections");
  document.fontSize(10).text(`Genere le: ${new Date().toISOString()}`);

  addSection(document, "1. Informations generales du projet");
  addObject(document, {
    id: project.id,
    name: project.name,
    client: project.client,
    location: project.location,
  });

  addSection(document, "2. Donnees techniques du projet");
  addObject(document, {
    powerSupply: project.powerSupply,
    circuits: project.circuits,
    cableData: project.cableData,
    protection: project.protection,
    furthestLoadDistance: project.furthestLoadDistance,
  });

  addResultsTable(document, "3. Resultats physiques FastAPI", physicalResults);
  addResultsTable(
    document,
    "4. Resultats apres normalisation",
    normalizedResults,
  );

  addSection(document, "5. Conclusion");
  const checks = [
    normalizedResults.overloadCheck,
    normalizedResults.voltageDropCheck,
    normalizedResults.breakingCapacityCheck,
    normalizedResults.coordinationCheck,
  ];
  document.text(
    checks.includes("FAIL")
      ? "Des controles sont en echec et doivent etre corriges."
      : checks.includes("TO_VERIFY_WITH_MANUFACTURER")
        ? "Une verification fabricant est necessaire avant validation."
        : "Les controles disponibles sont conformes aux regles appliquees.",
  );

  return document;
}

function createReportBuffer(reportData) {
  return new Promise((resolve, reject) => {
    const document = createReportDocument(reportData);
    const chunks = [];

    document.on("data", (chunk) => chunks.push(chunk));
    document.on("end", () => resolve(Buffer.concat(chunks)));
    document.on("error", reject);
    document.end();
  });
}

module.exports = {
  createReportDocument,
  createReportBuffer,
};
