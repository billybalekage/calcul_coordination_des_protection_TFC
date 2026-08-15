import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  VerifyEmail,
  getCurrentUser,
  resendVerification,
} from "@/lib/auth/auth";

const TokenVerification = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const emailFromState = location.state?.email || "";

  const [email, setEmail] = useState(emailFromState);
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let mounted = true;

    getCurrentUser()
      .then(() => {
        if (mounted) navigate("/", { replace: true });
      })
      .catch(() => {
        if (mounted) return;
      });

    return () => {
      mounted = false;
    };
  }, [navigate]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!token || !/^\d{6}$/.test(token)) {
      toast.error("Le code de vérification contient 6 chiffres.");
      return;
    }

    try {
      setLoading(true);
      const response = await VerifyEmail({ token });
      toast.success(response.message || "Adresse email vérifiée.");
      navigate("/", { replace: true });
    } catch (error) {
      const message =
        error.response?.data?.message ||
        "Le code est invalide ou expiré. Veuillez réessayer.";
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    if (!email) {
      toast.error("Aucune adresse email trouvée pour renvoyer le code.");
      return;
    }

    try {
      const response = await resendVerification({ email });
      toast.success(response.message || "Un nouveau code a été envoyé.");
    } catch (error) {
      const message =
        error.response?.data?.message ||
        "Impossible d'envoyer un nouveau code.";
      toast.error(message);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#f8f9fa] px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg border border-slate-200">
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-bold text-slate-900">
            Vérification de l'email
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            Entrez le code à 6 chiffres envoyé à{" "}
            {email || "votre adresse email"}.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Code de vérification
            </label>
            <Input
              type="text"
              inputMode="numeric"
              maxLength={6}
              value={token}
              onChange={(event) =>
                setToken(event.target.value.replace(/\D/g, "").slice(0, 6))
              }
              placeholder="123456"
              className="h-12 text-center text-lg tracking-[0.5rem]"
            />
          </div>

          <Button
            type="submit"
            navigate={"/"}
            disabled={loading}
            className="w-full h-11 bg-[#0077b6] hover:bg-[#005f92] text-white"
          >
            {loading ? "Vérification..." : "Vérifier mon email"}
          </Button>
        </form>

        <div className="mt-4 text-center text-sm text-slate-600">
          Vous n'avez pas reçu le code ?{" "}
          <button
            type="button"
            onClick={handleResend}
            className="font-medium text-[#0077b6] hover:underline"
          >
            Renvoyer
          </button>
        </div>
      </div>
    </div>
  );
};

export default TokenVerification;
