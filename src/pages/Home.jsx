import { Helmet } from "react-helmet";
import {
  PROFILE,
  SKILLS,
  EXPERIENCE,
  PROJECTS,
  LEARNING,
} from "../utils/portfolioData";
import useIsMobile from "../hooks/useIsMobile";
import Reveal from "../components/Reveal";
import PortraitCard from "../components/PortraitCard";
import ProfileJsonCard from "../components/ProfileJsonCard";
import SiteFooter from "../components/SiteFooter";
import { Section, MobileSection } from "../components/home/Section";
import {
  ExperienceRow,
  MobileExperienceRow,
} from "../components/home/ExperienceRow";
import BeforeTechTimeline from "../components/home/BeforeTechTimeline";
import FeaturedProject from "../components/home/FeaturedProject";
import {
  ProjectCard,
  MobileProjectCard,
} from "../components/home/ProjectCard";
import {
  ctaPrimary,
  linkChip,
  mCtaPrimary,
  mLinkChip,
  th,
  td,
} from "../components/home/styles";

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

const Home = () => {
  const isMobile = useIsMobile(1024);

  return (
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

      {isMobile ? <Mobile /> : <Desktop />}
    </>
  );
};

/* ============== Desktop ============== */
const Desktop = () => (
  <div
    style={{
      background: "var(--bg)",
      color: "var(--text)",
      fontFamily: "var(--font-mono)",
      minHeight: "100%",
      paddingBottom: 80,
      position: "relative",
    }}
  >
    <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 48px" }}>
      <DesktopHero />
      <DesktopAbout />
      <DesktopExperience />
      <DesktopProjects />
      <DesktopLearning />
      <DesktopContact />
    </div>
  </div>
);

const DesktopHero = () => (
  <header
    id="home"
    style={{
      paddingTop: 80,
      paddingBottom: 100,
      display: "grid",
      gridTemplateColumns: "1.3fr 1fr",
      gap: 80,
      alignItems: "end",
      borderBottom: "1px solid var(--border)",
    }}
  >
    <div>
      <Reveal>
        <div className="mono-label" style={{ marginBottom: 24 }}>
          {"// record_id: ar-001"}
        </div>
      </Reveal>
      <Reveal delay={80}>
        <h1
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "clamp(64px, 11vw, 168px)",
            lineHeight: 0.9,
            letterSpacing: "-0.045em",
            fontWeight: 500,
            margin: 0,
          }}
        >
          Antonio Rice<span style={{ color: "var(--accent)" }}>.</span>
        </h1>
      </Reveal>
      <Reveal delay={160}>
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: 19,
            lineHeight: 1.55,
            color: "var(--text-dim)",
            marginTop: 32,
            maxWidth: 560,
            textWrap: "pretty",
          }}
        >
          {PROFILE.blurb}
        </p>
      </Reveal>
      <Reveal delay={240}>
        <div
          style={{
            marginTop: 36,
            display: "flex",
            gap: 12,
            flexWrap: "wrap",
          }}
        >
          <a
            href={PROFILE.links.email}
            className="dossier-cta"
            style={ctaPrimary}
          >
            contact@antoniorice.com <span>→</span>
          </a>
          <a
            href={PROFILE.links.github}
            target="_blank"
            rel="noreferrer"
            className="dossier-hover"
            style={linkChip}
          >
            github
          </a>
          <a
            href={PROFILE.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="dossier-hover"
            style={linkChip}
          >
            linkedin
          </a>
          <a
            href={PROFILE.links.resume}
            target="_blank"
            rel="noreferrer"
            className="dossier-hover"
            style={linkChip}
          >
            resume.pdf
          </a>
        </div>
      </Reveal>
    </div>

    <Reveal delay={200}>
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <PortraitCard />
        <ProfileJsonCard full />
      </div>
    </Reveal>
  </header>
);

const DesktopAbout = () => (
  <Section num="01" title="about" count="1 record" id="about">
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1.2fr",
        gap: 56,
        paddingTop: 16,
      }}
    >
      <Reveal>
        <div
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: 17,
            lineHeight: 1.65,
            color: "var(--text-dim)",
          }}
        >
          {PROFILE.about.map((p, i) => (
            <p
              key={i}
              style={{
                marginTop: i === 0 ? 0 : 18,
                textWrap: "pretty",
              }}
            >
              {p}
            </p>
          ))}
        </div>
      </Reveal>
      <Reveal delay={120}>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            fontFamily: "var(--font-mono)",
            fontSize: 12,
          }}
        >
          <thead>
            <tr style={{ borderBottom: "1px solid var(--border-strong)" }}>
              <th style={th}>category</th>
              <th style={th}>tools</th>
              <th style={{ ...th, textAlign: "right", width: 60 }}>n</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(SKILLS).map(([k, v]) => (
              <tr key={k} style={{ borderBottom: "1px solid var(--border)" }}>
                <td style={{ ...td, color: "var(--accent)", width: 100 }}>
                  {k.toLowerCase()}
                </td>
                <td style={td}>{v.join(" · ")}</td>
                <td
                  style={{
                    ...td,
                    textAlign: "right",
                    color: "var(--muted)",
                  }}
                >
                  {v.length}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Reveal>
    </div>
  </Section>
);

const DesktopExperience = () => (
  <Section
    num="02"
    title="experience"
    count={`${EXPERIENCE.length} records · click to expand`}
    id="experience"
  >
    <div style={{ borderTop: "1px solid var(--border-strong)" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "60px 2fr 2fr 1.5fr 24px",
          gap: 24,
          padding: "10px 0",
          borderBottom: "1px solid var(--border)",
          fontFamily: "var(--font-mono)",
          fontSize: 10,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "var(--muted)",
        }}
      >
        <span>id</span>
        <span>company</span>
        <span>role</span>
        <span>period</span>
        <span></span>
      </div>
      {EXPERIENCE.map((e, i) => (
        <ExperienceRow
          key={`${e.company}-${e.role}-${i}`}
          e={e}
          i={i}
        />
      ))}
    </div>
    <BeforeTechTimeline />
  </Section>
);

const DesktopProjects = () => (
  <Section
    num="03"
    title="projects"
    count={`${PROJECTS.length} records`}
    id="projects"
  >
    <FeaturedProject p={PROJECTS[0]} />
    <div
      style={{
        marginTop: 24,
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: 1,
        background: "var(--border)",
        border: "1px solid var(--border)",
      }}
    >
      {PROJECTS.slice(1).map((p) => (
        <ProjectCard key={p.id} p={p} />
      ))}
    </div>
  </Section>
);

const DesktopLearning = () => (
  <Section
    num="04"
    title="learning"
    count={`${LEARNING.length} records`}
    id="learning"
  >
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 1,
        background: "var(--border)",
        border: "1px solid var(--border)",
      }}
    >
      {LEARNING.map((l) => (
        <Reveal key={l.title}>
          <a
            href={l.href}
            target="_blank"
            rel="noreferrer"
            className="dossier-hover"
            style={{
              background: "var(--bg)",
              padding: "22px 24px",
              minHeight: 100,
              display: "block",
              textDecoration: "none",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 10,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "var(--muted)",
              }}
            >
              {l.year} · {l.issuer}
            </div>
            <div
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 17,
                marginTop: 10,
                color: "var(--text)",
              }}
            >
              {l.title}
            </div>
          </a>
        </Reveal>
      ))}
    </div>
  </Section>
);

const DesktopContact = () => (
  <Section num="05" title="contact" count="just hit reply" id="contact">
    <Reveal>
      <div
        style={{
          padding: "64px 56px",
          border: "1px solid var(--border-strong)",
          background: "var(--bg-soft)",
          textAlign: "center",
        }}
      >
        <div
          className="mono-label"
          style={{ color: "var(--accent)", marginBottom: 24 }}
        >
          $ ./reach-out.sh<span className="cursor"></span>
        </div>
        <h3
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: 72,
            lineHeight: 0.95,
            letterSpacing: "-0.035em",
            fontWeight: 500,
            margin: "0 auto",
            maxWidth: 800,
            textWrap: "balance",
          }}
        >
          Tell me what you&rsquo;re
          <br />
          trying to build
          <span style={{ color: "var(--accent)" }}>.</span>
        </h3>
        <div
          style={{
            marginTop: 48,
            display: "flex",
            gap: 12,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a
            href={PROFILE.links.email}
            className="dossier-cta"
            style={ctaPrimary}
          >
            contact@antoniorice.com <span>→</span>
          </a>
        </div>
      </div>
      <SiteFooter />
    </Reveal>
  </Section>
);

/* ============== Mobile ============== */
const Mobile = () => (
  <div
    style={{
      background: "var(--bg)",
      color: "var(--text)",
      fontFamily: "var(--font-mono)",
      width: "100%",
      minHeight: "100%",
      paddingBottom: 80,
      overflow: "hidden",
    }}
  >
    <div style={{ padding: "0 18px" }}>
      <MobileHero />
      <MobileAbout />
      <MobileExperienceSection />
      <MobileProjects />
      <MobileLearning />
      <MobileContact />
    </div>
  </div>
);

const MobileHero = () => (
  <header
    id="home"
    style={{
      paddingTop: 28,
      paddingBottom: 36,
      borderBottom: "1px solid var(--border)",
    }}
  >
    <Reveal>
      <PortraitCard mobile />
    </Reveal>

    <Reveal delay={80}>
      <div
        className="mono-label"
        style={{ marginTop: 24, marginBottom: 14, fontSize: 10 }}
      >
        {"// record_id: ar-001"}
      </div>
    </Reveal>
    <Reveal delay={120}>
      <h1
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: 64,
          lineHeight: 0.92,
          letterSpacing: "-0.04em",
          fontWeight: 500,
          margin: 0,
        }}
      >
        Antonio
        <br />
        Rice<span style={{ color: "var(--accent)" }}>.</span>
      </h1>
    </Reveal>
    <Reveal delay={180}>
      <p
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: 15,
          lineHeight: 1.5,
          color: "var(--text-dim)",
          marginTop: 18,
          textWrap: "pretty",
        }}
      >
        {PROFILE.blurb}
      </p>
    </Reveal>
    <Reveal delay={240}>
      <div
        style={{
          marginTop: 24,
          display: "flex",
          flexDirection: "column",
          gap: 8,
        }}
      >
        <a
          href={PROFILE.links.email}
          className="dossier-cta"
          style={{ ...mCtaPrimary, justifyContent: "space-between" }}
        >
          <span>contact@antoniorice.com</span>
          <span>→</span>
        </a>
        <div style={{ display: "flex", gap: 8 }}>
          <a
            href={PROFILE.links.github}
            target="_blank"
            rel="noreferrer"
            className="dossier-hover"
            style={{ ...mLinkChip, flex: 1 }}
          >
            github
          </a>
          <a
            href={PROFILE.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="dossier-hover"
            style={{ ...mLinkChip, flex: 1 }}
          >
            linkedin
          </a>
          <a
            href={PROFILE.links.resume}
            target="_blank"
            rel="noreferrer"
            className="dossier-hover"
            style={{ ...mLinkChip, flex: 1 }}
          >
            resume
          </a>
        </div>
      </div>
    </Reveal>

    <Reveal delay={300}>
      <div style={{ marginTop: 28 }}>
        <ProfileJsonCard />
      </div>
    </Reveal>
  </header>
);

const MobileAbout = () => (
  <MobileSection num="01" title="about" count="1 record" id="about">
    <div
      style={{
        fontFamily: "var(--font-sans)",
        fontSize: 15,
        lineHeight: 1.6,
        color: "var(--text-dim)",
      }}
    >
      {PROFILE.about.map((p, i) => (
        <p
          key={i}
          style={{
            marginTop: i === 0 ? 0 : 14,
            textWrap: "pretty",
          }}
        >
          {p}
        </p>
      ))}
    </div>
    <div
      style={{
        marginTop: 24,
        borderTop: "1px solid var(--border-strong)",
      }}
    >
      {Object.entries(SKILLS).map(([k, v]) => (
        <div
          key={k}
          style={{
            padding: "12px 0",
            borderBottom: "1px solid var(--border)",
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontFamily: "var(--font-mono)",
              fontSize: 10,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            <span style={{ color: "var(--accent)" }}>{k.toLowerCase()}</span>
            <span style={{ color: "var(--muted)" }}>{v.length}</span>
          </div>
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              color: "var(--text-dim)",
              lineHeight: 1.5,
            }}
          >
            {v.join(" · ")}
          </div>
        </div>
      ))}
    </div>
  </MobileSection>
);

const MobileExperienceSection = () => (
  <MobileSection
    num="02"
    title="experience"
    count={`${EXPERIENCE.length} · tap to expand`}
    id="experience"
  >
    <div style={{ borderTop: "1px solid var(--border-strong)" }}>
      {EXPERIENCE.map((e, i) => (
        <MobileExperienceRow key={e.company + e.role + i} e={e} i={i} />
      ))}
    </div>
    <BeforeTechTimeline mobile />
  </MobileSection>
);

const MobileProjects = () => (
  <MobileSection
    num="03"
    title="projects"
    count={`${PROJECTS.length} records`}
    id="projects"
  >
    <FeaturedProject p={PROJECTS[0]} mobile />
    <div
      style={{
        marginTop: 16,
        display: "flex",
        flexDirection: "column",
        gap: 1,
        background: "var(--border)",
        border: "1px solid var(--border)",
      }}
    >
      {PROJECTS.slice(1).map((p) => (
        <MobileProjectCard key={p.id} p={p} />
      ))}
    </div>
  </MobileSection>
);

const MobileLearning = () => (
  <MobileSection
    num="04"
    title="learning"
    count={`${LEARNING.length} records`}
    id="learning"
  >
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 1,
        background: "var(--border)",
        border: "1px solid var(--border)",
      }}
    >
      {LEARNING.map((l) => (
        <a
          key={l.title}
          href={l.href}
          target="_blank"
          rel="noreferrer"
          className="dossier-hover"
          style={{
            background: "var(--bg)",
            padding: "16px 18px",
            textDecoration: "none",
            display: "block",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 10,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "var(--muted)",
            }}
          >
            {l.year} · {l.issuer}
          </div>
          <div
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 15,
              marginTop: 6,
              color: "var(--text)",
            }}
          >
            {l.title}
          </div>
        </a>
      ))}
    </div>
  </MobileSection>
);

const MobileContact = () => (
  <MobileSection num="05" title="contact" count="just hit reply" id="contact">
    <div
      style={{
        padding: "36px 22px",
        border: "1px solid var(--border-strong)",
        background: "var(--bg-soft)",
        textAlign: "center",
      }}
    >
      <div
        className="mono-label"
        style={{ color: "var(--accent)", marginBottom: 16, fontSize: 10 }}
      >
        $ ./reach-out.sh<span className="cursor"></span>
      </div>
      <h3
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: 36,
          lineHeight: 0.98,
          letterSpacing: "-0.03em",
          fontWeight: 500,
          margin: 0,
          textWrap: "balance",
        }}
      >
        Tell me what you&rsquo;re trying to build
        <span style={{ color: "var(--accent)" }}>.</span>
      </h3>
      <div
        style={{
          marginTop: 28,
          display: "flex",
          flexDirection: "column",
          gap: 8,
        }}
      >
        <a
          href={PROFILE.links.email}
          className="dossier-cta"
          style={{ ...mCtaPrimary, justifyContent: "space-between" }}
        >
          <span>contact@antoniorice.com</span>
          <span>→</span>
        </a>
      </div>
    </div>
    <SiteFooter marginTop={20} />
  </MobileSection>
);

export default Home;
