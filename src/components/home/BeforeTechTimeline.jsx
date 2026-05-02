import { useCallback, useId, useState } from "react";
import { motion } from "framer-motion";
import Reveal from "../Reveal";
import { BEFORE_TECH } from "../../utils/portfolioData";

const TERMINAL_ENTRY = {
  period: "2017 →",
  title: "new beginnings",
  caption: "the chapters above pick up here",
};

const BeforeTechTimeline = () => (
  <>
    <MobileTimeline />
    <DesktopTimeline />
  </>
);

/* ============== Mobile ============== */

const MobileTimeline = () => {
  const [open, setOpen] = useState(false);
  const panelId = `before-tech-panel-${useId()}`;
  const handleToggle = useCallback(
    () => setOpen((current) => !current),
    [],
  );

  return (
    <div className="mt-8 lg:hidden">
      <MobileToggle open={open} panelId={panelId} onClick={handleToggle} />
      <motion.div
        id={panelId}
        role="region"
        aria-hidden={!open}
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{
          height: { duration: 0.45, ease: [0.2, 0.7, 0.2, 1] },
          opacity: { duration: open ? 0.35 : 0.15, delay: open ? 0.1 : 0 },
        }}
        className="overflow-hidden"
      >
        <VerticalRail entries={BEFORE_TECH} />
      </motion.div>
    </div>
  );
};

const MobileToggle = ({ open, panelId, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    aria-expanded={open}
    aria-controls={panelId}
    className="dossier-hover flex w-full cursor-pointer flex-col gap-1.5 border-0 border-b border-t border-rule-strong border-b-dashed bg-transparent p-[16px_14px] text-left text-fg"
  >
    <div className="flex w-full items-center justify-between font-mono text-[10px] uppercase tracking-[0.08em]">
      <span className="text-accent">{"// before tech"}</span>
      <span className="inline-flex items-center gap-1.5 text-muted">
        {open ? "collapse" : "expand"}
        <span
          aria-hidden="true"
          className="inline-block text-[14px] text-accent transition-transform duration-200"
          style={{ transform: open ? "rotate(90deg)" : "none" }}
        >
          →
        </span>
      </span>
    </div>
    <span className="font-sans text-[18px] font-medium tracking-[-0.015em] text-fg">
      the long way around<span className="text-accent">.</span>
    </span>
  </button>
);

const VerticalRail = ({ entries }) => (
  <div className="relative pb-2 pl-[18px] pt-[18px]">
    <div className="absolute bottom-0 left-0 top-[18px] w-px bg-rule-strong" />
    {entries.map((entry) => (
      <VerticalEntry key={entry.where + entry.period} entry={entry} />
    ))}
    <VerticalTerminal />
  </div>
);

const VerticalEntry = ({ entry }) => (
  <div className="relative pb-[18px]">
    <EntryPeriod>{entry.period}</EntryPeriod>
    <EntryTitle>{entry.title}</EntryTitle>
    <EntryWhere>{entry.where}</EntryWhere>
    <EntryNote>{entry.note}</EntryNote>
  </div>
);

const VerticalTerminal = () => (
  <div className="relative pb-1.5">
    <RailArrow top={2} offsetX={-25} />
    <EntryPeriod accent>{TERMINAL_ENTRY.period}</EntryPeriod>
    <EntryTitle>{TERMINAL_ENTRY.title}</EntryTitle>
    <div className="font-mono text-[9px] uppercase tracking-[0.06em] text-muted">
      {TERMINAL_ENTRY.caption}
    </div>
  </div>
);

/* ============== Desktop ============== */

const DesktopTimeline = () => (
  <div className="mt-14 hidden lg:block">
    <Reveal>
      <DesktopHeading />
    </Reveal>
    <HorizontalRail entries={BEFORE_TECH} />
  </div>
);

const DesktopHeading = () => (
  <div className="flex items-baseline gap-4 border-b border-dashed border-rule-strong pb-[18px]">
    <span className="font-mono text-[11px] text-accent">
      {"// before tech"}
    </span>
    <span className="font-sans text-[22px] font-medium tracking-[-0.015em]">
      the long way around<span className="text-accent">.</span>
    </span>
    <span className="ml-auto font-mono text-[10px] uppercase tracking-[0.08em] text-muted">
      archive · pre-2017
    </span>
  </div>
);

const HorizontalRail = ({ entries }) => {
  const reversed = entries.slice().reverse();
  return (
    <div className="relative pb-2 pt-6">
      <div
        className="absolute left-0 right-0 h-px bg-rule-strong"
        style={{ top: 80 }}
      />
      <div
        className="grid"
        style={{
          gridTemplateColumns: `repeat(${reversed.length + 1}, 1fr)`,
        }}
      >
        {reversed.map((entry, entryIndex) => (
          <Reveal key={entry.where + entry.period} delay={entryIndex * 80}>
            <HorizontalEntry entry={entry} />
          </Reveal>
        ))}
        <Reveal delay={reversed.length * 80}>
          <HorizontalTerminal />
        </Reveal>
      </div>
    </div>
  );
};

const HorizontalEntry = ({ entry }) => (
  <div className="relative pr-4">
    <EntryPeriod>{entry.period}</EntryPeriod>
    <EntryTitle>{entry.title}</EntryTitle>
    <EntryWhere style={{ marginTop: 20, marginBottom: 5 }}>
      {entry.where}
    </EntryWhere>
    <EntryNote style={{ paddingTop: 18 }}>{entry.note}</EntryNote>
  </div>
);

const HorizontalTerminal = () => (
  <div
    className="relative border-l border-dashed border-rule-strong pl-4"
    style={{ minHeight: 140 }}
  >
    <RailArrow top={74} offsetX={-1} />
    <EntryPeriod accent>{TERMINAL_ENTRY.period}</EntryPeriod>
    <EntryTitle>{TERMINAL_ENTRY.title}</EntryTitle>
    <div className="mb-7 mt-5 font-mono text-[10px] uppercase tracking-[0.06em] text-muted">
      {TERMINAL_ENTRY.caption}
    </div>
  </div>
);

/* ============== Shared atoms ============== */

const RailArrow = ({ top, offsetX = -25 }) => (
  <div
    className="absolute h-0 w-0"
    style={{
      top,
      left: offsetX,
      borderTop: "5px solid transparent",
      borderBottom: "5px solid transparent",
      borderLeft: "8px solid var(--accent)",
    }}
  />
);

const EntryPeriod = ({ children, accent }) => (
  <div
    className={`mb-1 font-mono text-[10px] uppercase tracking-[0.08em] ${
      accent ? "text-accent" : "text-muted"
    }`}
  >
    {children}
  </div>
);

const EntryTitle = ({ children }) => (
  <div className="min-h-[22px] font-sans text-[15px] font-medium tracking-[-0.01em] text-fg">
    {children}
  </div>
);

const EntryWhere = ({ children, style }) => (
  <div
    className="mb-2 mt-2 font-mono text-[10px] uppercase tracking-[0.06em] text-accent"
    style={style}
  >
    {children}
  </div>
);

const EntryNote = ({ children, style }) => (
  <div
    className="font-sans text-[13px] leading-[1.55] text-dim"
    style={{ textWrap: "pretty", ...style }}
  >
    {children}
  </div>
);

export default BeforeTechTimeline;
