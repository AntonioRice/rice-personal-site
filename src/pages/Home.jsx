import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import {
  PROFILE,
  SKILLS,
  EXPERIENCE,
  PROJECTS,
  LEARNING,
  BEFORE_TECH,
} from "../utils/portfolioData";
import useIsMobile from "../hooks/useIsMobile";

const reveal = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0 },
};

function Reveal({ children, delay = 0, amount = 0.15, className, style }) {
  return (
    <motion.div
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      transition={{ duration: 0.7, ease: [0.2, 0.7, 0.2, 1], delay: delay / 1000 }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

const Home = () => {
  const isMobile = useIsMobile(1024);

  useEffect(() => {
    document.body.classList.add("dossier");
    return () => document.body.classList.remove("dossier");
  }, []);

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
        <script type="application/ld+json">
          {`
      {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Antonio Rice",
        "alternateName": "A. Rice",
        "jobTitle": "Full-Stack Software Engineer",
        "description": "Software Engineer specializing in modern web technologies, cloud computing, and software architecture",
        "url": "https://antoniorice.com",
        "image": "https://antoniorice.com/assets/images/site-image.webp",
        "sameAs": [
          "https://www.linkedin.com/in/riceantonio"
        ]
      }
    `}
        </script>
      </Helmet>

      {isMobile ? <Mobile /> : <Desktop />}
    </>
  );
};

/* ============== Desktop ============== */
function Desktop() {
  return (
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
      <TopBar />

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 48px" }}>
        {/* Hero */}
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
                <a href={PROFILE.links.email} style={ctaPrimary}>
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

        {/* About */}
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
                    <tr
                      key={k}
                      style={{ borderBottom: "1px solid var(--border)" }}
                    >
                      <td
                        style={{
                          ...td,
                          color: "var(--accent)",
                          width: 100,
                        }}
                      >
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

        {/* Experience */}
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
              <ExpRow key={e.company + "-" + e.role + "-" + i} e={e} i={i} />
            ))}
          </div>
          <BeforeTechTimeline />
        </Section>

        {/* Projects */}
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

        {/* Learning */}
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

        {/* Contact */}
        <Section
          num="05"
          title="contact"
          count="just hit reply"
          id="contact"
        >
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
                <a href={PROFILE.links.email} className="dossier-cta" style={ctaPrimary}>
                  contact@antoniorice.com <span>→</span>
                </a>
              </div>
            </div>
            <div
              style={{
                marginTop: 28,
                display: "flex",
                justifyContent: "space-between",
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "var(--muted)",
              }}
            >
              <span>© 2026 — minneapolis, mn</span>
              <span>last deploy: 4d ago</span>
              <span>uptime 99.97%</span>
            </div>
          </Reveal>
        </Section>
      </div>
    </div>
  );
}

/* ============== Mobile ============== */
function Mobile() {
  return (
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
      <MobileTopBar />

      <div style={{ padding: "0 18px" }}>
        {/* Hero */}
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
                  <span style={{ color: "var(--accent)" }}>
                    {k.toLowerCase()}
                  </span>
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

        <MobileSection
          num="02"
          title="experience"
          count={`${EXPERIENCE.length} · tap to expand`}
          id="experience"
        >
          <div style={{ borderTop: "1px solid var(--border-strong)" }}>
            {EXPERIENCE.map((e, i) => (
              <MExpRow key={e.company + e.role + i} e={e} i={i} />
            ))}
          </div>
          <BeforeTechTimeline mobile />
        </MobileSection>

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
              <MProjectCard key={p.id} p={p} />
            ))}
          </div>
        </MobileSection>

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

        <MobileSection
          num="05"
          title="contact"
          count="just hit reply"
          id="contact"
        >
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
          <div
            style={{
              marginTop: 20,
              display: "flex",
              flexDirection: "column",
              gap: 6,
              fontFamily: "var(--font-mono)",
              fontSize: 10,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: "var(--muted)",
              textAlign: "center",
            }}
          >
            <span>© 2026 — minneapolis, mn</span>
            <span>last deploy: 4d ago · uptime 99.97%</span>
          </div>
        </MobileSection>
      </div>
    </div>
  );
}

/* ============== Top bars ============== */
function TopBar() {
  const scrollTo = (id) => (e) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        zIndex: 10,
        background: "rgba(10,10,10,0.92)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        borderBottom: "1px solid var(--border)",
        padding: "14px 48px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontSize: 12,
        fontFamily: "var(--font-mono)",
      }}
    >
      <div style={{ display: "flex", gap: 18, alignItems: "center" }}>
        <span style={{ color: "var(--accent)" }}>●</span>
        <span style={{ color: "var(--muted)" }}>antoniorice.com</span>
        <span style={{ color: "var(--muted-2)" }}>/</span>
        <span style={{ color: "var(--text)" }}>index</span>
      </div>
      <div
        style={{
          display: "flex",
          gap: 24,
          color: "var(--muted)",
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          fontSize: 11,
        }}
      >
        <a href="#about" onClick={scrollTo("about")} className="dossier-nav-link" style={topNavLink}>
          about
        </a>
        <a
          href="#experience"
          onClick={scrollTo("experience")}
          className="dossier-nav-link"
          style={topNavLink}
        >
          work
        </a>
        <a href="#projects" onClick={scrollTo("projects")} className="dossier-nav-link" style={topNavLink}>
          projects
        </a>
        <a
          href="/photography"
          className="dossier-photography-link"
          style={{ ...topNavLink, color: "var(--accent)" }}
        >
          photography →
        </a>
        <a href="#contact" onClick={scrollTo("contact")} className="dossier-nav-link" style={topNavLink}>
          contact
        </a>
      </div>
    </div>
  );
}

function MobileTopBar() {
  const [open, setOpen] = useState(false);
  const goto = (id) => (e) => {
    e.preventDefault();
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <div
        style={{
          position: "sticky",
          top: 0,
          zIndex: 10,
          background: "rgba(10,10,10,0.92)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          borderBottom: "1px solid var(--border)",
          padding: "12px 18px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: 11,
          fontFamily: "var(--font-mono)",
        }}
      >
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <span style={{ color: "var(--accent)" }}>●</span>
          <span style={{ color: "var(--muted)" }}>antoniorice.com</span>
        </div>
        <button
          onClick={() => setOpen((o) => !o)}
          className="dossier-hover"
          style={{
            background: "transparent",
            border: "1px solid var(--border-strong)",
            color: "var(--text)",
            fontFamily: "var(--font-mono)",
            fontSize: 10,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            padding: "6px 10px",
            cursor: "pointer",
          }}
        >
          {open ? "close" : "menu"}
        </button>
      </div>
      {open && (
        <div
          style={{
            position: "sticky",
            top: 41,
            zIndex: 9,
            background: "rgba(10,10,10,0.96)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            borderBottom: "1px solid var(--border)",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {[
            ["about", "about"],
            ["experience", "work"],
            ["projects", "projects"],
            ["learning", "learning"],
            ["contact", "contact"],
          ].map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={goto(id)}
              className="dossier-hover"
              style={{
                padding: "16px 18px",
                borderBottom: "1px solid var(--border)",
                fontFamily: "var(--font-mono)",
                fontSize: 12,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "var(--text)",
                textDecoration: "none",
              }}
            >
              {label}
            </a>
          ))}
          <a
            href="/photography"
            className="dossier-hover dossier-photography-link"
            style={{
              padding: "16px 18px",
              borderBottom: "1px solid var(--border)",
              fontFamily: "var(--font-mono)",
              fontSize: 12,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: "var(--accent)",
              textDecoration: "none",
            }}
          >
            photography →
          </a>
        </div>
      )}
    </>
  );
}

/* ============== Cards / shared ============== */
function PortraitCard({ mobile }) {
  return (
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
        <a
          href="/photography"
          className="dossier-photography-pill"
          style={{
            position: "absolute",
            right: mobile ? 10 : 12,
            bottom: mobile ? 10 : 12,
            fontFamily: "var(--font-mono)",
            fontSize: mobile ? 9 : 10,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "var(--text)",
            background: "rgba(0,0,0,0.7)",
            padding: mobile ? "4px 7px" : "5px 9px",
            textDecoration: "none",
          }}
        >
          photography →
        </a>
      </div>
    </div>
  );
}

function ProfileJsonCard({ full }) {
  return (
    <div
      style={{
        border: "1px solid var(--border-strong)",
        background: "var(--bg-soft)",
        fontFamily: "var(--font-mono)",
        fontSize: full ? 12 : 11,
      }}
    >
      <div
        style={{
          padding: full ? "10px 14px" : "8px 12px",
          borderBottom: "1px solid var(--border)",
          display: "flex",
          justifyContent: "space-between",
          color: "var(--muted)",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          fontSize: full ? 10 : 9,
        }}
      >
        <span>profile.json</span>
        <span style={{ color: "var(--accent)" }}>● live</span>
      </div>
      <div
        style={{
          padding: full ? 18 : 14,
          lineHeight: 1.85,
          color: "var(--text-dim)",
        }}
      >
        <JsonRow k="name" v={`"${PROFILE.name}"`} />
        <JsonRow k="role" v={`"${PROFILE.role}"`} />
        <JsonRow k="loc" v={`"Remote - ${PROFILE.location}"`} />
        <JsonRow k="status" v={`"open"`} accent />
        <JsonRow k="yrs_exp" v="10" />
        <JsonRow k="responds_within" v={`"1d"`} />
        {full && (
          <>
            <JsonRow k="open_to" v={`["full-time", "contract"]`} />
            <JsonRow k="last_updated" v={`"2026-04-29"`} />
          </>
        )}
      </div>
    </div>
  );
}

function JsonRow({ k, v, accent }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "3px 0",
        gap: 12,
      }}
    >
      <span style={{ color: "var(--muted)", flexShrink: 0 }}>{`"${k}":`}</span>
      <span
        style={{
          color: accent ? "var(--accent)" : "var(--text)",
          textAlign: "right",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}
      >
        {v}
      </span>
    </div>
  );
}

function CornerTick({ pos, mobile }) {
  const offset = mobile ? 6 : 8;
  const size = mobile ? 11 : 14;
  const positions = {
    tl: {
      top: offset,
      left: offset,
      borderTop: "1px solid var(--accent)",
      borderLeft: "1px solid var(--accent)",
    },
    tr: {
      top: offset,
      right: offset,
      borderTop: "1px solid var(--accent)",
      borderRight: "1px solid var(--accent)",
    },
    bl: {
      bottom: offset,
      left: offset,
      borderBottom: "1px solid var(--accent)",
      borderLeft: "1px solid var(--accent)",
    },
    br: {
      bottom: offset,
      right: offset,
      borderBottom: "1px solid var(--accent)",
      borderRight: "1px solid var(--accent)",
    },
  };
  return (
    <div
      style={{
        position: "absolute",
        width: size,
        height: size,
        ...positions[pos],
      }}
    />
  );
}

/* ============== Section header ============== */
function Section({ num, title, count, id, children }) {
  return (
    <section id={id} style={{ paddingTop: 96, paddingBottom: 24 }}>
      <Reveal>
        <header
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
            paddingBottom: 24,
            borderBottom: "1px solid var(--border-strong)",
            marginBottom: 32,
          }}
        >
          <div style={{ display: "flex", alignItems: "baseline", gap: 20 }}>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 12,
                color: "var(--accent)",
              }}
            >
              {`// ${num}`}
            </span>
            <h2
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 40,
                fontWeight: 500,
                letterSpacing: "-0.025em",
                margin: 0,
              }}
            >
              {title}
              <span style={{ color: "var(--accent)" }}>.</span>
            </h2>
          </div>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              color: "var(--muted)",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
            }}
          >
            {count}
          </span>
        </header>
      </Reveal>
      {children}
    </section>
  );
}

function MobileSection({ num, title, count, id, children }) {
  return (
    <section id={id} style={{ paddingTop: 56 }}>
      <header
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
          paddingBottom: 14,
          borderBottom: "1px solid var(--border-strong)",
          marginBottom: 22,
        }}
      >
        <div style={{ display: "flex", alignItems: "baseline", gap: 12 }}>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              color: "var(--accent)",
            }}
          >
            {`// ${num}`}
          </span>
          <h2
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 26,
              fontWeight: 500,
              letterSpacing: "-0.02em",
              margin: 0,
            }}
          >
            {title}
            <span style={{ color: "var(--accent)" }}>.</span>
          </h2>
        </div>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 9,
            color: "var(--muted)",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
          }}
        >
          {count}
        </span>
      </header>
      {children}
    </section>
  );
}

/* ============== Experience rows ============== */
function ExpRow({ e, i }) {
  const [open, setOpen] = useState(i === 0);
  return (
    <Reveal>
      <div style={{ borderBottom: "1px solid var(--border)" }}>
        <button
          onClick={() => setOpen((o) => !o)}
          className="dossier-hover"
          style={{
            width: "100%",
            background: "transparent",
            border: 0,
            color: "var(--text)",
            cursor: "pointer",
            padding: "20px 16px",
            display: "grid",
            gridTemplateColumns: "60px 2fr 2fr 1.5fr 24px",
            gap: 24,
            alignItems: "center",
            textAlign: "left",
            fontFamily: "var(--font-mono)",
            fontSize: 13,
          }}
        >
          <span style={{ color: "var(--muted)" }}>
            e{String(i + 1).padStart(2, "0")}
          </span>
          <span
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 22,
              letterSpacing: "-0.01em",
            }}
          >
            {e.company}
          </span>
          <span style={{ color: "var(--text-dim)" }}>{e.role}</span>
          <span style={{ color: "var(--muted)" }}>{e.period}</span>
          <span
            style={{
              color: "var(--accent)",
              textAlign: "right",
              transform: open ? "rotate(90deg)" : "none",
              transition: "transform 0.2s",
              display: "inline-block",
            }}
          >
            →
          </span>
        </button>
        <motion.div
          initial={false}
          animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
          transition={{
            height: { duration: 0.45, ease: [0.2, 0.7, 0.2, 1] },
            opacity: { duration: open ? 0.35 : 0.15, delay: open ? 0.1 : 0 },
          }}
          style={{ overflow: "hidden" }}
        >
          <article
            style={{
              padding: "20px 0 48px 0",
              display: "grid",
              gridTemplateColumns: "100px 1fr 1fr",
              gap: 40,
              borderTop: "1px dashed var(--border-strong)",
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  color: "var(--muted)",
                  letterSpacing: "0.08em",
                }}
              >
                Ch. {String(i + 1).padStart(2, "0")}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  color: "var(--muted)",
                  marginTop: 8,
                }}
              >
                {e.period}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  color: "var(--muted)",
                  marginTop: 8,
                }}
              >
                {e.location}
              </div>
            </div>
            <div>
              <div className="mono-label" style={{ marginBottom: 8 }}>
                {e.role}
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-serif)",
                  fontStyle: "italic",
                  fontSize: 40,
                  lineHeight: 1,
                  fontWeight: 400,
                  margin: 0,
                  letterSpacing: "-0.02em",
                }}
              >
                {e.company}
              </h3>
              <div
                style={{
                  marginTop: 18,
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 6,
                }}
              >
                {e.stack.map((s, si) => (
                  <span key={s + si} style={tagPill}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <ul
                style={{
                  margin: 0,
                  paddingLeft: 0,
                  listStyle: "none",
                  fontFamily: "var(--font-sans)",
                  fontSize: 15.5,
                  lineHeight: 1.6,
                  color: "var(--text-dim)",
                }}
              >
                {e.bullets.map((b, bi) => (
                  <li
                    key={bi}
                    style={{
                      paddingLeft: 22,
                      position: "relative",
                      marginBottom: 10,
                      textWrap: "pretty",
                    }}
                  >
                    <span
                      style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        color: "var(--accent)",
                        fontFamily: "var(--font-mono)",
                        fontSize: 12,
                      }}
                    >
                      ›
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </motion.div>
      </div>
    </Reveal>
  );
}

function MExpRow({ e, i }) {
  const [open, setOpen] = useState(i === 0);
  return (
    <div style={{ borderBottom: "1px solid var(--border)" }}>
      <button
        onClick={() => setOpen((o) => !o)}
        className="dossier-hover"
        style={{
          width: "100%",
          background: "transparent",
          border: 0,
          color: "var(--text)",
          cursor: "pointer",
          padding: "16px 12px",
          display: "grid",
          gridTemplateColumns: "30px 1fr 18px",
          gap: 10,
          alignItems: "center",
          textAlign: "left",
          fontFamily: "var(--font-mono)",
          fontSize: 12,
        }}
      >
        <span style={{ color: "var(--muted)", fontSize: 10 }}>
          e{String(i + 1).padStart(2, "0")}
        </span>
        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <span
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 17,
              letterSpacing: "-0.01em",
            }}
          >
            {e.company}
          </span>
          <span style={{ color: "var(--text-dim)", fontSize: 11 }}>
            {e.role}
          </span>
          <span
            style={{
              color: "var(--muted)",
              fontSize: 10,
              letterSpacing: "0.04em",
            }}
          >
            {e.period}
          </span>
        </div>
        <span
          style={{
            color: "var(--accent)",
            textAlign: "right",
            transform: open ? "rotate(90deg)" : "none",
            transition: "transform 0.2s",
            display: "inline-block",
          }}
        >
          →
        </span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{
          height: { duration: 0.45, ease: [0.2, 0.7, 0.2, 1] },
          opacity: { duration: open ? 0.35 : 0.15, delay: open ? 0.1 : 0 },
        }}
        style={{ overflow: "hidden" }}
      >
        <article
          style={{
            padding: "12px 0 32px 0",
            borderTop: "1px dashed var(--border-strong)",
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontFamily: "var(--font-mono)",
              fontSize: 10,
              color: "var(--muted)",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              paddingTop: 14,
            }}
          >
            <span>Ch. {String(i + 1).padStart(2, "0")}</span>
            <span>{e.location}</span>
          </div>
          <div>
            <div
              className="mono-label"
              style={{ marginBottom: 6, fontSize: 10 }}
            >
              {e.role}
            </div>
            <h3
              style={{
                fontFamily: "var(--font-serif)",
                fontStyle: "italic",
                fontSize: 30,
                lineHeight: 1,
                fontWeight: 400,
                margin: 0,
                letterSpacing: "-0.02em",
              }}
            >
              {e.company}
            </h3>
          </div>
          <ul
            style={{
              margin: 0,
              paddingLeft: 0,
              listStyle: "none",
              fontFamily: "var(--font-sans)",
              fontSize: 14,
              lineHeight: 1.55,
              color: "var(--text-dim)",
            }}
          >
            {e.bullets.map((b, bi) => (
              <li
                key={bi}
                style={{
                  paddingLeft: 18,
                  position: "relative",
                  marginBottom: 10,
                  textWrap: "pretty",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    color: "var(--accent)",
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                  }}
                >
                  ›
                </span>
                {b}
              </li>
            ))}
          </ul>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
            {e.stack.map((s, si) => (
              <span key={s + si} style={mTagPill}>
                {s}
              </span>
            ))}
          </div>
        </article>
      </motion.div>
    </div>
  );
}

/* ============== Before-tech timeline ============== */
function BeforeTechTimeline({ mobile }) {
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
            the long way around<span style={{ color: "var(--accent)" }}>.</span>
          </span>
        </button>
        <motion.div
          initial={false}
          animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
          transition={{
            height: { duration: 0.45, ease: [0.2, 0.7, 0.2, 1] },
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
            the long way around<span style={{ color: "var(--accent)" }}>.</span>
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
            top: 70,
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
                <div
                  style={{ position: "relative", paddingRight: 16 }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: 65,
                      left: 0,
                      width: 1,
                      height: 11,
                      background: "var(--accent)",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: 64,
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
                  top: 64,
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
}

/* ============== Projects ============== */
function FeaturedProject({ p, mobile }) {
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
}

function ProjectCard({ p }) {
  return (
    <Reveal>
      <a
        href={p.href}
        target="_blank"
        rel="noreferrer"
        className="dossier-hover"
        style={{
          background: "var(--bg)",
          padding: "28px 26px",
          minHeight: 280,
          display: "flex",
          flexDirection: "column",
          gap: 14,
          cursor: "pointer",
          textDecoration: "none",
          color: "inherit",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span className="mono-label">
            {p.id} · {p.year}
          </span>
          <span style={{ color: "var(--muted)" }}>→</span>
        </div>
        <h4
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: 24,
            letterSpacing: "-0.015em",
            margin: 0,
            fontWeight: 500,
          }}
        >
          {p.title}
        </h4>
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: 14,
            color: "var(--text-dim)",
            margin: 0,
            lineHeight: 1.55,
            flex: 1,
          }}
        >
          {p.blurb}
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          {p.tags.map((t) => (
            <span key={t} style={tagPill}>
              {t}
            </span>
          ))}
        </div>
      </a>
    </Reveal>
  );
}

function MProjectCard({ p }) {
  return (
    <a
      href={p.href}
      target="_blank"
      rel="noreferrer"
      className="dossier-hover"
      style={{
        background: "var(--bg)",
        display: "flex",
        flexDirection: "column",
        textDecoration: "none",
        color: "inherit",
      }}
    >
      <div
        style={{
          padding: 18,
          display: "flex",
          flexDirection: "column",
          gap: 10,
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span className="mono-label" style={{ fontSize: 10 }}>
            {p.id} · {p.year}
          </span>
          <span style={{ color: "var(--muted)" }}>→</span>
        </div>
        <h4
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: 19,
            letterSpacing: "-0.015em",
            margin: 0,
            fontWeight: 500,
          }}
        >
          {p.title}
        </h4>
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: 13,
            color: "var(--text-dim)",
            margin: 0,
            lineHeight: 1.5,
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
      </div>
    </a>
  );
}

/* ============== Style fragments ============== */
const ctaPrimary = {
  background: "var(--accent)",
  color: "#0a0a0a",
  fontFamily: "var(--font-mono)",
  fontSize: 12,
  letterSpacing: "0.06em",
  textTransform: "uppercase",
  padding: "12px 18px",
  textDecoration: "none",
  display: "inline-flex",
  alignItems: "center",
  gap: 8,
  fontWeight: 500,
};
const linkChip = {
  background: "transparent",
  border: "1px solid var(--border-strong)",
  color: "var(--text)",
  fontFamily: "var(--font-mono)",
  fontSize: 12,
  letterSpacing: "0.06em",
  textTransform: "uppercase",
  padding: "12px 18px",
  textDecoration: "none",
};
const topNavLink = {
  textDecoration: "none",
  color: "inherit",
  cursor: "pointer",
};
const tagPill = {
  fontFamily: "var(--font-mono)",
  fontSize: 10,
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  color: "var(--text-dim)",
  border: "1px solid var(--border)",
  padding: "4px 8px",
  display: "inline-block",
};
const smallChip = {
  fontFamily: "var(--font-mono)",
  fontSize: 11,
  letterSpacing: "0.06em",
  textTransform: "uppercase",
  color: "var(--text)",
  border: "1px solid var(--border-strong)",
  padding: "8px 12px",
  textDecoration: "none",
};
const th = {
  textAlign: "left",
  fontFamily: "var(--font-mono)",
  fontSize: 10,
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  color: "var(--muted)",
  padding: "10px 0",
  fontWeight: 400,
};
const td = {
  padding: "12px 0",
  color: "var(--text-dim)",
  verticalAlign: "middle",
};

/* Mobile fragments */
const mCtaPrimary = {
  background: "var(--accent)",
  color: "#0a0a0a",
  fontFamily: "var(--font-mono)",
  fontSize: 11,
  letterSpacing: "0.06em",
  textTransform: "uppercase",
  padding: "13px 16px",
  textDecoration: "none",
  display: "flex",
  alignItems: "center",
  fontWeight: 500,
};
const mLinkChip = {
  background: "transparent",
  border: "1px solid var(--border-strong)",
  color: "var(--text)",
  fontFamily: "var(--font-mono)",
  fontSize: 11,
  letterSpacing: "0.06em",
  textTransform: "uppercase",
  padding: "10px 12px",
  textDecoration: "none",
  textAlign: "center",
};
const mTagPill = {
  fontFamily: "var(--font-mono)",
  fontSize: 9,
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  color: "var(--text-dim)",
  border: "1px solid var(--border)",
  padding: "3px 7px",
  display: "inline-block",
};
const mSmallChip = {
  fontFamily: "var(--font-mono)",
  fontSize: 10,
  letterSpacing: "0.06em",
  textTransform: "uppercase",
  color: "var(--text)",
  border: "1px solid var(--border-strong)",
  padding: "7px 10px",
  textDecoration: "none",
};

export default Home;
