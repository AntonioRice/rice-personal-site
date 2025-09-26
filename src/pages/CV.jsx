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
        <title>A. Rice | CV & Resume | Software Engineer Career Journey</title>
        <meta
          name="description"
          content="Antonio Rice's professional CV showcasing software engineering expertise, career progression, and technical skills in web development and cloud computing."
        />
        <meta name="author" content="Antonio Rice" />
        <meta
          name="keywords"
          content="Antonio Rice CV, software engineer resume, career history, professional experience, web developer CV"
        />

        <link rel="canonical" href="https://antoniorice.com/cv" />

        <meta
          property="og:title"
          content="A. Rice | CV & Resume | Software Engineer Career Journey"
        />
        <meta property="og:type" content="profile" />
        <meta property="og:site_name" content="Antonio Rice Portfolio" />
        <meta
          property="og:description"
          content="Antonio Rice's professional CV showcasing software engineering expertise, career progression, and technical skills in web development and cloud computing."
        />
        <meta
          property="og:image"
          content="https://antoniorice.com/assets/images/site-image.webp"
        />
        <meta property="og:url" content="https://antoniorice.com/cv" />
        <meta property="og:locale" content="en_US" />

        <meta name="robots" content="index, follow" />

        <script type="application/ld+json">
          {`
      {
        "@context": "https://schema.org",
        "@type": "ProfilePage",
        "mainEntity": {
          "@type": "Person",
          "name": "Antonio Rice",
          "alternateName": "A. Rice",
          "jobTitle": "Full-Stack Software Engineer",
          "description": "Professional CV showcasing software engineering expertise and career progression",
          "url": "https://antoniorice.com",
          "sameAs": [
            "https://www.linkedin.com/in/antoniorice"
          ],
          "hasOccupation": {
            "@type": "Occupation",
            "name": "Software Engineer",
            "occupationLocation": {
              "@type": "Place",
              "name": "Remote/US"
            }
          }
        },
        "about": "Professional resume and career history of Antonio Rice, Full-Stack Software Engineer",
        "url": "https://antoniorice.com/cv"
      }
    `}
        </script>
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
