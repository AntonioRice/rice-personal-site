import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const ErrorPage = () => (
  <>
    <Helmet>
      <title>404 · A. Rice</title>
    </Helmet>
    <div className="flex min-h-screen items-center justify-center bg-canvas px-6 py-12 font-mono text-fg">
      <div className="max-w-[560px] border border-rule-strong bg-card p-9 text-center lg:p-[48px_36px]">
        <div className="mono-label mb-4 text-accent lg:mb-5">
          {"// status: 404 · record_not_found"}
        </div>
        <h1
          className="m-0 font-sans font-medium leading-[0.95] tracking-[-0.035em]"
          style={{ fontSize: "clamp(40px, 8vw, 72px)" }}
        >
          off the record<span className="text-accent">.</span>
        </h1>
        <p
          className="mb-8 mt-4 font-sans text-[16px] leading-[1.55] text-dim"
          style={{ textWrap: "pretty" }}
        >
          The page you&rsquo;re looking for isn&rsquo;t in this dossier.
        </p>
        <Link
          to="/"
          className="dossier-cta inline-flex items-center gap-2 bg-accent px-[18px] py-3 font-mono text-[12px] font-medium uppercase tracking-[0.06em] text-canvas no-underline"
        >
          ← back to index
        </Link>
      </div>
    </div>
  </>
);

export default ErrorPage;
