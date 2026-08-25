const calculService = require("../services/calcul.service");

function getAvailableStandards(_req, res) {
  res.status(200).json({
    success: true,
    standards: calculService.getAvailableStandards(),
  });
}

async function launchCalculation(req, res) {
  const result = await calculService.calculate(
    req.params.projectId,
    req.user.id,
    req.body,
  );

  res.status(200).json({ success: true, result });
}

async function downloadReport(req, res) {
  const pdf = await calculService.generateReport(
    req.params.projectId,
    req.user.id,
  );

  res.setHeader("Content-Type", "application/pdf");
  res.setHeader(
    "Content-Disposition",
    `attachment; filename="rapport-${req.params.projectId}.pdf"`,
  );
  res.setHeader("Content-Length", pdf.length);
  res.status(200).send(pdf);
}

module.exports = {
  launchCalculation,
  getAvailableStandards,
  downloadReport,
};
