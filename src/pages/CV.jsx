import { useEffect } from "react";
import { motion } from "framer-motion";
import { AnimatedPage, Section, ExperienceBlock, Contact } from "../components";
import skills from "../utils/skillsData";

const CV = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
    <AnimatedPage>
      <div className="page-wrapper py- 10 my-10">
        <motion.section>
          <Section id="beforeTech" title="Life Before Tech">
            {skills.beforeTech.map((exp, i) => (
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
          </Section>
        </motion.section>
        <Contact />
      </div>
    </AnimatedPage>
  );
};

export default CV;
