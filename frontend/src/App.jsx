import { Routes, Route, Navigate } from "react-router-dom";
import TokenVerification from "./pages/auth/tokenVerfication";
import CreateAccount from "./pages/auth/register";
import Login from "./pages/auth/login";
import ForgotPassword from "./pages/auth/ForgotPassword";
import ResetPassword from "./pages/auth/ResetPassword";
import ProfilePage from "./pages/ProfilePage";
import NotFound from "./pages/notFound";
import Darshboard from "./pages/Darshboard";
import ProjectCalculation from "./pages/ProjectCalculation";
import { useAuthSession } from "@/hooks/use-auth-session";

const ProtectedRoute = ({ children }) => {
  const { isChecking, isAuthenticated } = useAuthSession();

  if (isChecking) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Vérification de la session...
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

const PublicOnlyRoute = ({ children }) => {
  const { isChecking, isAuthenticated } = useAuthSession();

  if (isChecking) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Chargement...
      </div>
    );
  }

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return children;
};

const App = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 text-bold">
      <Routes>
        {/* <Route path="/" element={<Navigate to="/dashboard" replace />} /> */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Darshboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicOnlyRoute>
              <Login />
            </PublicOnlyRoute>
          }
        />
        <Route
          path="/create-account"
          element={
            <PublicOnlyRoute>
              <CreateAccount />
            </PublicOnlyRoute>
          }
        />
        <Route
          path="/token-verification"
          element={
            <PublicOnlyRoute>
              <TokenVerification />
            </PublicOnlyRoute>
          }
        />
        <Route
          path="/forgot-password"
          element={
            <PublicOnlyRoute>
              <ForgotPassword />
            </PublicOnlyRoute>
          }
        />
        <Route
          path="/reset-password"
          element={
            <PublicOnlyRoute>
              <ResetPassword />
            </PublicOnlyRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/projects/:projectId"
          element={
            <ProtectedRoute>
              <ProjectCalculation />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
