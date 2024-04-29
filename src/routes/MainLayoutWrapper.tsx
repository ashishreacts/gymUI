import { MainLayout } from "@/components/Layout";
import { Outlet } from "react-router-dom";

export const MainLayoutWrapper = () => {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
};
