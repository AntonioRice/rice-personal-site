import React, { useRef } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa6";
import { SiGoogledocs } from "react-icons/si";
import { TfiEmail } from "react-icons/tfi";
import AnimatedPage from "../components/AnimatedPage";
import useSectionScroll from "../hooks/useSectionScroll";
import skills from "../utils/skillsData";
import SkillPill from "../components/SkillPill";
import Description from "../components/Description";
import Section from "../components/Section";
import ExperienceBlock from "../components/ExperienceBlock";
import HeroSection from "../components/HeroSection";
import ScrollContext from "../context/ScrollContext";

const TechProfile = () => {
  const offset = ["0 1", ".5 1"];
  const aboutSection = useSectionScroll(offset);
  const experienceSection = useSectionScroll(offset);
  const contactSection = useSectionScroll(offset);

  return (
    <ScrollContext.Provider
      value={{
        aboutRef: aboutSection.ref,
        experienceRef: experienceSection.ref,
        contactRef: contactSection.ref,
      }}
    >
      <AnimatedPage>
        <div className="flex-grow bg-[#0F1217] text-white">
          <HeroSection />
          <motion.section
            ref={aboutSection.ref}
            style={{ scale: aboutSection.scale, opacity: aboutSection.opacity }}
          >
            <Section id="about" title="About">
              <div className="mt-5 grid gap-9 md:grid-cols-3">
                <div className="col-span-2">
                  {skills.about.descriptions.map((description, index) => (
                    <Description key={index} description={description} />
                  ))}
                </div>
                <div className="sm:col-span-2 md:col-span-1">
                  <div className="mb-5 text-xl uppercase">Skills</div>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {skills.about.skills.map((skill, index) => (
                      <SkillPill key={index} skill={skill} />
                    ))}
                  </div>
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
            <Section id="experience" title="Experience">
              {skills.experience.map((exp, expIndex) => (
                <ExperienceBlock key={expIndex} experience={exp} />
              ))}
              <div className="flex flex-col items-center justify-center">
                <h1 className="mb-5 text-center text-lg font-extralight text-[#cccccc]">
                  Download my resume for more details
                </h1>
                <div>
                  <button
                    className="rounded-md bg-[#cccccc] px-4 py-2 text-black transition duration-300 ease-in-out hover:bg-red-500"
                    onClick={() =>
                      window.open(
                        "/ALR-Resume-2024-v2.pdf",
                        "_blank",
                        "noopener",
                      )
                    }
                  >
                    My Resume
                  </button>
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
            <section className="section-wrapper mt-20 flex flex-col items-center justify-center border-t-2">
              <h1 className="text-8xl font-bold sm:text-6xl">
                Contact
                <div className="ml-2 inline-block size-5 rounded-full bg-red-500 sm:size-3" />
              </h1>
              <h1 className="mb-5 text-center text-2xl font-extralight text-[#cccccc] sm:text-xl">
                Send me an email if you want to connect. You can also find me on
                <span className="ml-1">
                  <a
                    href="https://www.linkedin.com/in/riceantonio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="decoration-red-500 hover:text-[#ffffff] hover:underline"
                  >
                    Linkedin!
                  </a>
                </span>
              </h1>
              <a
                title="Email"
                href="mailto:contact@antoniorice.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex cursor-pointer items-center space-x-2 hover:text-[#e35757]"
              >
                <TfiEmail size={25} className="mt-2" />
                <span className="text-2xl underline sm:text-xl">
                  contact@antoniorice.com
                </span>
              </a>
              <section className="mt-5 flex space-x-4">
                <a
                  title="Linkedin"
                  href="https://www.linkedin.com/in/riceantonio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#e35757]"
                >
                  <FaLinkedin size={30} />
                </a>
                <a
                  title="Github"
                  href="https://www.github.com/AntonioRice"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#e35757]"
                >
                  <FaGithub size={30} />
                </a>
                <a
                  title="Resume"
                  href="/ALR-Resume-2024-v2.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#e35757]"
                >
                  <SiGoogledocs size={30} />
                </a>
              </section>
            </section>
          </motion.section>

          <div className="grid grid-cols-1 p-5 md:grid-cols-4 lg:grid-cols-6">
            <div className="col-span-1 col-start-6 p-2 sm:p-6">
              <p className="leading-0 text-xs font-extralight tracking-wide opacity-60 sm:text-[.65rem]">
                Designed and built by me. Utilizing React.js and Tailwind CSS on
                the frontend. Backend is built with Node.js and Express, with
                MongoDB and AWS S3. Deployed to AWS EC2 via Github Actions,
                Docker, and NGINX.
              </p>
            </div>
          </div>
        </div>
      </AnimatedPage>
    </ScrollContext.Provider>
  );
};

export default TechProfile;
