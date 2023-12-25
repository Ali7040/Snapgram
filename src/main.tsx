import React from "react";
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "../node_modules/react-router-dom/dist/index";
import { AuthProvider } from "@/context/AuthContext";
import App from "./App.tsx";
import { QueryProvider } from "@/lib/react-query/QueryProvider"


ReactDOM.createRoot(document.getElementById("root")!).render(
<React.StrictMode>
    <BrowserRouter>
      <QueryProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </QueryProvider>
    </BrowserRouter>
  </React.StrictMode>
  );
