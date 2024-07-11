import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaDownload, FaArrowRightLong } from "react-icons/fa6";
import AnimatedPage from "../components/AnimatedPage";
import useSectionScroll from "../hooks/useSectionScroll";
import useEventsTracker from "../hooks/useEventsTracker";
import skills from "../utils/skillsData";
import SkillPill from "../components/SkillPill";
import Description from "../components/Description";
import Section from "../components/Section";
import ExperienceBlock from "../components/ExperienceBlock";
import HeroSection from "../components/HeroSection";
import ScrollContext from "../context/ScrollContext";
import Contact from "../components/Contact";
import DevNote from "../components/DevNote";

const TechProfile = () => {
  const navigate = useNavigate();
  const trackEvent = useEventsTracker("User Interaction");
  const offset = ["0 1", ".5 1"];
  const heroSection = useSectionScroll(offset);
  const aboutSection = useSectionScroll(offset);
  const experienceSection = useSectionScroll(offset);
  const learningSection = useSectionScroll(offset);
  const contactSection = useSectionScroll(offset);

  const handleDownload = () => {
    trackEvent("Resume downloaded", "ALR Resume");
    window.open("/ALR-Resume-2024-v2.pdf", "_blank", "noopener");
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
          <Section id="about" title="about">
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
                    className="inline-flex h-10 w-32 animate-pulse items-center justify-center rounded-md bg-[#cccccc] px-4 py-2 text-black hover:animate-none hover:bg-gray-200"
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
                    className="inline-flex h-10 w-32 animate-pulse items-center justify-center rounded-md bg-[#cccccc] px-4 py-2 text-black hover:animate-none hover:bg-gray-200"
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
          ref={learningSection.ref}
          style={{
            scale: learningSection.scale,
            opacity: learningSection.opacity,
          }}
        >
          <Section id="learning" title="learning">
            <div className="mt-8 flex items-center justify-center gap-5 p-4 sm:flex-wrap">
              <div className="transform transition duration-300 hover:scale-110">
                <a
                  href="https://www.coursera.org/verify/6GUWJ3DY26YH"
                  target="_blank"
                >
                  <img
                    src="src/assets/images/react-basics-badge.png"
                    alt="My React Basic Badge"
                    className="block h-auto w-36"
                  />
                </a>
                <p>React Basics</p>
              </div>
              <div className="transform transition duration-300 hover:scale-110">
                <a
                  href="https://www.coursera.org/verify/RCXBLMD22KFA"
                  target="_blank"
                >
                  <img
                    src="src/assets/images/javascript-badge.png"
                    alt="My Programming with Javascript Badge"
                    className="block h-auto w-36"
                  />
                </a>
                <p>Javascript Basics</p>
              </div>
              <div className="transform transition duration-300 hover:scale-110">
                <a
                  href="https://www.udemy.com/certificate/UC-dc61789f-b15c-4248-8249-bdd38f5d822c/"
                  target="_blank"
                >
                  <img
                    src="src/assets/images/dsa-badge.png"
                    alt="My Data Structures & Algorithms Badge"
                    className="block h-auto w-36"
                  />
                </a>
                <p>DSA</p>
              </div>
              <div className="transform transition duration-300 hover:scale-110">
                <a
                  href="https://www.udemy.com/certificate/UC-cd3d2f8d-4432-4f6e-89c9-73a9baf20317/"
                  target="_blank"
                >
                  <img
                    src="src/assets/images/node-badge.png"
                    alt="My Node.js Badge"
                    className="block h-auto w-36"
                  />
                </a>
                <p>Node.js Masterclass</p>
              </div>
              <div className="transform transition duration-300 hover:scale-110">
                <a
                  href="https://www.udemy.com/certificate/UC-cda3ef74-3372-425e-b601-a6f15516d9c7/"
                  target="_blank"
                >
                  <img
                    src="src/assets/images/sd-badge.png"
                    alt="My System Design Badge"
                    className="block h-auto w-36"
                  />
                </a>
                <p>System Design</p>
              </div>
              <div className="transform transition duration-300 hover:scale-110">
                <a
                  href="https://www.credly.com/badges/0c799f8c-357b-434f-949c-d7f866f9e994/public_url"
                  target="_blank"
                >
                  <img
                    src="src/assets/images/microsoft-certified-azure-fundamentals.png"
                    alt="My Azure Fundamentals Badge"
                    className="block h-auto w-36"
                  />
                </a>
                <p className="flex justify-center">Azure Fundamentals</p>
              </div>
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
