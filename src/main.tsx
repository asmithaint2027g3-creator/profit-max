import React, { Component, ErrorInfo, ReactNode } from "react";
import { createRoot } from "react-dom/client";
import { MotionConfig } from "motion/react";
import App from "./app/App.tsx";
import "./styles/index.css";
import "./lib/analytics"; // Initialize analytics auto-tracking

// Global auto-recovery for Vite dynamic module chunk version mismatches across deployments
window.addEventListener("vite:preloadError", (event) => {
  if (import.meta.env.DEV) return;
  event.preventDefault();
  const reloadKey = "pm_chunk_reload";
  const lastReload = sessionStorage.getItem(reloadKey);
  const now = Date.now();
  if (!lastReload || now - parseInt(lastReload, 10) > 10000) {
    sessionStorage.setItem(reloadKey, now.toString());
    window.location.reload();
  }
});

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class RootErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Root Error Boundary caught an error:", error, errorInfo);
    
    // Auto-reload on dynamic import failure caused by new deployments (production only)
    if (!import.meta.env.DEV) {
      const msg = error?.message || "";
      if (
        msg.includes("dynamically imported module") ||
        msg.includes("Loading chunk") ||
        msg.includes("Importing a module script failed")
      ) {
        const reloadKey = "pm_chunk_reload";
        const lastReload = sessionStorage.getItem(reloadKey);
        const now = Date.now();
        if (!lastReload || now - parseInt(lastReload, 10) > 10000) {
          sessionStorage.setItem(reloadKey, now.toString());
          window.location.reload();
        }
      }
    }
  }

  render() {
    if (this.state.hasError) {
      const isChunkError = 
        this.state.error?.message?.includes("dynamically imported module") ||
        this.state.error?.message?.includes("Loading chunk");

      return (
        <div style={{ minHeight: "100vh", backgroundColor: "#020617", color: "#f8fafc", padding: "32px", fontFamily: "system-ui, -apple-system, sans-serif", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          <div style={{ maxWidth: "540px", width: "100%", backgroundColor: "#0f172a", border: "1px solid rgba(59, 130, 246, 0.3)", borderRadius: "16px", padding: "32px", boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)", textAlign: "center" }}>
            <div style={{ display: "inline-flex", padding: "6px 14px", borderRadius: "9999px", backgroundColor: "rgba(59, 130, 246, 0.15)", color: "#60a5fa", fontSize: "12px", fontWeight: "600", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "16px" }}>
              {isChunkError ? "Application Update Detected" : "Application Notice"}
            </div>
            <h2 style={{ fontSize: "22px", fontWeight: "700", color: "#ffffff", marginBottom: "12px" }}>
              {isChunkError ? "A newer version of ProfitMachines is available" : "Something went wrong"}
            </h2>
            <p style={{ fontSize: "14px", color: "#94a3b8", lineHeight: "1.6", marginBottom: "24px" }}>
              {isChunkError
                ? "The application was updated in the background. Please click below to refresh and load the latest release."
                : (this.state.error?.message || "An unexpected error occurred while rendering this page.")}
            </p>
            <button
              onClick={() => {
                sessionStorage.removeItem("pm_chunk_reload");
                window.location.reload();
              }}
              style={{ padding: "12px 28px", backgroundColor: "#2563eb", color: "#ffffff", border: "none", borderRadius: "10px", fontWeight: "600", cursor: "pointer", fontSize: "15px", transition: "all 0.2s" }}
            >
              Refresh Application
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

createRoot(document.getElementById("root")!).render(
  <RootErrorBoundary>
    <MotionConfig reducedMotion="user">
      <App />
    </MotionConfig>
  </RootErrorBoundary>
);
