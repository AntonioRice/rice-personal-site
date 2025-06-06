import { useNavigate } from "react-router-dom";
import { useScrollContext } from "../context/ScrollContext";
import { motion, AnimatePresence } from "framer-motion";
import useEventsTracker from "../hooks/useEventsTracker";
import SocialLinks from "./SocialLinks";

const HeroSection = () => {
  const { aboutRef } = useScrollContext();
  const eventTracker = useEventsTracker("Home Navigation");
  const navigate = useNavigate();

  const handleLeftClick = () => {
    eventTracker("swe button clicked", "SWE");
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleRightClick = () => {
    eventTracker("photography button clicked", "Photography");
    navigate("/photography");
  };

  const text = "Antonio Rice";

  const pageAnimation = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
  };

  return (
    <AnimatePresence>
      <div className="section-wrapper flex min-h-screen flex-col items-center md:grid md:grid-cols-2">
        <motion.section
          variants={pageAnimation}
          initial="initial"
          animate="animate"
          transition={{ duration: 1 }}
          className="order-2 flex flex-grow flex-col justify-center py-10 md:order-1 md:col-span-1"
        >
          <h1 className="text-5xl font-bold tracking-tight sm:text-4xl">
            <motion.span
              initial="hidden"
              animate="visible"
              aria-hidden
              transition={{ staggerChildren: 0.1 }}
            >
              {text}
            </motion.span>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              className="ml-1 inline-block size-3 rounded-full bg-red-500 sm:size-2"
            />
          </h1>
          <p className="md:text-lg">Software Engineer</p>
          <p className="my-5 max-w-sm pb-5 leading-7 text-[#dadde2] md:text-base">
            I love creating awesome software and capturing life’s moments
            through photography. What would you like to explore?
          </p>
          <div className="flex w-full gap-3 text-black sm:justify-center">
            <motion.button
              title="software engineering"
              aria-label="Explore software engineering portfolio"
              className="h-10 w-36 animate-pulse rounded-md bg-[#cccccc] px-2 py-2 text-xs font-semibold hover:animate-none hover:bg-gray-200 sm:flex-1"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              onClick={handleLeftClick}
            >
              Software Engineering
            </motion.button>
            <motion.button
              title="photography"
              aria-label="Explore photography portfolio"
              className="h-10 w-36 animate-pulse rounded-md bg-[#cccccc] px-4 py-2 text-xs font-semibold hover:animate-none hover:bg-gray-200 sm:flex-1"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              onClick={handleRightClick}
            >
              Photography
            </motion.button>
          </div>
          <div className="flex w-full sm:justify-center">
            <SocialLinks size={30} />
          </div>
        </motion.section>
        <motion.section
          variants={pageAnimation}
          initial="initial"
          animate="animate"
          transition={{ duration: 1 }}
          className="order-1 flex w-full flex-grow items-center justify-center md:order-2 md:col-span-1"
        >
          <a
            title="Linkedin"
            href="https://www.linkedin.com/in/riceantonio"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              alt="Antonio Rice"
              src="/assets/images/main-avatar-3.jpg"
              className="mt-10 size-60 transform rounded-full ring-2 ring-white ring-offset-8 ring-offset-[#202124] md:size-[350px] lg:size-[500px]"
              loading="lazy"
            />
          </a>
        </motion.section>
      </div>
    </AnimatePresence>
  );
};

export default HeroSection;
