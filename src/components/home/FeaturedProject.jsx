import Reveal from "../Reveal";
import { tagPill, mTagPill, smallChip, mSmallChip } from "./styles";

const FeaturedProject = ({ p, mobile }) => {
  if (mobile) {
    return (
      <div
        style={{
          border: "1px solid var(--border)",
          background: "var(--bg-soft)",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            aspectRatio: "16 / 10",
            background: "#0a0a0a",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <img
            src={p.image}
            alt={p.title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "saturate(0.85)",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: 10,
              bottom: 10,
              fontFamily: "var(--font-mono)",
              fontSize: 9,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "var(--text)",
              background: "rgba(0,0,0,0.7)",
              padding: "4px 7px",
              border: "1px solid var(--border-strong)",
            }}
          >
            {`// ${p.title}`}
          </div>
        </div>
        <div
          style={{
            padding: 20,
            display: "flex",
            flexDirection: "column",
            gap: 14,
          }}
        >
          <div
            className="mono-label"
            style={{ color: "var(--accent)", fontSize: 10 }}
          >
            {`// featured · ${p.year}`}
          </div>
          <h3
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 30,
              lineHeight: 1,
              letterSpacing: "-0.025em",
              fontWeight: 500,
              margin: 0,
            }}
          >
            {p.title}
          </h3>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 14,
              color: "var(--text-dim)",
              lineHeight: 1.55,
              margin: 0,
              textWrap: "pretty",
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
          <div
            style={{
              display: "flex",
              gap: 24,
              paddingTop: 12,
              borderTop: "1px dashed var(--border-strong)",
              alignItems: "end",
            }}
          >
            {p.metric && (
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 22,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {p.metric.k}
                </div>
                <div
                  className="mono-label"
                  style={{ marginTop: 2, fontSize: 9 }}
                >
                  {p.metric.v}
                </div>
              </div>
            )}
            {p.metric2 && (
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 22,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {p.metric2.k}
                </div>
                <div
                  className="mono-label"
                  style={{ marginTop: 2, fontSize: 9 }}
                >
                  {p.metric2.v}
                </div>
              </div>
            )}
            <a
              href={p.href}
              target="_blank"
              rel="noreferrer"
              className="dossier-hover"
              style={{ ...mSmallChip, marginLeft: "auto" }}
            >
              visit →
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Reveal>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.2fr",
          gap: 0,
          border: "1px solid var(--border)",
          background: "var(--bg-soft)",
        }}
      >
        <div
          style={{
            padding: "44px 40px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            borderRight: "1px solid var(--border)",
          }}
        >
          <div>
            <div
              className="mono-label"
              style={{ marginBottom: 18, color: "var(--accent)" }}
            >
              {`// featured · ${p.year}`}
            </div>
            <h3
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 44,
                lineHeight: 1,
                letterSpacing: "-0.025em",
                fontWeight: 500,
                margin: 0,
              }}
            >
              {p.title}
              <span style={{ color: "var(--accent)" }}>.</span>
            </h3>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 15,
                color: "var(--text-dim)",
                lineHeight: 1.6,
                marginTop: 18,
                maxWidth: 420,
                textWrap: "pretty",
              }}
            >
              {p.blurb}
            </p>
            <div
              style={{
                marginTop: 22,
                display: "flex",
                flexWrap: "wrap",
                gap: 6,
              }}
            >
              {p.tags.map((t) => (
                <span key={t} style={tagPill}>
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              gap: 40,
              marginTop: 40,
              paddingTop: 24,
              borderTop: "1px dashed var(--border-strong)",
              alignItems: "end",
            }}
          >
            {p.metric && (
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 32,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {p.metric.k}
                </div>
                <div className="mono-label" style={{ marginTop: 4 }}>
                  {p.metric.v}
                </div>
              </div>
            )}
            {p.metric2 && (
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 32,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {p.metric2.k}
                </div>
                <div className="mono-label" style={{ marginTop: 4 }}>
                  {p.metric2.v}
                </div>
              </div>
            )}
            <a
              href={p.href}
              target="_blank"
              rel="noreferrer"
              className="dossier-hover"
              style={{ ...smallChip, marginLeft: "auto" }}
            >
              visit →
            </a>
          </div>
        </div>
        <div
          style={{
            height: 460,
            background: "#0a0a0a",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <img
            src={p.image}
            alt={p.title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "saturate(0.85)",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: 12,
              bottom: 12,
              fontFamily: "var(--font-mono)",
              fontSize: 10,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "var(--text)",
              background: "rgba(0,0,0,0.7)",
              padding: "5px 9px",
              border: "1px solid var(--border-strong)",
            }}
          >
            {`// ${p.title}`}
          </div>
        </div>
      </div>
    </Reveal>
  );
};

export default FeaturedProject;
