import api from "../axios";

const projectMetadata = ({ name, client, location }) => ({
  name,
  client,
  location,
});

export async function createProject(project) {
  const response = await api.post("/projects", projectMetadata(project));
  return response.data.project;
}

export async function getProjects() {
  const response = await api.get("/projects");
  return response.data.projects;
}

export async function getProject(projectId) {
  const response = await api.get(`/projects/${projectId}`);
  return response.data.project;
}

export async function savePowerSupply(projectId, powerSupply) {
  const response = await api.post(
    `/projects/${projectId}/power-supply`,
    powerSupply,
  );
  return response.data.powerSupply;
}

export async function addCircuit(projectId, circuit) {
  const response = await api.post(`/projects/${projectId}/circuits`, circuit);
  return response.data.circuit;
}

export async function updateCircuit(projectId, circuitId, circuit) {
  await api.patch(`/projects/${projectId}/circuits/${circuitId}`, circuit);
}

export async function deleteCircuit(projectId, circuitId) {
  await api.delete(`/projects/${projectId}/circuits/${circuitId}`);
}
