import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/button";
import { UploadAvatar, Logout, getCurrentUser } from "@/lib/auth/auth";

export default function ProfilePage() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const response = await getCurrentUser();
        setUser(response.user ?? response);
      } catch {
        navigate("/login", { replace: true });
      }
    };

    loadUser();
  }, [navigate]);

  const handleAvatarChange = async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("avatar", file);

    try {
      setLoading(true);
      const response = await UploadAvatar(formData);
      setUser(response.user ?? response);
      toast.success(response.message || "Photo mise à jour.");
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Impossible de mettre à jour la photo.",
      );
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await Logout();
      navigate("/login", { replace: true });
    } catch {
      navigate("/login", { replace: true });
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#f8f9fa] px-4 py-10">
      <div className="mx-auto max-w-3xl rounded-2xl bg-white shadow-lg border border-slate-200 p-8">
        <div className="flex items-center justify-between gap-4 mb-6">
          <div>
            <h1 className="text-2xl font-bold">Profil</h1>
            <p className="text-sm text-slate-600">
              Gérez votre avatar et votre session.
            </p>
          </div>
          <Button variant="outline" onClick={handleLogout}>
            Déconnexion
          </Button>
        </div>

        <div className="flex items-center gap-6">
          <div className="relative">
            <img
              src={
                user?.photo ||
                "https://ui-avatars.com/api/?name=" +
                  encodeURIComponent(user?.name || "User")
              }
              alt="Avatar"
              className="h-24 w-24 rounded-full object-cover border border-slate-200"
            />
            <label className="absolute bottom-0 right-0 cursor-pointer rounded-full bg-[#0077b6] p-2 text-white shadow-md hover:bg-[#005f92]">
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleAvatarChange}
              />
              <span className="text-xs">✎</span>
            </label>
          </div>

          <div>
            <p className="text-xl font-semibold">
              {user?.name || "Utilisateur"}
            </p>
            <p className="text-slate-600">
              {user?.email || "email@exemple.com"}
            </p>
          </div>
        </div>

        <div className="mt-8">
          <Button
            onClick={() => navigate("/", { replace: true })}
            className="bg-[#0077b6] hover:bg-[#005f92] text-white"
          >
            Retour au dashboard
          </Button>
        </div>

        {loading && (
          <p className="mt-4 text-sm text-slate-500">
            Mise à jour de la photo...
          </p>
        )}
      </div>
    </div>
  );
}
