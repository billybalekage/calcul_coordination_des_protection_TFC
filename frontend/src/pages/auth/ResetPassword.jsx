import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { resetPassword } from "@/lib/auth/auth";

export default function ResetPassword() {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || "";
  const [token, setToken] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!token || !password) {
      toast.error("Le code et le nouveau mot de passe sont requis.");
      return;
    }

    try {
      setLoading(true);
      const response = await resetPassword({ token, password });
      toast.success(response.message || "Mot de passe réinitialisé.");
      navigate("/login", { replace: true });
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Le code est invalide ou expiré. Veuillez réessayer.",
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
            Réinitialisation
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            {email
              ? `Code envoyé à ${email}`
              : "Entrez le code et votre nouveau mot de passe."}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="text"
            value={token}
            onChange={(event) => setToken(event.target.value)}
            placeholder="Code de réinitialisation"
            className="h-12"
          />

          <Input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Nouveau mot de passe"
            className="h-12"
          />

          <Button
            type="submit"
            disabled={loading}
            className="w-full h-11 bg-[#0077b6] hover:bg-[#005f92] text-white"
          >
            {loading ? "Réinitialisation..." : "Réinitialiser"}
          </Button>
        </form>
      </div>
    </div>
  );
}
