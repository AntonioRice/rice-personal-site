import { useState } from "react";
import { motion } from "framer-motion";
import Reveal from "../Reveal";
import { tagPill, mTagPill } from "./styles";

const animatedExpand = (open) => ({
  initial: false,
  animate: { height: open ? "auto" : 0, opacity: open ? 1 : 0 },
  transition: {
    height: { duration: 0.45, ease: [0.2, 0.7, 0.2, 1] },
    opacity: { duration: open ? 0.35 : 0.15, delay: open ? 0.1 : 0 },
  },
  style: { overflow: "hidden" },
});

export const ExperienceRow = ({ e, i }) => {
  const [open, setOpen] = useState(i === 0);
  return (
    <Reveal>
      <div style={{ borderBottom: "1px solid var(--border)" }}>
        <button
          onClick={() => setOpen((o) => !o)}
          className="dossier-hover"
          style={{
            width: "100%",
            background: "transparent",
            border: 0,
            color: "var(--text)",
            cursor: "pointer",
            padding: "20px 16px",
            display: "grid",
            gridTemplateColumns: "60px 2fr 2fr 1.5fr 24px",
            gap: 24,
            alignItems: "center",
            textAlign: "left",
            fontFamily: "var(--font-mono)",
            fontSize: 13,
          }}
        >
          <span style={{ color: "var(--muted)" }}>
            e{String(i + 1).padStart(2, "0")}
          </span>
          <span
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 22,
              letterSpacing: "-0.01em",
            }}
          >
            {e.company}
          </span>
          <span style={{ color: "var(--text-dim)" }}>{e.role}</span>
          <span style={{ color: "var(--muted)" }}>{e.period}</span>
          <span
            style={{
              color: "var(--accent)",
              textAlign: "right",
              transform: open ? "rotate(90deg)" : "none",
              transition: "transform 0.2s",
              display: "inline-block",
            }}
          >
            →
          </span>
        </button>
        <motion.div {...animatedExpand(open)}>
          <article
            style={{
              padding: "20px 0 48px 0",
              display: "grid",
              gridTemplateColumns: "100px 1fr 1fr",
              gap: 40,
              borderTop: "1px dashed var(--border-strong)",
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  color: "var(--muted)",
                  letterSpacing: "0.08em",
                }}
              >
                Ch. {String(i + 1).padStart(2, "0")}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  color: "var(--muted)",
                  marginTop: 8,
                }}
              >
                {e.period}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  color: "var(--muted)",
                  marginTop: 8,
                }}
              >
                {e.location}
              </div>
            </div>
            <div>
              <div className="mono-label" style={{ marginBottom: 8 }}>
                {e.role}
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-serif)",
                  fontStyle: "italic",
                  fontSize: 40,
                  lineHeight: 1,
                  fontWeight: 400,
                  margin: 0,
                  letterSpacing: "-0.02em",
                }}
              >
                {e.company}
              </h3>
              <div
                style={{
                  marginTop: 18,
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 6,
                }}
              >
                {e.stack.map((s, si) => (
                  <span key={s + si} style={tagPill}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <ul
                style={{
                  margin: 0,
                  paddingLeft: 0,
                  listStyle: "none",
                  fontFamily: "var(--font-sans)",
                  fontSize: 15.5,
                  lineHeight: 1.6,
                  color: "var(--text-dim)",
                }}
              >
                {e.bullets.map((b, bi) => (
                  <li
                    key={bi}
                    style={{
                      paddingLeft: 22,
                      position: "relative",
                      marginBottom: 10,
                      textWrap: "pretty",
                    }}
                  >
                    <span
                      style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        color: "var(--accent)",
                        fontFamily: "var(--font-mono)",
                        fontSize: 12,
                      }}
                    >
                      ›
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </motion.div>
      </div>
    </Reveal>
  );
};

export const MobileExperienceRow = ({ e, i }) => {
  const [open, setOpen] = useState(i === 0);
  return (
    <div style={{ borderBottom: "1px solid var(--border)" }}>
      <button
        onClick={() => setOpen((o) => !o)}
        className="dossier-hover"
        style={{
          width: "100%",
          background: "transparent",
          border: 0,
          color: "var(--text)",
          cursor: "pointer",
          padding: "16px 12px",
          display: "grid",
          gridTemplateColumns: "30px 1fr 18px",
          gap: 10,
          alignItems: "center",
          textAlign: "left",
          fontFamily: "var(--font-mono)",
          fontSize: 12,
        }}
      >
        <span style={{ color: "var(--muted)", fontSize: 10 }}>
          e{String(i + 1).padStart(2, "0")}
        </span>
        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <span
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 17,
              letterSpacing: "-0.01em",
            }}
          >
            {e.company}
          </span>
          <span style={{ color: "var(--text-dim)", fontSize: 11 }}>
            {e.role}
          </span>
          <span
            style={{
              color: "var(--muted)",
              fontSize: 10,
              letterSpacing: "0.04em",
            }}
          >
            {e.period}
          </span>
        </div>
        <span
          style={{
            color: "var(--accent)",
            textAlign: "right",
            transform: open ? "rotate(90deg)" : "none",
            transition: "transform 0.2s",
            display: "inline-block",
          }}
        >
          →
        </span>
      </button>
      <motion.div {...animatedExpand(open)}>
        <article
          style={{
            padding: "12px 0 32px 0",
            borderTop: "1px dashed var(--border-strong)",
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontFamily: "var(--font-mono)",
              fontSize: 10,
              color: "var(--muted)",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              paddingTop: 14,
            }}
          >
            <span>Ch. {String(i + 1).padStart(2, "0")}</span>
            <span>{e.location}</span>
          </div>
          <div>
            <div
              className="mono-label"
              style={{ marginBottom: 6, fontSize: 10 }}
            >
              {e.role}
            </div>
            <h3
              style={{
                fontFamily: "var(--font-serif)",
                fontStyle: "italic",
                fontSize: 30,
                lineHeight: 1,
                fontWeight: 400,
                margin: 0,
                letterSpacing: "-0.02em",
              }}
            >
              {e.company}
            </h3>
          </div>
          <ul
            style={{
              margin: 0,
              paddingLeft: 0,
              listStyle: "none",
              fontFamily: "var(--font-sans)",
              fontSize: 14,
              lineHeight: 1.55,
              color: "var(--text-dim)",
            }}
          >
            {e.bullets.map((b, bi) => (
              <li
                key={bi}
                style={{
                  paddingLeft: 18,
                  position: "relative",
                  marginBottom: 10,
                  textWrap: "pretty",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    color: "var(--accent)",
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                  }}
                >
                  ›
                </span>
                {b}
              </li>
            ))}
          </ul>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
            {e.stack.map((s, si) => (
              <span key={s + si} style={mTagPill}>
                {s}
              </span>
            ))}
          </div>
        </article>
      </motion.div>
    </div>
  );
};
