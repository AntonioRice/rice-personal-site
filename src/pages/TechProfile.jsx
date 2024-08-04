import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
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
} from "../components";
import useSectionScroll from "../hooks/useSectionScroll";
import useEventsTracker from "../hooks/useEventsTracker";
import skills from "../utils/skillsData";
import ScrollContext from "../context/ScrollContext";

const TechProfile = () => {
  const navigate = useNavigate();
  const trackEvent = useEventsTracker("User Interaction");

  const heroSection = useSectionScroll();
  const aboutSection = useSectionScroll();
  const experienceSection = useSectionScroll();
  const projectSection = useSectionScroll();
  const learningSection = useSectionScroll();
  const contactSection = useSectionScroll();

  const handleDownload = () => {
    trackEvent("Resume downloaded", "ALR Resume");
    window.open("/assets/ALR-Resume-2024-v4.pdf", "_blank", "noopener");
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
        heroRef: heroSection.ref,
        aboutRef: aboutSection.ref,
        experienceRef: experienceSection.ref,
        projectRef: projectSection.ref,
        contactRef: contactSection.ref,
        learningRef: learningSection.ref,
      }}
    >
      <motion.div
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={animationVariants}
      >
        <motion.section
          ref={heroSection.ref}
          initial="hidden"
          animate={heroSection.controls}
          variants={animationVariants}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <HeroSection />
        </motion.section>

        <motion.section
          ref={aboutSection.ref}
          initial="hidden"
          animate={aboutSection.controls}
          variants={animationVariants}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <Section id="about-me" title="about me">
            <div className="my-10 grid gap-10 md:grid-cols-2">
              <div className="col-span-1">
                {skills.about.description.map((description, i) => (
                  <Description key={i} description={description} />
                ))}
              </div>
              <div className="col-span-1">
                <h1 className="mb-5 text-xl uppercase">skills</h1>
                {skills.about.skillSet.map((skillCategory, i) => (
                  <div key={i} className="py-2">
                    <div className="text-md py-2 font-light tracking-wide">
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

        <motion.section
          ref={experienceSection.ref}
          initial="hidden"
          animate={experienceSection.controls}
          variants={animationVariants}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <Section id="experience" title="experience">
            {skills.experience.map((exp, i) => (
              <motion.div
                key={i}
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                custom={i}
              >
                <ExperienceBlock experience={exp} />
              </motion.div>
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
                    Life before Tech:
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
          initial="hidden"
          animate={projectSection.controls}
          variants={animationVariants}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <Section id="projects" title="projects">
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
          </Section>
        </motion.section>

        <motion.section
          ref={learningSection.ref}
          initial="hidden"
          animate={learningSection.controls}
          variants={animationVariants}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <Section id="learning" title="learning">
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm">
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

        <motion.section
          ref={contactSection.ref}
          initial="hidden"
          animate={contactSection.controls}
          variants={animationVariants}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <Contact />
        </motion.section>
        <DevNote />
      </motion.div>
    </ScrollContext.Provider>
  );
};

export default TechProfile;
