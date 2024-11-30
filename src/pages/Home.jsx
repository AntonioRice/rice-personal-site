import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { FaDownload, FaArrowRightLong } from "react-icons/fa6";
import {
  SkillPill,
  Description,
  Section,
  ExperienceBlock,
  LearningBlock,
  LeetCodeBlock,
  ProjectBlock,
  HeroSection,
  Contact,
  DevNote,
  NavItem,
} from "../components";
import useEventsTracker from "../hooks/useEventsTracker";
import skills from "../utils/skillsData";
import ScrollContext from "../context/ScrollContext";

const Home = () => {
  const [activeSection, setActiveSection] = useState("home");
  const navigate = useNavigate();
  const trackEvent = useEventsTracker("User Interaction");

  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectRef = useRef(null);
  const learningRef = useRef(null);
  const contactRef = useRef(null);

  const heroInView = useInView(heroRef, { amount: 0.5 });
  const aboutInView = useInView(aboutRef, { amount: 0.5 });
  const experienceInView = useInView(experienceRef, { amount: 0.1 });
  const projectInView = useInView(projectRef, { amount: 0.2 });
  const learningInView = useInView(learningRef, { amount: 0 });
  const contactInView = useInView(contactRef, { amount: 0.1 });

  const sections = [
    { id: "home", ref: heroRef },
    { id: "about", ref: aboutRef },
    { id: "experience", ref: experienceRef },
    { id: "projects", ref: projectRef },
    { id: "learning", ref: learningRef },
    { id: "contact", ref: contactRef },
  ];

  useEffect(() => {
    if (contactInView) setActiveSection("contact");
    else if (learningInView) setActiveSection("learning");
    else if (projectInView) setActiveSection("projects");
    else if (experienceInView) setActiveSection("experience");
    else if (aboutInView) setActiveSection("about");
    else if (heroInView) setActiveSection("home");
  }, [
    heroInView,
    aboutInView,
    experienceInView,
    projectInView,
    learningInView,
    contactInView,
  ]);

  const handleDownload = () => {
    trackEvent("Resume downloaded", "ALR Resume");
    window.open("/assets/ALR-Resume-2024-v6.pdf", "_blank", "noopener");
  };

  const handleNavigateToCV = () => {
    trackEvent("CV button clicked", "CV");
    navigate("/cv");
  };

  const animationVariants = {
    hidden: { opacity: 0, y: 75 },
    visible: { opacity: 1, y: 0 },
  };

  const fadeInAnimationVariants = {
    initial: { opacity: 0, y: 100 },
    animate: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * i,
      },
    }),
  };

  return (
    <ScrollContext.Provider
      value={{
        heroRef,
        aboutRef,
        experienceRef,
        projectRef,
        contactRef,
        learningRef,
        activeSection,
      }}
    >
      <Helmet>
        <title>A. Rice | Software Engineer</title>
        <meta
          name="description"
          content="Explore the professional portfolio of Antonio Rice, a skilled Software Engineer specializing in modern web technologies, cloud computing, and software architecture. Discover projects, technical skills, and insights into the latest industry trends."
        />
        <link rel="canonical" href="https://antoniorice.com/techprofile" />
        <meta property="og:title" content="A. Rice | Software Engineer" />
        <meta
          property="og:description"
          content="Discover Antonio Rice's portfolio showcasing expertise in software engineering, including modern web development, cloud solutions, and innovative projects."
        />
        <meta
          property="og:image"
          content="https://antoniorice.com/assets/images/site-image.webp"
        />
        <meta property="og:url" content="https://antoniorice.com/techprofile" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="A. Rice | Software Engineer" />
        <meta
          name="twitter:description"
          content="Explore the professional portfolio of Antonio Rice, a skilled Software Engineer specializing in modern web technologies, cloud computing, and software architecture."
        />
        <meta
          name="twitter:image"
          content="https://antoniorice.com/assets/images/site-image.webp"
        />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Antonio Rice",
              "jobTitle": "Software Engineer",
              "url": "https://antoniorice.com",
              "sameAs": [
                "https://www.linkedin.com/in/antoniorice",
                "https://twitter.com/antoniorice"
              ]
            }
          `}
        </script>
      </Helmet>
      <nav className="sm:hidden md:fixed md:left-0 md:top-1/3 md:z-50 md:p-4">
        <ul className="flex flex-col">
          {sections.map((section) => (
            <li key={section.id}>
              <NavItem
                id={section.id}
                isActive={activeSection === section.id}
                onClick={() =>
                  section.ref.current.scrollIntoView({ behavior: "smooth" })
                }
              >
                {section.id.charAt(0).toUpperCase() + section.id.slice(1)}
              </NavItem>
            </li>
          ))}
        </ul>
      </nav>
      <motion.div
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={animationVariants}
      >
        <motion.section ref={heroRef}>
          <HeroSection />
        </motion.section>

        <motion.section ref={aboutRef}>
          <Section id="about" title="About Me">
            <div className="grid gap-10 md:grid-cols-2">
              <div className="col-span-1">
                {skills.about.description.map((description, i) => (
                  <Description key={i} description={description} />
                ))}
                <div className="inline-flex w-full justify-end p-4">
                  <span className="text-red-500"> - </span>
                  <p className="ml-1 text-[#cccccc]">A. Rice</p>
                </div>
              </div>
              <div className="col-span-1">
                <h1 className="font-bold uppercase">Skills</h1>
                {skills.about.skillSet.map((skillCategory, i) => (
                  <div key={i} className="py-2">
                    <div className="py-1 text-sm text-[#cccccc]">
                      {skillCategory.category}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skillCategory.skills.map((skill, i) => (
                        <SkillPill key={i} skill={skill} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Section>
        </motion.section>

        <motion.section ref={experienceRef}>
          <Section id="experience" title="Experience">
            {skills.experience.map((exp, i) => (
              <div key={i}>
                <ExperienceBlock experience={exp} />
              </div>
            ))}
            <div className="grid w-full gap-10 py-10 md:grid-cols-2">
              <div className="mx flex w-full flex-col justify-center rounded-lg border-[1px] border-gray-500 bg-[#2c2f31] p-4 shadow-xl md:mx-0">
                <div className="flex flex-col gap-2">
                  <h2 className="flex items-center text-xl font-semibold leading-7 text-[#cccccc]">
                    My Resume
                  </h2>
                  <p>
                    For more details about my experience, download my
                    professional resume.
                  </p>
                  <div className="flex items-start justify-end gap-2 pt-4">
                    <motion.button
                      title="downloadResume"
                      className="inline-flex h-10 w-36 animate-pulse items-center justify-center rounded-md bg-[#cccccc] px-4 py-2 text-sm font-semibold text-black hover:animate-none hover:bg-gray-200"
                      whileHover={{ scale: 1.1 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                      onClick={handleDownload}
                    >
                      <FaDownload size={16} className="mr-2" />
                      <span>Download</span>
                    </motion.button>
                  </div>
                </div>
              </div>
              <div className="mx-auto flex w-full flex-col justify-center rounded-lg border-[1px] border-gray-500 bg-[#2c2f31] p-4 shadow-xl md:mx-0">
                <div className="flex flex-col gap-2">
                  <h2 className="flex items-center text-xl font-semibold leading-7 text-[#cccccc]">
                    Life Before Tech
                  </h2>
                  <p>
                    Explore the professional experiences that have shaped me
                    into the Software Engineer I am today.
                  </p>
                  <div className="flex items-start justify-end gap-2 pt-4">
                    <motion.button
                      title="navigateToCV"
                      className="inline-flex h-10 w-36 animate-pulse items-center justify-center rounded-md bg-[#cccccc] px-4 py-2 text-sm font-semibold text-black hover:animate-none hover:bg-gray-200"
                      whileHover={{ scale: 1.1 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                      onClick={handleNavigateToCV}
                    >
                      <span>Explore More</span>
                      <FaArrowRightLong size={14} className="ml-2" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
          </Section>
        </motion.section>

        <motion.section ref={projectRef}>
          <Section id="projects" title="Projects">
            <div className="flex flex-wrap items-center justify-center gap-6">
              {skills.projects.map((project, i) => (
                <motion.div
                  key={i}
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  custom={i}
                >
                  <ProjectBlock key={i} project={project} />
                </motion.div>
              ))}
            </div>
          </Section>
        </motion.section>

        <motion.section ref={learningRef}>
          <Section id="learning" title="Learning">
            <div className="flex flex-wrap items-center justify-center gap-6">
              {skills.learning.map((learn, i) => (
                <LearningBlock
                  key={i}
                  href={learn.href}
                  src={learn.src}
                  alt={learn.alt}
                  description={learn.description}
                />
              ))}
              <LeetCodeBlock />
            </div>
          </Section>
        </motion.section>

        <motion.section ref={contactRef}>
          <Section id="contact" title="Contact Me">
            <Contact />
          </Section>
        </motion.section>

        <DevNote />
      </motion.div>
    </ScrollContext.Provider>
  );
};

export default Home;
