import { Link } from "react-router-dom";
import { PROFILE } from "../utils/portfolioData";
import CornerTick from "./CornerTick";

const PortraitCard = ({ mobile }) => (
  <div
    style={{
      border: "1px solid var(--border-strong)",
      background: "var(--bg-soft)",
      position: "relative",
      overflow: "hidden",
    }}
  >
    <div
      style={{
        padding: mobile ? "8px 12px" : "10px 14px",
        borderBottom: "1px solid var(--border)",
        display: "flex",
        justifyContent: "space-between",
        color: "var(--muted)",
        fontFamily: "var(--font-mono)",
        fontSize: mobile ? 9 : 10,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
      }}
    >
      <span>portrait.jpg</span>
      <span>1200 × 1200</span>
    </div>
    <div
      style={{
        position: "relative",
        aspectRatio: "1 / 1",
        background: "#0a0a0a",
      }}
    >
      <img
        src={PROFILE.avatar}
        alt="Antonio Rice"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          filter: "saturate(0.92) contrast(1.02)",
          display: "block",
        }}
      />
      <CornerTick pos="tl" mobile={mobile} />
      <CornerTick pos="tr" mobile={mobile} />
      <CornerTick pos="bl" mobile={mobile} />
      <CornerTick pos="br" mobile={mobile} />
      <div
        style={{
          position: "absolute",
          left: mobile ? 10 : 12,
          bottom: mobile ? 10 : 12,
          fontFamily: "var(--font-mono)",
          fontSize: mobile ? 9 : 10,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "var(--text)",
          background: "rgba(0,0,0,0.7)",
          padding: mobile ? "4px 7px" : "5px 9px",
          border: "1px solid var(--border-strong)",
        }}
      >
        {"// subj: a.rice"}
      </div>
      <Link
        to="/photography"
        className="dossier-photography-pill"
        style={{
          position: "absolute",
          right: mobile ? 10 : 12,
          bottom: mobile ? 10 : 12,
          fontFamily: "var(--font-mono)",
          fontSize: mobile ? 9 : 10,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "var(--accent)",
          background: "rgba(0,0,0,0.7)",
          padding: mobile ? "4px 7px" : "5px 9px",
          border: "1px solid var(--accent-line)",
          textDecoration: "none",
        }}
      >
        photography →
      </Link>
    </div>
  </div>
);

export default PortraitCard;
