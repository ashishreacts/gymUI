import { Head } from "@/components/Head";
import React from "react";

const containerStyle: React.CSSProperties = {
  backgroundColor: "skyblue",
  margin: "30px",
};

type ContentLayoutProps = {
  children: React.ReactNode;
  title: string;
};

export const ContentLayout = ({ children, title }: ContentLayoutProps) => {
  return (
    <>
      <Head title={title} />
      <h1>Content Layout - just a wrapper to set head and render children</h1>
      <div style={containerStyle}>{children}</div>
    </>
  );
};
