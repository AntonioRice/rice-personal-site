import Reveal from "../Reveal";
import TagPill from "./TagPill";

const FeaturedProject = ({ project }) => (
  <Reveal>
    <div className="flex flex-col border border-rule bg-card lg:grid lg:grid-cols-[1fr_1.2fr]">
      <ProjectImagePanel project={project} />
      <ProjectDetailsPanel project={project} />
    </div>
  </Reveal>
);

const ProjectImagePanel = ({ project }) => (
  <div className="relative order-first aspect-[16/10] overflow-hidden bg-canvas lg:order-last lg:aspect-auto lg:h-[460px]">
    <img
      src={project.image}
      alt={project.title}
      className="h-full w-full object-cover"
      style={{ filter: "saturate(0.85)" }}
    />
    <div className="absolute bottom-2.5 left-2.5 border border-rule-strong bg-black/70 px-[7px] py-1 font-mono text-[9px] uppercase tracking-[0.08em] text-fg lg:bottom-3 lg:left-3 lg:px-[9px] lg:py-[5px] lg:text-[10px]">
      {`// ${project.title}`}
    </div>
  </div>
);

const ProjectDetailsPanel = ({ project }) => (
  <div className="flex flex-col gap-3.5 p-5 lg:gap-0 lg:justify-between lg:border-r lg:border-rule lg:p-[44px_40px]">
    <ProjectHeading project={project} />
    <ProjectMetricsRow project={project} />
  </div>
);

const ProjectHeading = ({ project }) => (
  <div className="flex flex-col gap-3.5 lg:gap-0">
    <div className="font-mono text-[10px] uppercase tracking-[0.08em] text-accent lg:mb-[18px] lg:text-[11px]">
      {`// featured · ${project.year}`}
    </div>
    <h3 className="m-0 font-sans text-[30px] font-medium leading-none tracking-[-0.025em] lg:text-[44px]">
      {project.title}
      <span className="hidden text-accent lg:inline">.</span>
    </h3>
    <p className="m-0 font-sans text-[14px] leading-[1.55] text-dim lg:mt-[18px] lg:max-w-[420px] lg:text-[15px] lg:leading-[1.6]">
      {project.blurb}
    </p>
    <div className="flex flex-wrap gap-[5px] lg:mt-[22px] lg:gap-1.5">
      {project.tags.map((tag) => (
        <TagPill key={tag}>{tag}</TagPill>
      ))}
    </div>
  </div>
);

const ProjectMetricsRow = ({ project }) => (
  <div className="flex items-end gap-6 border-t border-dashed border-rule-strong pt-3 lg:mt-10 lg:gap-10 lg:pt-6">
    {project.metric && (
      <Metric value={project.metric.k} label={project.metric.v} />
    )}
    {project.metric2 && (
      <Metric value={project.metric2.k} label={project.metric2.v} />
    )}
    <a
      href={project.href}
      target="_blank"
      rel="noreferrer"
      className="dossier-hover ml-auto border border-rule-strong px-2.5 py-[7px] font-mono text-[10px] uppercase tracking-[0.06em] text-fg no-underline lg:px-3 lg:py-2 lg:text-[11px]"
    >
      visit →
    </a>
  </div>
);

const Metric = ({ value, label }) => (
  <div>
    <div className="font-sans text-[22px] tracking-[-0.02em] lg:text-[32px]">
      {value}
    </div>
    <div className="mt-0.5 font-mono text-[9px] uppercase tracking-[0.08em] text-muted lg:mt-1 lg:text-[11px]">
      {label}
    </div>
  </div>
);

export default FeaturedProject;
