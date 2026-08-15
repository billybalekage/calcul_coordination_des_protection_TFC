import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 px-6 text-center">
      <div>
        <img src="/logo_3.svg" alt="" />
      </div>

      <div className="flex items-center justify-center gap-2 sm:gap-4">
        <span className="font-sans text-[6rem] font-bold leading-none tracking-tight text-foreground sm:text-[8rem]">
          4
        </span>

        <span className="font-sans text-[6rem] font-bold leading-none tracking-tight text-primary sm:text-[8rem]">
          0
        </span>

        <span className="font-sans text-[6rem] font-bold leading-none tracking-tight text-foreground sm:text-[8rem]">
          4
        </span>
      </div>

      <div className="flex flex-col gap-2">
        <h1 className="text-xl font-semibold text-foreground sm:text-2xl">
          Page introuvable
        </h1>
        <p className="text-sm text-muted-foreground sm:text-base">
          Retournez à l&apos;accueil
        </p>
      </div>

      <Button size="lg" onClick={() => navigate("/", { replace: true })}>
        <Home className="mr-2 h-4 w-4" />
        Retour à l&apos;accueil
      </Button>
    </main>
  );
};

export default NotFound;
