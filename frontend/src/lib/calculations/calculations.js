import api from "../axios";

export async function downloadCalculationReport(projectId) {
  const response = await api.get(`/calculations/${projectId}/report`, {
    responseType: "blob",
  });

  const contentDisposition = response.headers["content-disposition"];
  const filenameMatch = contentDisposition?.match(/filename="?([^";]+)"?/i);
  const filename = filenameMatch?.[1] || `rapport-${projectId}.pdf`;
  const url = window.URL.createObjectURL(response.data);
  const link = document.createElement("a");

  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  window.URL.revokeObjectURL(url);
}
