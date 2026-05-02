import { useCallback, useId, useState } from "react";
import { motion } from "framer-motion";
import Reveal from "../Reveal";
import TagPill from "./TagPill";

const animatedExpand = (open) => ({
  initial: false,
  animate: { height: open ? "auto" : 0, opacity: open ? 1 : 0 },
  transition: {
    height: { duration: 0.45, ease: [0.2, 0.7, 0.2, 1] },
    opacity: { duration: open ? 0.35 : 0.15, delay: open ? 0.1 : 0 },
  },
  style: { overflow: "hidden" },
});

const formatChapterId = (index) => `e${String(index + 1).padStart(2, "0")}`;
const formatChapterLabel = (index) =>
  `Ch. ${String(index + 1).padStart(2, "0")}`;

const ExperienceRow = ({ experience, index }) => {
  const [open, setOpen] = useState(index === 0);
  const panelId = `experience-panel-${useId()}`;
  const handleToggle = useCallback(
    () => setOpen((current) => !current),
    [],
  );

  return (
    <Reveal>
      <div className="border-b border-rule">
        <CollapsedRow
          experience={experience}
          index={index}
          open={open}
          panelId={panelId}
          onClick={handleToggle}
        />
        <motion.div
          id={panelId}
          role="region"
          aria-hidden={!open}
          {...animatedExpand(open)}
        >
          {experience.promotions ? (
            <ExperienceLadder experience={experience} index={index} />
          ) : (
            <ExperienceEditorial experience={experience} index={index} />
          )}
        </motion.div>
      </div>
    </Reveal>
  );
};

/* -------- Collapsed row -------- */

const CollapsedRow = ({ experience, index, open, panelId, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    aria-expanded={open}
    aria-controls={panelId}
    className="dossier-hover grid w-full cursor-pointer items-center gap-2.5 border-0 bg-transparent p-[16px_12px] text-left font-mono text-[12px] text-fg lg:gap-6 lg:p-[20px_16px] lg:text-[13px]"
    style={{ gridTemplateColumns: "30px 1fr 18px" }}
  >
    <span className="text-[10px] text-muted lg:text-[13px]">
      {formatChapterId(index)}
    </span>
    {/* Mobile: stacked column. Desktop: 4-up via inner sub-grid */}
    <div className="flex flex-col gap-1 lg:grid lg:grid-cols-[2fr_2fr_1.5fr] lg:items-center lg:gap-6">
      <span className="font-sans text-[17px] tracking-[-0.01em] lg:text-[22px]">
        {experience.company}
      </span>
      <span className="text-[11px] text-dim lg:text-[13px]">
        {experience.role}
      </span>
      <span className="text-[10px] tracking-[0.04em] text-muted lg:text-[13px] lg:tracking-normal">
        {experience.period}
      </span>
    </div>
    <span
      aria-hidden="true"
      className="inline-block text-right text-accent transition-transform duration-200"
      style={{ transform: open ? "rotate(90deg)" : "none" }}
    >
      →
    </span>
  </button>
);

/* -------- Expanded layouts -------- */

const ExperienceEditorial = ({ experience, index }) => (
  <article className="flex flex-col gap-4 border-t border-dashed border-rule-strong p-[12px_0_32px_0] lg:grid lg:grid-cols-[100px_1fr_1fr] lg:gap-10 lg:p-[20px_0_48px_0]">
    <ChapterMeta
      index={index}
      period={experience.period}
      location={experience.location}
    />
    <div>
      <div className="mono-label mb-1.5 text-[10px] lg:mb-2">
        {experience.role}
      </div>
      <StackTags stack={experience.stack} className="mt-3 lg:mt-[18px]" />
    </div>
    <BulletsList bullets={experience.bullets} />
  </article>
);

const ExperienceLadder = ({ experience, index }) => (
  <article className="flex flex-col gap-4 border-t border-dashed border-rule-strong p-[12px_0_32px_0] lg:block lg:p-[20px_0_48px_0]">
    <header className="lg:mb-8 lg:grid lg:grid-cols-[100px_1fr] lg:gap-10">
      <ChapterMeta
        index={index}
        period={experience.period}
        location={experience.location}
      />
      {experience.summary && <SummaryParagraph summary={experience.summary} />}
    </header>
    <PromotionRail promotions={experience.promotions} />
  </article>
);

/* -------- Promotion rail -------- */

const PromotionRail = ({ promotions }) => (
  <div className="relative pl-[18px] pt-1 lg:pl-[140px] lg:pt-0">
    <div className="absolute bottom-1.5 left-0 top-2.5 w-px bg-rule-strong lg:left-[107px] lg:top-1.5" />
    {promotions.map((promotion, promotionIndex) => (
      <PromotionItem
        key={`${promotion.role}-${promotion.period}`}
        promotion={promotion}
        last={promotionIndex === promotions.length - 1}
      />
    ))}
  </div>
);

const PromotionItem = ({ promotion, last }) => (
  <div
    className={`relative ${last ? "" : "pb-6"} lg:grid lg:grid-cols-[1fr_1.4fr] lg:gap-8 lg:pb-8`}
  >
    <PromotionDot />
    <div>
      <h4 className="m-0 font-serif text-[20px] font-normal italic leading-[1.1] tracking-[-0.015em] lg:text-[24px]">
        {promotion.role}
      </h4>
      <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.06em] text-muted lg:mt-1.5 lg:text-[11px]">
        {promotion.period}
      </div>
      <StackTags stack={promotion.stack} className="hidden lg:flex lg:mt-3.5" />
    </div>
    <div className="mt-3 lg:mt-0">
      <BulletsList bullets={promotion.bullets} />
    </div>
    <StackTags stack={promotion.stack} className="mt-2.5 lg:hidden" />
  </div>
);

const PromotionDot = () => (
  <>
    <div
      className="absolute -left-[22px] top-1.5 h-[7px] w-[7px] bg-accent lg:hidden"
      style={{ boxShadow: "0 0 0 2px var(--bg)" }}
    />
    <div
      className="absolute hidden h-[9px] w-[9px] bg-accent lg:block"
      style={{ left: -36, top: 6, boxShadow: "0 0 0 2px var(--bg), 0 0 0 3px var(--accent)" }}
    />
  </>
);

/* -------- Shared atoms -------- */

const SummaryParagraph = ({ summary }) => (
  <p className="m-0 font-sans text-[14px] leading-[1.55] text-dim lg:max-w-[720px] lg:text-[15.5px] lg:leading-[1.6]">
    {summary}
  </p>
);

const ChapterMeta = ({ index, period, location }) => (
  <>
    {/* Mobile: one-line strip */}
    <div className="flex justify-between pt-3.5 font-mono text-[10px] uppercase tracking-[0.06em] text-muted lg:hidden">
      <span>{formatChapterLabel(index)}</span>
      <span>{location}</span>
    </div>
    {/* Desktop: stacked metadata column */}
    <div className="hidden lg:block">
      <div className="font-mono text-[11px] tracking-[0.08em] text-muted">
        {formatChapterLabel(index)}
      </div>
      <div className="mt-2 font-mono text-[11px] text-muted">{period}</div>
      <div className="mt-2 font-mono text-[11px] text-muted">{location}</div>
    </div>
  </>
);

const BulletsList = ({ bullets }) => {
  if (!bullets || bullets.length === 0) return null;
  return (
    <ul className="m-0 list-none p-0 font-sans text-[14px] leading-[1.55] text-dim lg:text-[15.5px] lg:leading-[1.6]">
      {bullets.map((bullet) => (
        <li
          key={bullet}
          className="relative mb-2.5 pl-[18px] lg:pl-[22px]"
          style={{ textWrap: "pretty" }}
        >
          <span className="absolute left-0 top-0 font-mono text-[11px] text-accent lg:text-[12px]">
            ›
          </span>
          {bullet}
        </li>
      ))}
    </ul>
  );
};

const StackTags = ({ stack, className = "" }) => {
  if (!stack || stack.length === 0) return null;
  return (
    <div className={`flex flex-wrap gap-[5px] lg:gap-1.5 ${className}`}>
      {stack.map((tech) => (
        <TagPill key={tech}>{tech}</TagPill>
      ))}
    </div>
  );
};

export default ExperienceRow;
