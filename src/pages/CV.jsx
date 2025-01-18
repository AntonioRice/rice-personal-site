import { Helmet } from "react-helmet";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { AnimatedPage, Section, ExperienceBlock, Contact } from "../components";
import skills from "../utils/skillsData";

const CV = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <AnimatedPage>
      <Helmet>
        <title>A. Rice | Life Before Tech</title>
        <meta
          name="description"
          content="Explore Antonio Rice's diverse professional journey before transitioning into software engineering. Discover the skills and experiences that shaped his career."
        />
        <link rel="canonical" href="https://antoniorice.com/" />
        <meta property="og:title" content="A. Rice | Life Before Tech" />
        <meta
          property="og:description"
          content="Uncover the rich professional history of Antonio Rice prior to becoming a software engineer, including key experiences that contributed to his expertise."
        />
        <meta
          property="og:image"
          content="https://antoniorice.com/assets/images/site-image.webp"
        />
      </Helmet>
      <div className="page-wrapper sm:!p-0">
        <motion.section>
          <Section id="beforeTech" title="Life Before Tech">
            {skills.beforeTech.map((exp, i) => (
              <div key={i}>
                <ExperienceBlock experience={exp} />
              </div>
            ))}
          </Section>
        </motion.section>
        <motion.section>
          <Section id="contact" title="Contact Me">
            <Contact />
          </Section>
        </motion.section>
      </div>
    </AnimatedPage>
  );
};

export default CV;
