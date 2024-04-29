import { PublicRoutes } from "@/routes/PublicRoutes";
import { useRoutes } from "react-router-dom";
import { ProtectedRoutes } from "./ProtectedRoutes";

export const AppRoutes = () => {
  const element = useRoutes([...PublicRoutes, ...ProtectedRoutes]);

  return <>{element}</>;
};
