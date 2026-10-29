import React, { Component, ErrorInfo, ReactNode } from "react";
import { createRoot } from "react-dom/client";
import { MotionConfig } from "motion/react";
import App from "./app/App.tsx";
import "./styles/index.css";
import "./lib/analytics"; // Initialize analytics auto-tracking

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
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ minHeight: "100vh", backgroundColor: "#020617", color: "#f8fafc", padding: "32px", fontFamily: "monospace", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          <div style={{ maxWidth: "600px", width: "100%", backgroundColor: "#0f172a", border: "1px solid rgba(239, 68, 68, 0.4)", borderRadius: "16px", padding: "24px", boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)" }}>
            <div style={{ display: "inline-flex", padding: "4px 12px", borderRadius: "9999px", backgroundColor: "rgba(239, 68, 68, 0.2)", color: "#f87171", fontSize: "12px", fontWeight: "bold", textTransform: "uppercase", marginBottom: "16px" }}>
              Application Render Diagnostic
            </div>
            <h2 style={{ fontSize: "20px", fontWeight: "bold", color: "#ffffff", marginBottom: "8px" }}>
              Render Exception Encountered
            </h2>
            <p style={{ fontSize: "13px", color: "#cbd5e1", backgroundColor: "#020617", padding: "16px", borderRadius: "12px", border: "1px solid #1e293b", marginBottom: "24px", overflow: "auto", whiteSpace: "pre-wrap" }}>
              {this.state.error?.stack || this.state.error?.message || String(this.state.error)}
            </p>
            <button
              onClick={() => window.location.reload()}
              style={{ padding: "10px 20px", backgroundColor: "#2563eb", color: "#ffffff", border: "none", borderRadius: "10px", fontWeight: "bold", cursor: "pointer", fontSize: "14px" }}
            >
              Reload Application
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
