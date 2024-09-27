import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Layout from "./layout";

const queryClient = new QueryClient();

function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <Layout />
      </QueryClientProvider>
    </div>
  );
}

export default App;
