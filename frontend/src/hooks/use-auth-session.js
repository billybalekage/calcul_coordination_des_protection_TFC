import { useEffect, useState } from "react";
import { getCurrentUser } from "@/lib/auth/auth";

const hasAuthCookie = () =>
  document.cookie
    .split(";")
    .some((cookie) => cookie.trim().startsWith("swg_access_token="));

export const useAuthSession = () => {
  const [isChecking, setIsChecking] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    let mounted = true;

    const checkAuth = async () => {
      if (!hasAuthCookie()) {
        if (mounted) {
          setIsAuthenticated(false);
          setIsChecking(false);
        }
        return;
      }

      try {
        await getCurrentUser();
        if (mounted) {
          setIsAuthenticated(true);
          setIsChecking(false);
        }
      } catch {
        if (mounted) {
          setIsAuthenticated(false);
          setIsChecking(false);
        }
      }
    };

    checkAuth();

    return () => {
      mounted = false;
    };
  }, []);

  return { isChecking, isAuthenticated, setIsAuthenticated };
};
