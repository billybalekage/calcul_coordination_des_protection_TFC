import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Login, googleAuth } from "@/lib/auth/auth";
import { isValidEmail } from "@/lib/auth/validation";
import { Mail, KeyRound } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const loadGoogleScript = () =>
  new Promise((resolve, reject) => {
    if (window.google?.accounts?.id) {
      resolve();
      return;
    }

    const existingScript = document.querySelector(
      "script[src*='accounts.google.com']",
    );
    if (existingScript) {
      existingScript.addEventListener("load", resolve, { once: true });
      existingScript.addEventListener("error", reject, { once: true });
      return;
    }

    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.defer = true;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });

const getGoogleOneTapErrorMessage = (error) => {
  const raw = String(error?.message || error || "");

  if (
    raw.includes("accounts list is empty") ||
    raw.includes("Error retrieving a token") ||
    raw.includes("NetworkError") ||
    raw.includes("No credentials")
  ) {
    return "Aucun compte Google disponible sur ce navigateur. Essayez de vous connecter avec votre email et votre mot de passe.";
  }

  if (raw.includes("invalid_client") || raw.includes("client_id")) {
    return "La configuration Google OAuth est invalide. Vérifiez l'ID client dans les variables d'environnement.";
  }

  return "La connexion Google est actuellement indisponible. Veuillez réessayer plus tard.";
};

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (loading) return;

    const email = formData.email.trim();
    const password = formData.password;

    if (!email || !password) {
      toast.error("Veuillez remplir tous les champs.");
      return;
    }

    if (!isValidEmail(email)) {
      toast.error("Veuillez saisir une adresse email valide.");
      return;
    }

    try {
      setLoading(true);

      const response = await Login({
        email,
        password,
      });

      console.log("Réponse Login :", response);

      // Échec d'authentification
      if (!response?.success) {
        if (response?.requiresVerification) {
          toast.error(
            response.message || "Veuillez vérifier votre adresse email.",
          );

          navigate("/token-verification", {
            replace: true,
            state: { email },
          });

          return;
        }

        toast.error(response?.message || "Identifiants invalides.");
        return;
      }

      // Email non vérifié
      if (response.requiresVerification) {
        toast.error(
          response.message || "Veuillez vérifier votre adresse email.",
        );

        navigate("/token-verification", {
          replace: true,
          state: { email },
        });

        return;
      }

      // Connexion réussie
      toast.success(response.message || "Connexion réussie");

      navigate("/", {
        replace: true,
      });
    } catch (error) {
      console.error("Erreur Login :", error);

      const message =
        error?.response?.data?.message ||
        error?.message ||
        "Une erreur est survenue, veuillez réessayer.";

      toast.error(message);

      if (
        message.toLowerCase().includes("vérifier") ||
        message.toLowerCase().includes("verify")
      ) {
        navigate("/token-verification", {
          replace: true,
          state: { email },
        });
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
      if (!clientId) {
        toast.error("La connexion Google n'est pas configurée.");
        return;
      }

      await loadGoogleScript();

      if (!window.google?.accounts?.id) {
        toast.error("Le SDK Google n'est pas disponible pour le moment.");
        return;
      }

      window.google.accounts.id.initialize({
        client_id: clientId,
        callback: async (response) => {
          if (!response?.credential) {
            toast.error("Aucune information Google reçue. Veuillez réessayer.");
            return;
          }

          try {
            const result = await googleAuth({ idToken: response.credential });
            toast.success(result.message || "Connexion Google réussie.");
            navigate("/");
          } catch (error) {
            const message =
              error.response?.data?.message ||
              "Connexion Google impossible pour le moment.";
            toast.error(message);
          }
        },
      });

      try {
        window.google.accounts.id.prompt((notification) => {
          if (notification.isNotDisplayed() || notification.isSkippedMoment()) {
            console.info("Google One Tap non affiché :", notification);
          }
        });
      } catch (error) {
        throw new Error(getGoogleOneTapErrorMessage(error));
      }
    } catch (error) {
      toast.error(getGoogleOneTapErrorMessage(error));
      console.warn("Google One Tap unavailable:", error);
    }
  };

  return (
    <div className="min-h-screen w-full flex bg-[#f8f9fa] text-[#0a192f]">
      {/* Côté Gauche : Formulaire */}
      <div className="w-full lg:w-1/2 flex flex-col justify-between p-8 sm:p-12 lg:p-16">
        <div className="max-w-md w-full mx-auto my-auto">
          {/* Logo et Nom */}
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="w-8 h-8 flex items-center justify-center text-white font-bold">
              <img src="/icon_3.svg" alt="" className="w-64 h-64" />
            </div>
          </div>

          {/* Titre et description dynamique */}
          <div className="mb-8">
            <h1 className="text-2xl font-extrabold justify-center items-center tracking-tight mb-2">
              Connectez-vous à votre compte.
            </h1>
            <p className="text-sm text-[#64748b]">
              Entrez votre email et votre mot de passe pour vous connecter.
            </p>
          </div>

          {/* Formulaire */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-5 w-5 text-[#64748b]" />
              <Input
                type="email"
                name="email"
                onChange={handleChange}
                value={formData.email}
                placeholder="Adresse email"
                className="pl-10 h-11 bg-white border-[#cbd5e1] focus-visible:ring-[#0077b6]"
              />
            </div>

            <div className="relative">
              <KeyRound className="absolute left-3 top-3 h-5 w-5 text-[#64748b]" />
              <Input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Mot de passe"
                className="pl-10 h-11 bg-white border-[#cbd5e1] focus-visible:ring-[#0077b6]"
              />
            </div>

            {/* Bouton de soumission dynamique */}
            <Button
              type="submit"
              disabled={loading}
              className="w-full h-11 bg-[#0077b6] hover:bg-[#005f92] text-white font-medium rounded-xl transition-all shadow-md"
            >
              {loading ? "Connexion ..." : "Se connecter"}
            </Button>
          </form>

          {/* Séparateur "ou" */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#cbd5e1]" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-[#f8f9fa] px-2 text-[#64748b]">ou</span>
            </div>
          </div>

          {/* Connexions alternatives */}
          <div className="space-y-3">
            <Button
              type="button"
              variant="outline"
              onClick={handleGoogleLogin}
              className="w-full h-11 border-[#cbd5e1] hover:bg-[#f1f5f9] text-[#0a192f] font-medium rounded-xl flex items-center justify-center gap-2"
            >
              {/* Icône Google personnalisée */}
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
              Google
            </Button>
          </div>

          <div className="mt-4 text-right text-sm">
            <button
              type="button"
              onClick={() => navigate("/forgot-password")}
              className="text-[#0077b6] font-medium hover:underline"
            >
              Mot de passe oublié ?
            </button>
          </div>

          {/* Lien d'inscription */}
          <div className="text-center mt-8 text-sm text-[#64748b]">
            Vous n'avez pas de compte ?{"    "}
            <button
              type="button"
              onClick={() => navigate("/create-account")}
              className="text-[#0077b6] font-medium hover:underline"
            >
              S'inscrire
            </button>
          </div>
        </div>
      </div>

      {/* Côté Droit : */}
      <div className="hidden lg:flex lg:w-1/2 bg-foreground relative overflow-hidden items-center justify-center p-12">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />

        <div className="relative z-10 text-center text-white max-w-lg">
          <div className="mb-6 flex justify-center">
            <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 shadow-2xl"></div>
          </div>
          <h2 className="text-2xl font-bold tracking-tight mb-2"></h2>
          <p className="text-sm text-white/80"></p>
        </div>
      </div>
    </div>
  );
}
