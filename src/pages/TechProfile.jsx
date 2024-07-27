import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaDownload, FaArrowRightLong } from "react-icons/fa6";
import {
  AnimatedPage,
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
} from "../components";
import useSectionScroll from "../hooks/useSectionScroll";
import useEventsTracker from "../hooks/useEventsTracker";
import skills from "../utils/skillsData";
import ScrollContext from "../context/ScrollContext";

const TechProfile = () => {
  const navigate = useNavigate();
  const trackEvent = useEventsTracker("User Interaction");
  const offset = ["0 1", ".5 1"];
  const heroSection = useSectionScroll(offset);
  const aboutSection = useSectionScroll(offset);
  const experienceSection = useSectionScroll(offset);
  const projectSection = useSectionScroll(offset);
  const learningSection = useSectionScroll(offset);
  const contactSection = useSectionScroll(offset);

  const handleDownload = () => {
    trackEvent("Resume downloaded", "ALR Resume");
    window.open("/assets/ALR-Resume-2024-v4.pdf", "_blank", "noopener");
  };

  const handleNavigateToCV = () => {
    trackEvent("CV button clicked", "CV");
    navigate("/cv");
  };

  return (
    <ScrollContext.Provider
      value={{
        heroRef: heroSection.ref,
        aboutRef: aboutSection.ref,
        experienceRef: experienceSection.ref,
        projectRef: projectSection.ref,
        contactRef: contactSection.ref,
        learningRef: learningSection.ref,
      }}
    >
      <AnimatedPage>
        <motion.section
          ref={heroSection.ref}
          style={{ scale: heroSection.scale, opacity: heroSection.opacity }}
        >
          <HeroSection />
        </motion.section>

        <motion.section
          ref={aboutSection.ref}
          style={{ scale: aboutSection.scale, opacity: aboutSection.opacity }}
        >
          <Section id="about-me" title="about me">
            <div className="mt-5 grid gap-10 md:grid-cols-2">
              <div className="col-span-1">
                {skills.about.description.map((description, index) => (
                  <Description key={index} description={description} />
                ))}
              </div>
              <div className="col-span-2 md:col-span-1">
                <div className="mb-5 text-xl uppercase">skills</div>
                {skills.about.skillSet.map((skillCategory, index) => (
                  <div key={index} className="mb-4">
                    <div className="text-md font-light">
                      {skillCategory.category}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skillCategory.skills.map((skill, skillIndex) => (
                        <SkillPill key={skillIndex} skill={skill} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Section>
        </motion.section>
        <motion.section
          ref={experienceSection.ref}
          style={{
            scale: experienceSection.scale,
            opacity: experienceSection.opacity,
          }}
        >
          <Section id="experience" title="experience">
            {skills.experience.map((exp, expIndex) => (
              <ExperienceBlock key={expIndex} experience={exp} />
            ))}
            <div className="flex flex-col items-center justify-center">
              <div className="grid w-full grid-cols-2 gap-10">
                <div className="flex flex-col items-center justify-center">
                  <h1 className="text-md mb-5 text-center font-extralight text-[#cccccc]">
                    Download my resume for more details:
                  </h1>
                  <motion.button
                    title="downloadResume"
                    className="inline-flex h-10 w-36 animate-pulse items-center justify-center rounded-md bg-[#cccccc] px-4 py-2 text-black hover:animate-none hover:bg-gray-200"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    onClick={handleDownload}
                  >
                    <FaDownload size={16} className="mr-2" />
                    <span>my resume</span>
                  </motion.button>
                </div>

                <div className="flex flex-col items-center justify-center">
                  <h1 className="text-md mb-5 text-center font-extralight text-[#cccccc]">
                    Explore before Tech experience:
                  </h1>
                  <motion.button
                    title="navigateToCV"
                    className="inline-flex h-10 w-36 animate-pulse items-center justify-center rounded-md bg-[#cccccc] px-4 py-2 text-black hover:animate-none hover:bg-gray-200"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    onClick={handleNavigateToCV}
                  >
                    <span>my cv</span>
                    <FaArrowRightLong size={16} className="ml-2" />
                  </motion.button>
                </div>
              </div>
            </div>
          </Section>
        </motion.section>
        <motion.section
          ref={projectSection.ref}
          style={{
            scale: projectSection.scale,
            opacity: projectSection.opacity,
          }}
        >
          <Section id="projects" title="projects">
            <ProjectBlock />
          </Section>
        </motion.section>
        <motion.section
          ref={learningSection.ref}
          style={{
            scale: learningSection.scale,
            opacity: learningSection.opacity,
          }}
        >
          <Section id="learning" title="learning">
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm">
              {skills.learning.map((learn, index) => (
                <LearningBlock
                  key={index}
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
        <motion.section
          ref={contactSection.ref}
          style={{
            scale: contactSection.scale,
            opacity: contactSection.opacity,
          }}
        >
          <Contact />
        </motion.section>
        <DevNote />
      </AnimatedPage>
    </ScrollContext.Provider>
  );
};

export default TechProfile;
