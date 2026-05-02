import Reveal from "../Reveal";
import TagPill from "./TagPill";

const ProjectCard = ({ project }) => (
  <Reveal>
    <a
      href={project.href}
      target="_blank"
      rel="noreferrer"
      className="dossier-hover flex cursor-pointer flex-col gap-2.5 bg-canvas p-[18px] text-fg no-underline lg:min-h-[280px] lg:gap-3.5 lg:p-[28px_26px]"
    >
      <div className="flex justify-between">
        <span className="mono-label text-[10px] lg:text-[11px]">
          {project.id} · {project.year}
        </span>
        <span className="text-muted">→</span>
      </div>
      <h4 className="m-0 font-sans text-[19px] font-medium tracking-[-0.015em] lg:text-[24px]">
        {project.title}
      </h4>
      <p className="m-0 font-sans text-[13px] leading-[1.5] text-dim lg:flex-1 lg:text-[14px] lg:leading-[1.55]">
        {project.blurb}
      </p>
      <div className="flex flex-wrap gap-[5px] lg:gap-1.5">
        {project.tags.map((tag) => (
          <TagPill key={tag}>{tag}</TagPill>
        ))}
      </div>
    </a>
  </Reveal>
);

export default ProjectCard;
