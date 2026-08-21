import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, KeyRound, User } from "lucide-react";
import { createUser } from "@/lib/auth/auth";
import { isValidEmail } from "@/lib/auth/validation";

export default function CreateAccount() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.password) {
      toast.error("Veuillez remplir tous les champs.");
      return;
    }

    if (!isValidEmail(formData.email)) {
      toast.error("Veuillez saisir une adresse email valide.");
      return;
    }

    try {
      setLoading(true);
      const response = await createUser({
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });

      toast.success(response.message || "Compte créé avec succès !");
      navigate("/token-verification", {
        replace: true,
        state: { email: formData.email },
      });
    } catch (error) {
      const message =
        error.response?.data?.message ||
        "Une erreur est survenue, veuillez réessayer.";
      toast.error(message);
      console.log(error);
    } finally {
      setLoading(false);
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
              Creer un nouveau compte.
            </h1>
            <p className="text-sm text-[#64748b]">
              Entrez les information demander pour creer votre compte
            </p>
          </div>

          {/* Formulaire */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Champ nom */}
            <div className="relative">
              <User className="absolute left-3 top-3 h-5 w-5 text-[#64748b]" />
              <Input
                type="text"
                name="name"
                onChange={handleChange}
                placeholder="Nom"
                value={formData.name}
                className="pl-10 h-11 bg-white border-[#cbd5e1] focus-visible:ring-[#0077b6]"
              />
            </div>

            {/* Champ email*/}
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-5 w-5 text-[#64748b]" />
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Adresse email"
                className="pl-10 h-11 bg-white border-[#cbd5e1] focus-visible:ring-[#0077b6]"
              />
            </div>

            {/* Champ Mot de passe */}
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

            {/* Bouton de soumission */}
            <Button
              type="submit"
              disabled={loading}
              className="w-full h-11 bg-[#0077b6] hover:bg-[#005f92] text-white font-medium rounded-xl transition-all shadow-md"
            >
              {loading ? "Creation..." : "Créer mon compte"}
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

          {/* Lien d'inscription */}
          <div className="text-center mt-8 text-sm text-[#64748b]">
            Vous avez déjà un compte ?{"    "}
            <button
              type="button"
              onClick={() => navigate("/login")}
              className="text-[#0077b6] font-medium hover:underline"
            >
              Connectez-vous
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
