const containerStyle: React.CSSProperties = {
  backgroundColor: "yellow",
  margin: "30px",
};

type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div>
      <h1>Main Layout - common layout for all content</h1>
      <div style={containerStyle}>{children}</div>
    </div>
  );
};
