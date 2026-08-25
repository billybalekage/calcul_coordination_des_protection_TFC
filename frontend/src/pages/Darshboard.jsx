import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Download, LoaderCircle, Plus, Settings2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { createProject, getProjects } from "@/lib/projects/projects";
import { downloadCalculationReport } from "@/lib/calculations/calculations";

const Darshboard = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [downloadingProjectId, setDownloadingProjectId] = useState(null);
  const [showCreate, setShowCreate] = useState(false);
  const [newProject, setNewProject] = useState({
    name: "",
    client: "",
    location: "",
  });
  const [creating, setCreating] = useState(false);

  useEffect(() => {
    let isMounted = true;

    async function loadProjects() {
      try {
        const userProjects = await getProjects();
        if (isMounted) setProjects(userProjects);
      } catch {
        if (isMounted) toast.error("Impossible de charger les projets.");
      } finally {
        if (isMounted) setIsLoading(false);
      }
    }

    loadProjects();
    return () => {
      isMounted = false;
    };
  }, []);

  async function handleDownload(projectId) {
    setDownloadingProjectId(projectId);
    try {
      await downloadCalculationReport(projectId);
      toast.success("Rapport PDF téléchargé.");
    } catch (error) {
      const message = error.response?.data?.message;
      toast.error(message || "Impossible de générer le rapport PDF.");
    } finally {
      setDownloadingProjectId(null);
    }
  }

  async function handleCreate(event) {
    event.preventDefault();
    if (!newProject.name.trim())
      return toast.error("Le nom du projet est requis.");
    setCreating(true);
    try {
      const project = await createProject(newProject);
      window.location.assign(`/projects/${project.id}`);
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Impossible de créer le projet.",
      );
    } finally {
      setCreating(false);
    }
  }

  return (
    <main className="min-h-screen w-full max-w-5xl px-6 py-12 gap-6 ">
      <header className="mb-8">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">
          Calculs électriques
        </p>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h1 className="mt-2 text-4xl font-bold tracking-tight">
            Mes projets
          </h1>
          <Button
            onClick={() => setShowCreate(!showCreate)}
            className="bg-cyan-700 text-white hover:bg-cyan-800"
          >
            <Plus className="size-4" /> Nouveau projet
          </Button>
        </div>
      </header>

      {showCreate && (
        <form
          onSubmit={handleCreate}
          className="mb-6 grid gap-3 rounded-xl border border-cyan-100 bg-white p-5 shadow-sm md:grid-cols-[1.2fr_1fr_1fr_auto]"
        >
          <input
            required
            placeholder="Nom du projet"
            value={newProject.name}
            onChange={(e) =>
              setNewProject({ ...newProject, name: e.target.value })
            }
            className="h-10 rounded-lg border border-slate-300 px-3 text-sm"
          />
          <input
            placeholder="Client"
            value={newProject.client}
            onChange={(e) =>
              setNewProject({ ...newProject, client: e.target.value })
            }
            className="h-10 rounded-lg border border-slate-300 px-3 text-sm"
          />
          <input
            placeholder="Lieu"
            value={newProject.location}
            onChange={(e) =>
              setNewProject({ ...newProject, location: e.target.value })
            }
            className="h-10 rounded-lg border border-slate-300 px-3 text-sm"
          />
          <Button
            type="submit"
            disabled={creating}
            className="bg-slate-900 text-white"
          >
            {creating ? "Création..." : "Créer"}
          </Button>
        </form>
      )}

      {isLoading ? (
        <div className="flex items-center gap-2 text-muted-foreground">
          <LoaderCircle className="size-4 animate-spin" aria-hidden="true" />
          <span>Chargement des projets...</span>
        </div>
      ) : projects.length === 0 ? (
        <p className="text-muted-foreground">Aucun projet disponible.</p>
      ) : (
        <section
          className="grid gap-4 md:grid-cols-2"
          aria-label="Liste des projets"
        >
          {projects.map((project) => (
            <article
              className="flex items-center justify-between gap-4 rounded-xl border bg-card p-5 shadow-sm"
              key={project.id}
            >
              <div className="min-w-0">
                <h2 className="truncate text-lg font-semibold">
                  {project.name}
                </h2>
                <p className="mt-1 truncate text-sm text-muted-foreground">
                  {[project.client, project.location]
                    .filter(Boolean)
                    .join(" · ") || "Projet sans détails supplémentaires"}
                </p>
              </div>
              <div className="flex shrink-0 gap-2">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() =>
                    window.location.assign(`/projects/${project.id}`)
                  }
                  aria-label={`Configurer ${project.name}`}
                  title="Configurer le dimensionnement"
                >
                  <Settings2 className="size-4" />
                  <span className="sr-only">Configurer le dimensionnement</span>
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => handleDownload(project.id)}
                  disabled={downloadingProjectId === project.id}
                  aria-label={`Télécharger le rapport PDF de ${project.name}`}
                  title="Télécharger le rapport PDF"
                >
                  {downloadingProjectId === project.id ? (
                    <LoaderCircle
                      className="size-4 animate-spin"
                      aria-hidden="true"
                    />
                  ) : (
                    <Download className="size-4" aria-hidden="true" />
                  )}
                  <span className="sr-only">Télécharger le rapport PDF</span>
                </Button>
              </div>
            </article>
          ))}
        </section>
      )}

      <div min-h-screen w-full max-w-5xl px-6 py-12 gap-6>
        <button className="bg-cyan-700 text-white hover:bg-cyan-800 px-16 py-3 flex items-center rounded-4xl">
          Profile
        </button>
      </div>
    </main>
  );
};

export default Darshboard;
