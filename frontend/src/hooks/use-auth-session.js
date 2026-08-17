import { useEffect, useState } from "react";
import { getCurrentUser } from "@/lib/auth/auth";

export const useAuthSession = () => {
  const [isChecking, setIsChecking] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    let mounted = true;

    const checkAuth = async () => {
      try {
        const response = await getCurrentUser();
        const isLoggedIn = Boolean(response?.success && response?.user);

        if (mounted) {
          setIsAuthenticated(isLoggedIn);
        }
      } catch (error) {
        const status = error?.response?.status;

        if (status !== 401 && status !== 403) {
          console.error("Vérification session :", error);
        }

        if (mounted) {
          setIsAuthenticated(false);
        }
      } finally {
        if (mounted) {
          setIsChecking(false);
        }
      }
    };

    checkAuth();

    return () => {
      mounted = false;
    };
  }, []);

  return {
    isChecking,
    isAuthenticated,
    setIsAuthenticated,
  };
};
