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
