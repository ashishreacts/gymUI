import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClients = new QueryClient();
function App() {
  return (
    <BrowserRouter>
      <HelmetProvider>
        <QueryClientProvider client={queryClients}>
          <AppRoutes />
        </QueryClientProvider>
      </HelmetProvider>
    </BrowserRouter>
  );
}

export default App;
