import Reveal from "../Reveal";

export const Section = ({ num, title, count, id, children }) => (
  <section id={id} style={{ paddingTop: 96, paddingBottom: 24 }}>
    <Reveal>
      <header
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
          paddingBottom: 24,
          borderBottom: "1px solid var(--border-strong)",
          marginBottom: 32,
        }}
      >
        <div style={{ display: "flex", alignItems: "baseline", gap: 20 }}>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 12,
              color: "var(--accent)",
            }}
          >
            {`// ${num}`}
          </span>
          <h2
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 40,
              fontWeight: 500,
              letterSpacing: "-0.025em",
              margin: 0,
            }}
          >
            {title}
            <span style={{ color: "var(--accent)" }}>.</span>
          </h2>
        </div>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            color: "var(--muted)",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
          }}
        >
          {count}
        </span>
      </header>
    </Reveal>
    {children}
  </section>
);

export const MobileSection = ({ num, title, count, id, children }) => (
  <section id={id} style={{ paddingTop: 56 }}>
    <header
      style={{
        display: "flex",
        alignItems: "baseline",
        justifyContent: "space-between",
        paddingBottom: 14,
        borderBottom: "1px solid var(--border-strong)",
        marginBottom: 22,
      }}
    >
      <div style={{ display: "flex", alignItems: "baseline", gap: 12 }}>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            color: "var(--accent)",
          }}
        >
          {`// ${num}`}
        </span>
        <h2
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: 26,
            fontWeight: 500,
            letterSpacing: "-0.02em",
            margin: 0,
          }}
        >
          {title}
          <span style={{ color: "var(--accent)" }}>.</span>
        </h2>
      </div>
      <span
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: 9,
          color: "var(--muted)",
          letterSpacing: "0.06em",
          textTransform: "uppercase",
        }}
      >
        {count}
      </span>
    </header>
    {children}
  </section>
);
