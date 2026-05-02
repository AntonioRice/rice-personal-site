import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const ErrorPage = () => (
  <>
    <Helmet>
      <title>404 · A. Rice</title>
    </Helmet>
    <div
      style={{
        background: "var(--bg)",
        color: "var(--text)",
        fontFamily: "var(--font-mono)",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "48px 24px",
      }}
    >
      <div
        style={{
          maxWidth: 560,
          textAlign: "center",
          border: "1px solid var(--border-strong)",
          background: "var(--bg-soft)",
          padding: "48px 36px",
        }}
      >
        <div
          className="mono-label"
          style={{ color: "var(--accent)", marginBottom: 18 }}
        >
          {"// status: 404 · record_not_found"}
        </div>
        <h1
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "clamp(40px, 8vw, 72px)",
            lineHeight: 0.95,
            letterSpacing: "-0.035em",
            fontWeight: 500,
            margin: 0,
          }}
        >
          off the record<span style={{ color: "var(--accent)" }}>.</span>
        </h1>
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: 16,
            lineHeight: 1.55,
            color: "var(--text-dim)",
            marginTop: 18,
            marginBottom: 32,
            textWrap: "pretty",
          }}
        >
          The page you&rsquo;re looking for isn&rsquo;t in this dossier.
        </p>
        <Link
          to="/"
          className="dossier-cta"
          style={{
            background: "var(--accent)",
            color: "#0a0a0a",
            fontFamily: "var(--font-mono)",
            fontSize: 12,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            padding: "12px 18px",
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            fontWeight: 500,
          }}
        >
          ← back to index
        </Link>
      </div>
    </div>
  </>
);

export default ErrorPage;
