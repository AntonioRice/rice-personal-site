import { useState } from "react";
import { motion } from "framer-motion";
import Reveal from "../Reveal";
import { BEFORE_TECH } from "../../utils/portfolioData";

const expandTransition = {
  height: { duration: 0.45, ease: [0.2, 0.7, 0.2, 1] },
  opacity: { duration: 0.35, delay: 0.1 },
};

const BeforeTechTimeline = ({ mobile }) => {
  const [open, setOpen] = useState(false);

  if (mobile) {
    return (
      <div style={{ marginTop: 32 }}>
        <button
          onClick={() => setOpen((o) => !o)}
          className="dossier-hover"
          style={{
            width: "100%",
            background: "transparent",
            border: 0,
            borderTop: "1px solid var(--border-strong)",
            borderBottom: "1px dashed var(--border-strong)",
            color: "var(--text)",
            cursor: "pointer",
            padding: "16px 14px",
            display: "flex",
            flexDirection: "column",
            gap: 6,
            textAlign: "left",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              fontFamily: "var(--font-mono)",
              fontSize: 10,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            <span style={{ color: "var(--accent)" }}>
              {"// before tech"}
            </span>
            <span
              style={{
                color: "var(--muted)",
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              {open ? "collapse" : "expand"}
              <span
                style={{
                  color: "var(--accent)",
                  fontSize: 14,
                  transform: open ? "rotate(90deg)" : "none",
                  transition: "transform 0.2s",
                  display: "inline-block",
                }}
              >
                →
              </span>
            </span>
          </div>
          <span
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 18,
              fontWeight: 500,
              letterSpacing: "-0.015em",
              color: "var(--text)",
            }}
          >
            the long way around
            <span style={{ color: "var(--accent)" }}>.</span>
          </span>
        </button>
        <motion.div
          initial={false}
          animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
          transition={{
            height: expandTransition.height,
            opacity: { duration: open ? 0.35 : 0.15, delay: open ? 0.1 : 0 },
          }}
          style={{ overflow: "hidden" }}
        >
          <div
            style={{
              position: "relative",
              paddingLeft: 18,
              paddingTop: 18,
              paddingBottom: 8,
            }}
          >
            <div
              style={{
                position: "absolute",
                left: 0,
                top: 18,
                bottom: 0,
                width: 1,
                background: "var(--border-strong)",
              }}
            />
            {BEFORE_TECH.map((e, i) => (
              <div
                key={e.where + i}
                style={{ position: "relative", paddingBottom: 18 }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 4,
                    left: -22,
                    width: 7,
                    height: 7,
                    background: "var(--accent)",
                  }}
                />
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 10,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "var(--muted)",
                    marginBottom: 4,
                  }}
                >
                  {e.period}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 15,
                    fontWeight: 500,
                    letterSpacing: "-0.01em",
                    color: "var(--text)",
                  }}
                >
                  {e.title}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 10,
                    color: "var(--accent)",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    marginBottom: 8,
                  }}
                >
                  {e.where}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 13,
                    lineHeight: 1.55,
                    color: "var(--text-dim)",
                    textWrap: "pretty",
                  }}
                >
                  {e.note}
                </div>
              </div>
            ))}
            <div style={{ position: "relative", paddingBottom: 6 }}>
              <div
                style={{
                  position: "absolute",
                  top: 2,
                  left: -25,
                  width: 0,
                  height: 0,
                  borderTop: "5px solid transparent",
                  borderBottom: "5px solid transparent",
                  borderLeft: "8px solid var(--accent)",
                }}
              />
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 10,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "var(--accent)",
                  marginBottom: 4,
                }}
              >
                2017 →
              </div>
              <div
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 15,
                  fontWeight: 500,
                  color: "var(--text)",
                }}
              >
                enrolled · prime digital academy
              </div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 9,
                  color: "var(--muted)",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}
              >
                the chapters above pick up here
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div style={{ marginTop: 56 }}>
      <Reveal>
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: 16,
            paddingBottom: 18,
            borderBottom: "1px dashed var(--border-strong)",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              color: "var(--accent)",
            }}
          >
            {"// before tech"}
          </span>
          <span
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 22,
              fontWeight: 500,
              letterSpacing: "-0.015em",
            }}
          >
            the long way around
            <span style={{ color: "var(--accent)" }}>.</span>
          </span>
          <span
            style={{
              marginLeft: "auto",
              fontFamily: "var(--font-mono)",
              fontSize: 10,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "var(--muted)",
            }}
          >
            archive · pre-2017
          </span>
        </div>
      </Reveal>

      <div style={{ position: "relative", paddingTop: 24, paddingBottom: 8 }}>
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 80,
            height: 1,
            background: "var(--border-strong)",
          }}
        />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${BEFORE_TECH.length + 1}, 1fr)`,
            gap: 0,
          }}
        >
          {BEFORE_TECH.slice()
            .reverse()
            .map((e, i) => (
              <Reveal key={e.where + i} delay={i * 80}>
                <div style={{ position: "relative", paddingRight: 16 }}>
                  <div
                    style={{
                      position: "absolute",
                      top: 75,
                      left: 0,
                      width: 1,
                      height: 11,
                      background: "var(--accent)",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: 74,
                      left: -3,
                      width: 7,
                      height: 7,
                      background: "var(--accent)",
                    }}
                  />
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 10,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "var(--muted)",
                      marginBottom: 4,
                    }}
                  >
                    {e.period}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: 15,
                      fontWeight: 500,
                      letterSpacing: "-0.01em",
                      color: "var(--text)",
                      marginBottom: 2,
                      minHeight: 22,
                    }}
                  >
                    {e.title}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 10,
                      color: "var(--accent)",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      marginTop: 10,
                      marginBottom: 28,
                    }}
                  >
                    {e.where}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: 13,
                      lineHeight: 1.55,
                      color: "var(--text-dim)",
                      paddingTop: 18,
                      textWrap: "pretty",
                    }}
                  >
                    {e.note}
                  </div>
                </div>
              </Reveal>
            ))}

          <Reveal delay={BEFORE_TECH.length * 80}>
            <div
              style={{
                position: "relative",
                paddingLeft: 16,
                borderLeft: "1px dashed var(--border-strong)",
                minHeight: 140,
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 74,
                  left: -1,
                  width: 0,
                  height: 0,
                  borderTop: "5px solid transparent",
                  borderBottom: "5px solid transparent",
                  borderLeft: "8px solid var(--accent)",
                }}
              />
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 10,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "var(--accent)",
                  marginBottom: 4,
                }}
              >
                2017 →
              </div>
              <div
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 15,
                  fontWeight: 500,
                  letterSpacing: "-0.01em",
                  color: "var(--text)",
                }}
              >
                enrolled · prime digital academy
              </div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 10,
                  color: "var(--muted)",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  marginBottom: 28,
                }}
              >
                the chapters above pick up here
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default BeforeTechTimeline;
