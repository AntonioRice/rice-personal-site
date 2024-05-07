import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AnimatedPage from "../components/AnimatedPage";
import skills from "../utils/skillsData";
import Section from "../components/Section";
import ExperienceBlock from "../components/ExperienceBlock";
import Contact from "../components/Contact";

const CV = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <AnimatedPage>
      <div className="page-wrapper">
        <motion.section>
          <Section id="beforeTech" title="Life Before Tech">
            {skills.beforeTech.map((exp, expIndex) => (
              <ExperienceBlock key={expIndex} experience={exp} />
            ))}
          </Section>
        </motion.section>
        <Contact />
      </div>
    </AnimatedPage>
  );
};

export default CV;
