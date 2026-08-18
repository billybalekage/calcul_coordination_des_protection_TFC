import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { resetPassword } from "@/lib/auth/auth";
import { isValidResetCode } from "@/lib/auth/validation";

export default function ResetPassword() {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || "";
  const [token, setToken] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const normalizedToken = token.trim();

    if (!normalizedToken || !password) {
      toast.error("Le code et le nouveau mot de passe sont requis.");
      return;
    }

    if (!isValidResetCode(normalizedToken)) {
      toast.error("Le code de réinitialisation doit contenir 6 chiffres.");
      return;
    }

    try {
      setLoading(true);
      const response = await resetPassword({
        token: normalizedToken,
        password,
      });
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
          {/* Champ du code OTP à 6 chiffres */}
          <div className="flex flex-col items-center">
            <label className="mb-2 block text-sm font-medium text-slate-700 w-full text-left">
              Code de réinitialisation
            </label>
            <InputOTP
              maxLength={6}
              value={token}
              onChange={(value) => setToken(value)}
              pattern={REGEXP_ONLY_DIGITS}
            >
              <InputOTPGroup>
                <InputOTPSlot index={0} className="h-12 w-12 text-lg" />
                <InputOTPSlot index={1} className="h-12 w-12 text-lg" />
                <InputOTPSlot index={2} className="h-12 w-12 text-lg" />
                <InputOTPSlot index={3} className="h-12 w-12 text-lg" />
                <InputOTPSlot index={4} className="h-12 w-12 text-lg" />
                <InputOTPSlot index={5} className="h-12 w-12 text-lg" />
              </InputOTPGroup>
            </InputOTP>
          </div>

          {/* Champ du nouveau mot de passe */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Nouveau mot de passe
            </label>
            <Input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="••••••••"
              className="h-12"
            />
          </div>

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
