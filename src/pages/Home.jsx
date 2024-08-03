import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import useEventsTracker from "../hooks/useEventsTracker";
import SocialLinks from "../components/SocialLinks";

const Home = () => {
  const eventTracker = useEventsTracker("Home Navigation");
  const navigate = useNavigate();

  const handleLeftClick = () => {
    eventTracker("swe button clicked", "SWE");
    navigate("/software-engineer");
  };

  const handleRightClick = () => {
    eventTracker("photographer button clicked", "Photographer");
    navigate("/photographer");
  };

  const text = "antonio rice";
  const defaultAnimations = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  const pageAnimation = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
  };

  return (
    <AnimatePresence>
      <div className="page-wrapper flex flex-col md:grid md:grid-cols-2 md:px-10 md:pt-20">
        <motion.section
          variants={pageAnimation}
          initial="initial"
          animate="animate"
          transition={{ duration: 1 }}
          className="order-2 flex flex-col justify-center p-10 sm:items-center md:order-1 md:col-span-1"
        >
          <div className="top-8 font-bold">
            <p className="text-xl text-[#cccccc] sm:text-xl md:text-2xl">
              hello i'm,
            </p>
            <h1 className="flex-shrink whitespace-nowrap text-4xl sm:text-6xl md:text-7xl lg:text-8xl">
              <motion.span
                initial="hidden"
                animate="visible"
                aria-hidden
                transition={{ staggerChildren: 0.1 }}
              >
                {text.split("").map((char, i) => (
                  <motion.span
                    key={i}
                    variants={defaultAnimations}
                    className="text-white"
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.span>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 1.7,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
                className="inline-block size-4 rounded-full bg-red-500 sm:size-2"
              />
            </h1>
          </div>
          <p className="my-5 max-w-xl pb-5 text-lg font-extralight text-[#cccccc] sm:text-center sm:text-xl">
            i'm a software engineer and I love to practice photography, which
            would you like to explore?
          </p>
          <div className="flex w-full gap-3 text-black sm:justify-center">
            <motion.button
              title="software engineer"
              className="h-10 w-36 animate-pulse rounded-md bg-[#cccccc] hover:animate-none hover:bg-gray-200 sm:flex-1"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              onClick={handleLeftClick}
            >
              software engineer
            </motion.button>
            <motion.button
              title="photographer"
              className="h-10 w-36 animate-pulse rounded-md bg-[#cccccc] hover:animate-none hover:bg-gray-200 sm:flex-1"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              onClick={handleRightClick}
            >
              photographer
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
          className="order-1 flex w-full items-center justify-center sm:mt-24 md:order-2 md:col-span-1"
        >
          <img
            src="/assets/images/main-avatar-3.jpg"
            alt="main avatar"
            className="size-60 rounded-full object-cover ring-4 ring-white md:size-[500px]"
          />
        </motion.section>
      </div>
    </AnimatePresence>
  );
};

export default Home;
