import { Route, Routes } from "react-router-dom";
import { Login } from "./login";
import Signup from "./Signup";

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
    </Routes>
  );
};
