import { useNavigate } from "react-router-dom";
import AnimatedPage from "../components/AnimatedPage";
import { motion, AnimatePresence } from "framer-motion";
import useEventsTracker from "../hooks/useEventsTracker";

const Home = () => {
  const eventTracker = useEventsTracker("Home Navigation");
  const navigate = useNavigate();

  const handleLeftClick = () => {
    eventTracker("swe button clicked", "SWE");
    navigate("/techprofile");
  };

  const handleRightClick = () => {
    eventTracker("photographer button clicked", "Photographer");
    navigate("/photography");
  };

  const text = "software engineer";
  const defaultAnimations = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <AnimatePresence>
      <AnimatedPage>
        <div className="page-wrapper flex flex-col md:grid md:grid-cols-3 md:pt-20">
          <section className="order-2 flex flex-col justify-center p-10 sm:items-center md:order-1 md:col-span-2">
            <div className="mb-5 font-bold text-[#cccccc]">
              <h1 className="text-4xl md:text-8xl">
                <span>
                  i'm <br />
                  antonio,
                </span>
                <br />
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
                      className="text-[#ffffff]"
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
            <div className="sm:text-center">
              <p className="mb-5 pb-5 text-xl font-extralight text-[#cccccc]">
                ...and also a wannabe photographer, which would you like to
                explore:
              </p>
              <div className="flex flex-row gap-3 text-black sm:justify-center ">
                <motion.button
                  title="software engineer"
                  className="animate-pulse rounded-md bg-[#cccccc] px-4 py-2 hover:animate-none hover:bg-red-500"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  onClick={handleLeftClick}
                >
                  software engineer
                </motion.button>
                <motion.button
                  title="photographer"
                  className="animate-pulse rounded-md bg-[#cccccc] px-4 py-2 hover:animate-none hover:bg-red-500"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  onClick={handleRightClick}
                >
                  photographer
                </motion.button>
              </div>
            </div>
          </section>
          <section className="order-1 flex items-center justify-center p-10 sm:mt-[88px] md:order-2 md:col-span-1">
            <img
              src="src/assets/images/main-avatar-2.jpg"
              alt="main 2d avatar"
              className="rounded-full ring-4 ring-white sm:w-52"
            />
          </section>
        </div>
      </AnimatedPage>
    </AnimatePresence>
  );
};

export default Home;
