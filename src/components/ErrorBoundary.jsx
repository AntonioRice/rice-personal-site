import { Component } from "react";
import { Link } from "react-router-dom";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    if (import.meta.env.DEV) {
      console.error("ErrorBoundary caught an error:", error, errorInfo);
    }
  }

  handleReset = () => {
    this.setState({ hasError: false });
  };

  render() {
    if (!this.state.hasError) return this.props.children;

    return (
      <div
        className="flex min-h-screen items-center justify-center bg-canvas px-6 py-12 font-mono text-fg"
        role="alert"
        aria-live="assertive"
      >
        <div className="max-w-[560px] border border-rule-strong bg-card p-9 text-center lg:p-[48px_36px]">
          <div className="mono-label mb-4 text-accent lg:mb-5">
            {"// status: 500 · unhandled_exception"}
          </div>
          <h1
            className="m-0 font-sans font-medium leading-[0.95] tracking-[-0.035em]"
            style={{ fontSize: "clamp(40px, 8vw, 72px)" }}
          >
            something broke<span className="text-accent">.</span>
          </h1>
          <p
            className="mb-8 mt-4 font-sans text-[16px] leading-[1.55] text-dim"
            style={{ textWrap: "pretty" }}
          >
            An unexpected error interrupted the page. Try again, or head back to
            the index.
          </p>
          <div className="flex flex-col items-center gap-2 lg:flex-row lg:justify-center lg:gap-3">
            <button
              type="button"
              onClick={this.handleReset}
              className="dossier-cta inline-flex items-center gap-2 bg-accent px-[18px] py-3 font-mono text-[12px] font-medium uppercase tracking-[0.06em] text-canvas no-underline"
            >
              try again →
            </button>
            <Link
              to="/"
              className="dossier-hover inline-flex items-center gap-2 border border-rule-strong px-[18px] py-3 font-mono text-[12px] uppercase tracking-[0.06em] text-fg no-underline"
            >
              ← back to index
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default ErrorBoundary;
