import { useEffect, useRef } from "react";
import { useInView, motion, useAnimation } from "framer-motion";

const Section = ({ id, title, children }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { threshold: 0.5 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: -50 });
    }
  }, [inView]);

  return (
    <section
      id={id}
      className={`${id === "contact" ? "!border-b-0" : ""} section-wrapper p-5 md:overflow-hidden`}
    >
      <motion.div
        ref={ref}
        className="sticky top-0 z-10 sm:-mx-5 sm:bg-[#202124] sm:bg-opacity-85 sm:px-5"
        animate={controls}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.2 }}
      >
        <h1 className="py-10 text-5xl font-bold tracking-tight sm:py-4 sm:text-2xl">
          {title}
          <div className="ml-1 inline-block size-3 rounded-full bg-red-500 sm:size-2" />
        </h1>
      </motion.div>
      {children}
    </section>
  );
};

export default Section;
