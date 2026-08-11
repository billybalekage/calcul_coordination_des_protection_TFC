import { Routes, Route } from "react-router-dom";
import TokenVerification from "./pages/auth/tokenVerfication";
import CreateAccount from "./pages/auth/register";
import NotFound from "./pages/notFound";
import Login from "./pages/auth/login";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 text-bold">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/token-verification" element={<TokenVerification />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
