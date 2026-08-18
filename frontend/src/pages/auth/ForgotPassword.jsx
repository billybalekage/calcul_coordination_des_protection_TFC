import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"; // Import du composant Input de shadcn
import { forgotPassword } from "@/lib/auth/auth";
import { isValidEmail } from "@/lib/auth/validation";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!email || !isValidEmail(email)) {
      toast.error("Veuillez saisir une adresse email valide.");
      return;
    }

    try {
      setLoading(true);
      const response = await forgotPassword({ email });
      toast.success(response.message || "Email de réinitialisation envoyé.");
      navigate("/reset-password", { state: { email } });
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Impossible d'envoyer le code de réinitialisation.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#f8f9fa] px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg border border-slate-200">
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-bold text-slate-900">
            Mot de passe oublié
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            Entrez votre email pour recevoir un code de réinitialisation.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Adresse email
            </label>
            <Input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="nom@exemple.com"
              className="h-12"
            />
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="w-full h-11 bg-[#0077b6] hover:bg-[#005f92] text-white"
          >
            {loading ? "Envoi..." : "Envoyer le code"}
          </Button>
        </form>

        <div className="mt-4 text-center text-sm text-slate-600">
          <button
            type="button"
            onClick={() => navigate("/login")}
            className="font-medium text-[#0077b6] hover:underline"
          >
            Retour à la connexion
          </button>
        </div>
      </div>
    </div>
  );
}
