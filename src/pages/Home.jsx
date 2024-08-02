import { useNavigate } from "react-router-dom";
import {} from "../components";
import { motion, AnimatePresence } from "framer-motion";
import useEventsTracker from "../hooks/useEventsTracker";

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

  const text = "i'm antonio";
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
      <div className="page-wrapper flex flex-col md:grid md:grid-cols-3 md:px-10 md:pt-20">
        <motion.section
          variants={pageAnimation}
          initial="initial"
          animate="animate"
          transition={{ duration: 1 }}
          className="order-2 flex flex-col justify-center p-10 sm:items-center md:order-1 md:col-span-2"
        >
          <div className="top-8 sm:justify-center">
            <div className="font-bold">
              <p className="text-xl sm:text-2xl md:text-3xl">hello!</p>
              <h1 className="text-4xl sm:text-6xl md:text-8xl">
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
                  className="inline-block h-5 w-5 rounded-full bg-red-500 sm:h-2 sm:w-2"
                />
              </h1>
            </div>
            <p className="my-5 max-w-xl pb-5 text-lg font-extralight text-[#cccccc] sm:text-xl">
              i'm a software engineer and a wannabe photographer, which would
              you like to explore?
            </p>
            <div className="flex w-full gap-3 text-black sm:justify-center">
              <motion.button
                title="software engineer"
                className="animate-pulse rounded-md bg-[#cccccc] px-4 py-2 hover:animate-none hover:bg-gray-200 sm:flex-1"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                onClick={handleLeftClick}
              >
                software engineer
              </motion.button>
              <motion.button
                title="photographer"
                className="animate-pulse rounded-md bg-[#cccccc] px-4 py-2 hover:animate-none hover:bg-gray-200 sm:flex-1"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                onClick={handleRightClick}
              >
                photographer
              </motion.button>
            </div>
          </div>
        </motion.section>
        <motion.div
          variants={pageAnimation}
          initial="initial"
          animate="animate"
          transition={{ duration: 1 }}
          className="order-1 flex items-center justify-center p-10 sm:mt-[88px] md:order-2 md:col-span-1"
        >
          <img
            src="/assets/images/main-avatar-3.jpg"
            alt="main avatar"
            className="rounded-full ring-4 ring-white sm:h-52 sm:w-52"
          />
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default Home;
