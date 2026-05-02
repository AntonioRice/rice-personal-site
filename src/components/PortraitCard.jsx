import { Link } from "react-router-dom";
import { PROFILE } from "../utils/portfolioData";
import CornerTick from "./CornerTick";

const PortraitCard = () => (
  <div className="relative overflow-hidden border border-rule-strong bg-card">
    <div className="flex justify-between border-b border-rule px-3 py-2 font-mono text-[9px] uppercase tracking-[0.08em] text-muted lg:px-3.5 lg:py-2.5 lg:text-[10px]">
      <span>portrait.jpg</span>
      <span>1200 × 1200</span>
    </div>
    <div className="relative aspect-square bg-canvas">
      <img
        src={PROFILE.avatar}
        alt="Antonio Rice"
        className="block h-full w-full object-cover"
        style={{ filter: "saturate(0.92) contrast(1.02)" }}
      />
      <CornerTick pos="tl" />
      <CornerTick pos="tr" />
      <CornerTick pos="bl" />
      <CornerTick pos="br" />
      <div
        className="absolute bottom-2.5 left-2.5 border border-rule-strong bg-black/70 px-[7px] py-[4px] font-mono text-[9px] uppercase tracking-[0.08em] text-fg lg:bottom-3 lg:left-3 lg:px-[9px] lg:py-[5px] lg:text-[10px]"
      >
        {"// subj: a.rice"}
      </div>
      <Link
        to="/photography"
        className="dossier-photography-pill absolute bottom-2.5 right-2.5 border border-accent-line bg-black/70 px-[7px] py-[4px] font-mono text-[9px] uppercase tracking-[0.08em] text-accent no-underline lg:bottom-3 lg:right-3 lg:px-[9px] lg:py-[5px] lg:text-[10px]"
      >
        photography →
      </Link>
    </div>
  </div>
);

export default PortraitCard;
