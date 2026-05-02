import { Helmet } from "react-helmet";
import {
  PROFILE,
  SKILLS,
  EXPERIENCE,
  PROJECTS,
  LEARNING,
} from "../utils/portfolioData";
import Reveal from "../components/Reveal";
import PortraitCard from "../components/PortraitCard";
import ProfileJsonCard from "../components/ProfileJsonCard";
import SiteFooter from "../components/SiteFooter";
import Section from "../components/home/Section";
import ExperienceRow from "../components/home/ExperienceRow";
import BeforeTechTimeline from "../components/home/BeforeTechTimeline";
import FeaturedProject from "../components/home/FeaturedProject";
import ProjectCard from "../components/home/ProjectCard";

const SEO_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Antonio Rice",
  alternateName: "A. Rice",
  jobTitle: "Full-Stack Software Engineer",
  description:
    "Software Engineer specializing in modern web technologies, cloud computing, and software architecture",
  url: "https://antoniorice.com",
  image: "https://antoniorice.com/assets/images/site-image.webp",
  sameAs: ["https://www.linkedin.com/in/riceantonio"],
};

const Home = () => (
  <>
    <Helmet>
      <title>
        A. Rice | Full-Stack Software Engineer | Web Development & Cloud
        Computing
      </title>
      <meta
        name="description"
        content="Skilled Software Engineer specializing in modern web technologies, cloud computing, and software architecture. Explore my projects and technical insights."
      />
      <meta name="author" content="Antonio Rice" />
      <meta
        name="keywords"
        content="software engineer, web development, cloud computing, full-stack developer, modern web technologies, software architecture"
      />
      <link rel="canonical" href="https://antoniorice.com" />
      <meta
        property="og:title"
        content="A. Rice | Full-Stack Software Engineer | Web Development & Cloud Computing"
      />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Antonio Rice Portfolio" />
      <meta
        property="og:description"
        content="Skilled Software Engineer specializing in modern web technologies, cloud computing, and software architecture. Explore my projects and technical insights."
      />
      <meta
        property="og:image"
        content="https://antoniorice.com/assets/images/site-image.webp"
      />
      <meta property="og:url" content="https://antoniorice.com" />
      <meta property="og:locale" content="en_US" />
      <meta name="robots" content="index, follow" />
      <script type="application/ld+json">{JSON.stringify(SEO_JSON_LD)}</script>
    </Helmet>

    <div className="relative min-h-full bg-canvas pb-20 font-mono text-fg">
      <div className="mx-auto max-w-[1280px] px-[18px] lg:px-12">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <LearningSection />
        <ContactSection />
      </div>
    </div>
  </>
);

/* ============== Hero ============== */

const HeroSection = () => (
  <header
    id="home"
    className="flex flex-col gap-7 border-b border-rule pb-9 pt-7 lg:grid lg:grid-cols-[1.3fr_1fr] lg:items-end lg:gap-20 lg:pb-[100px] lg:pt-20"
  >
    <Reveal className="lg:hidden">
      <PortraitCard />
    </Reveal>
    <HeroIntro />
    <Reveal delay={200} className="flex flex-col gap-4">
      <div className="hidden lg:block">
        <PortraitCard />
      </div>
      <ProfileJsonCard full />
    </Reveal>
  </header>
);

const HeroIntro = () => (
  <div>
    <Reveal>
      <div className="mono-label mb-3.5 text-[10px] lg:mb-6 lg:text-[11px]">
        {"// record_id: ar-001"}
      </div>
    </Reveal>
    <Reveal delay={80}>
      <h1
        className="m-0 font-sans text-[64px] font-medium leading-[0.92] tracking-[-0.04em] lg:leading-[0.9] lg:tracking-[-0.045em]"
        style={{ fontSize: undefined }}
      >
        <span className="lg:hidden">
          Antonio
          <br />
          Rice
        </span>
        <span
          className="hidden lg:inline"
          style={{ fontSize: "clamp(64px, 11vw, 168px)" }}
        >
          Antonio Rice
        </span>
        <span className="text-accent">.</span>
      </h1>
    </Reveal>
    <Reveal delay={160}>
      <p
        className="mt-[18px] max-w-[560px] font-sans text-[15px] leading-[1.5] text-dim lg:mt-8 lg:text-[19px] lg:leading-[1.55]"
        style={{ textWrap: "pretty" }}
      >
        {PROFILE.blurb}
      </p>
    </Reveal>
    <Reveal delay={240}>
      <HeroCtaRow />
    </Reveal>
  </div>
);

const HeroCtaRow = () => (
  <div className="mt-6 flex flex-col gap-2 lg:mt-9 lg:flex-row lg:flex-wrap lg:gap-3">
    <a
      href={PROFILE.links.email}
      className="dossier-cta inline-flex items-center justify-between gap-2 bg-accent px-4 py-3 font-mono text-[11px] font-medium uppercase tracking-[0.06em] text-canvas no-underline lg:px-[18px] lg:text-[12px]"
    >
      <span>contact@antoniorice.com</span>
      <span>→</span>
    </a>
    <div className="flex gap-2 lg:contents">
      <SecondaryChip href={PROFILE.links.github}>github</SecondaryChip>
      <SecondaryChip href={PROFILE.links.linkedin}>linkedin</SecondaryChip>
      <SecondaryChip href={PROFILE.links.resume}>resume.pdf</SecondaryChip>
    </div>
  </div>
);

const SecondaryChip = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="dossier-hover flex-1 border border-rule-strong bg-transparent px-3 py-2.5 text-center font-mono text-[11px] uppercase tracking-[0.06em] text-fg no-underline lg:flex-none lg:px-[18px] lg:py-3 lg:text-[12px]"
  >
    {children}
  </a>
);

/* ============== About ============== */

const AboutSection = () => (
  <Section num="01" title="about" count="1 record" id="about">
    <div className="lg:grid lg:grid-cols-[1fr_1.2fr] lg:gap-14 lg:pt-4">
      <Reveal>
        <AboutParagraphs />
      </Reveal>
      <Reveal delay={120}>
        <SkillsList />
      </Reveal>
    </div>
  </Section>
);

const AboutParagraphs = () => (
  <div className="font-sans text-[15px] leading-[1.6] text-dim lg:text-[17px] lg:leading-[1.65]">
    {PROFILE.about.map((paragraph, paragraphIndex) => (
      <p
        key={paragraph}
        className={paragraphIndex === 0 ? "" : "mt-3.5 lg:mt-[18px]"}
        style={{ textWrap: "pretty" }}
      >
        {paragraph}
      </p>
    ))}
  </div>
);

const SkillsList = () => (
  <>
    {/* Mobile: stacked list */}
    <div className="mt-6 border-t border-rule-strong lg:hidden">
      {Object.entries(SKILLS).map(([category, items]) => (
        <div
          key={category}
          className="flex flex-col gap-1 border-b border-rule py-3"
        >
          <div className="flex justify-between font-mono text-[10px] uppercase tracking-[0.08em]">
            <span className="text-accent">{category.toLowerCase()}</span>
            <span className="text-muted">{items.length}</span>
          </div>
          <div className="font-mono text-[11px] leading-[1.5] text-dim">
            {items.join(" · ")}
          </div>
        </div>
      ))}
    </div>
    {/* Desktop: table */}
    <table className="hidden w-full border-collapse font-mono text-[12px] lg:table">
      <thead>
        <tr className="border-b border-rule-strong">
          <th className="py-2.5 text-left font-mono text-[10px] font-normal uppercase tracking-[0.08em] text-muted">
            category
          </th>
          <th className="py-2.5 text-left font-mono text-[10px] font-normal uppercase tracking-[0.08em] text-muted">
            tools
          </th>
          <th className="w-[60px] py-2.5 text-right font-mono text-[10px] font-normal uppercase tracking-[0.08em] text-muted">
            n
          </th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(SKILLS).map(([category, items]) => (
          <tr key={category} className="border-b border-rule">
            <td className="w-[100px] py-3 align-middle text-accent">
              {category.toLowerCase()}
            </td>
            <td className="py-3 align-middle text-dim">
              {items.join(" · ")}
            </td>
            <td className="py-3 text-right align-middle text-muted">
              {items.length}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </>
);

/* ============== Experience ============== */

const ExperienceSection = () => (
  <Section
    num="02"
    title="experience"
    count={`${EXPERIENCE.length} records · click to expand`}
    id="experience"
  >
    <div>
      <div className="hidden grid-cols-[60px_2fr_2fr_1.5fr_24px] gap-6 border-b border-rule px-0 py-2.5 font-mono text-[10px] uppercase tracking-[0.08em] text-muted lg:grid">
        <span>id</span>
        <span>company</span>
        <span>role</span>
        <span>period</span>
        <span></span>
      </div>
      {EXPERIENCE.map((experience, experienceIndex) => (
        <ExperienceRow
          key={`${experience.company}-${experience.role}`}
          experience={experience}
          index={experienceIndex}
        />
      ))}
    </div>
    <BeforeTechTimeline />
  </Section>
);

/* ============== Projects ============== */

const ProjectsSection = () => (
  <Section
    num="03"
    title="projects"
    count={`${PROJECTS.length} records`}
    id="projects"
  >
    <FeaturedProject project={PROJECTS[0]} />
    <div className="mt-4 flex flex-col gap-px border border-rule bg-rule lg:mt-6 lg:grid lg:grid-cols-2">
      {PROJECTS.slice(1).map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  </Section>
);

/* ============== Learning ============== */

const LearningSection = () => (
  <Section
    num="04"
    title="learning"
    count={`${LEARNING.length} records`}
    id="learning"
  >
    <div className="flex flex-col gap-px border border-rule bg-rule lg:grid lg:grid-cols-3">
      {LEARNING.map((learning) => (
        <LearningCard key={learning.title} learning={learning} />
      ))}
    </div>
  </Section>
);

const LearningCard = ({ learning }) => {
  const card = (
    <a
      href={learning.href}
      target="_blank"
      rel="noreferrer"
      className="dossier-hover block bg-canvas p-[16px_18px] no-underline lg:min-h-[100px] lg:p-[22px_24px]"
    >
      <div className="font-mono text-[10px] uppercase tracking-[0.08em] text-muted">
        {learning.year} · {learning.issuer}
      </div>
      <div className="mt-1.5 font-sans text-[15px] text-fg lg:mt-2.5 lg:text-[17px]">
        {learning.title}
      </div>
    </a>
  );
  return <Reveal>{card}</Reveal>;
};

/* ============== Contact ============== */

const ContactSection = () => (
  <Section num="05" title="contact" count="just hit reply" id="contact">
    <Reveal>
      <div className="border border-rule-strong bg-card p-[36px_22px] text-center lg:p-[64px_56px]">
        <div className="mono-label mb-4 text-[10px] text-accent lg:mb-6 lg:text-[11px]">
          $ ./reach-out.sh<span aria-hidden="true" className="cursor" />
        </div>
        <h3
          className="m-0 mx-auto max-w-[800px] font-sans text-[36px] font-medium leading-[0.98] tracking-[-0.03em] lg:text-[72px] lg:leading-[0.95] lg:tracking-[-0.035em]"
          style={{ textWrap: "balance" }}
        >
          <span className="lg:hidden">
            Tell me what you&rsquo;re trying to build
          </span>
          <span className="hidden lg:inline">
            Tell me what you&rsquo;re
            <br />
            trying to build
          </span>
          <span className="text-accent">.</span>
        </h3>
        <div className="mt-7 flex flex-col gap-2 lg:mt-12 lg:flex-row lg:flex-wrap lg:justify-center lg:gap-3">
          <a
            href={PROFILE.links.email}
            className="dossier-cta inline-flex items-center justify-between gap-2 bg-accent px-4 py-3 font-mono text-[11px] font-medium uppercase tracking-[0.06em] text-canvas no-underline lg:px-[18px] lg:text-[12px]"
          >
            <span>contact@antoniorice.com</span>
            <span>→</span>
          </a>
        </div>
      </div>
      <SiteFooter />
    </Reveal>
  </Section>
);

export default Home;
