import { Landing } from "@/features/misc";
import { RouteObject } from "react-router-dom";
import { AuthRoutes } from "@/features/auth";

export const PublicRoutes: RouteObject[] = [
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/auth/*",
    element: <AuthRoutes />,
  },
];
