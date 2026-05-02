import Reveal from "../Reveal";
import { tagPill, mTagPill } from "./styles";

export const ProjectCard = ({ p }) => (
  <Reveal>
    <a
      href={p.href}
      target="_blank"
      rel="noreferrer"
      className="dossier-hover"
      style={{
        background: "var(--bg)",
        padding: "28px 26px",
        minHeight: 280,
        display: "flex",
        flexDirection: "column",
        gap: 14,
        cursor: "pointer",
        textDecoration: "none",
        color: "inherit",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span className="mono-label">
          {p.id} · {p.year}
        </span>
        <span style={{ color: "var(--muted)" }}>→</span>
      </div>
      <h4
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: 24,
          letterSpacing: "-0.015em",
          margin: 0,
          fontWeight: 500,
        }}
      >
        {p.title}
      </h4>
      <p
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: 14,
          color: "var(--text-dim)",
          margin: 0,
          lineHeight: 1.55,
          flex: 1,
        }}
      >
        {p.blurb}
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
        {p.tags.map((t) => (
          <span key={t} style={tagPill}>
            {t}
          </span>
        ))}
      </div>
    </a>
  </Reveal>
);

export const MobileProjectCard = ({ p }) => (
  <a
    href={p.href}
    target="_blank"
    rel="noreferrer"
    className="dossier-hover"
    style={{
      background: "var(--bg)",
      display: "flex",
      flexDirection: "column",
      textDecoration: "none",
      color: "inherit",
    }}
  >
    <div
      style={{
        padding: 18,
        display: "flex",
        flexDirection: "column",
        gap: 10,
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span className="mono-label" style={{ fontSize: 10 }}>
          {p.id} · {p.year}
        </span>
        <span style={{ color: "var(--muted)" }}>→</span>
      </div>
      <h4
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: 19,
          letterSpacing: "-0.015em",
          margin: 0,
          fontWeight: 500,
        }}
      >
        {p.title}
      </h4>
      <p
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: 13,
          color: "var(--text-dim)",
          margin: 0,
          lineHeight: 1.5,
        }}
      >
        {p.blurb}
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
        {p.tags.map((t) => (
          <span key={t} style={mTagPill}>
            {t}
          </span>
        ))}
      </div>
    </div>
  </a>
);
