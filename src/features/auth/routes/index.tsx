import { Route, Routes } from "react-router-dom";
import { Login } from "./login";

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
    </Routes>
  );
};
