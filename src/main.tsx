import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeProvider.tsx";
import { Toaster } from "sonner";
import { AuthProvider } from "./context/AuthContext.tsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { TooltipProvider } from "./components/ui/tooltip.tsx";
import AdAccountProvider from "./context/AdAccountContext.tsx";
import { Analytics } from "@vercel/analytics/react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ThemeProvider defaultTheme="light" storageKey="sumptuo-ui-theme">
          <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
            <TooltipProvider>
              <AdAccountProvider>
                <App />
                <Analytics />
                <Toaster
                  richColors
                  toastOptions={{
                    classNames: {
                      toast:
                        "bg-background text-foreground border border-border shadow-lg",
                      success: "bg-primary text-primary-foreground",
                      error: "bg-destructive text-destructive-foreground",
                      warning: "bg-yellow-500 text-white",
                      info: "bg-blue-500 text-white",
                    },
                  }}
                />
              </AdAccountProvider>
            </TooltipProvider>
          </GoogleOAuthProvider>
        </ThemeProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
);
