import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Download, LoaderCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getProjects } from "@/lib/projects/projects";
import { downloadCalculationReport } from "@/lib/calculations/calculations";

const Darshboard = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [downloadingProjectId, setDownloadingProjectId] = useState(null);

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

  return (
    <main className="min-h-screen w-full max-w-5xl px-6 py-12">
      <header className="mb-8">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">
          Calculs électriques
        </p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight">Mes projets</h1>
      </header>

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
            </article>
          ))}
        </section>
      )}
    </main>
  );
};

export default Darshboard;
