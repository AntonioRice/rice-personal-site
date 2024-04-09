import { useNavigate } from "react-router-dom";
import AnimatedPage from "../components/AnimatedPage";
import { motion, AnimatePresence } from "framer-motion";

const Home = () => {
  const navigate = useNavigate();

  const handleLeftClick = () => {
    navigate("/techprofile");
  };

  const handleRightClick = () => {
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
        <div className="flex h-[calc(100vh-2.5rem)] flex-col bg-[#0F1217] md:grid md:grid-cols-3">
          <section className="order-2 flex flex-col justify-center p-10 sm:items-center md:order-1 md:col-span-2">
            <h1 className="mb-5 text-4xl font-bold text-[#cccccc] md:text-8xl">
              I'm a <br />
              <motion.span
                className="text-[#ffffff]"
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
                className="inline-block size-5 rounded-full bg-red-500 sm:size-2"
              />
            </h1>
            <div className="sm:text-center">
              <p className="mb-5 pb-5 text-xl font-extralight text-[#cccccc]">
                ...and also a wannabe photographer, which would you like to
                explore:
              </p>
              <div className="flex animate-pulse flex-row gap-3 hover:gap-3 sm:justify-center">
                <motion.button
                  className="rounded-md bg-white px-4 py-2 hover:bg-red-500"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  onClick={handleLeftClick}
                >
                  software engineer
                </motion.button>
                <motion.button
                  className="rounded-md bg-white px-4 py-2 hover:bg-red-500"
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
              src="src/assets/images/main-avatar.jpeg"
              alt=""
              className="max-h-full max-w-full sm:size-52"
            />
          </section>
        </div>
      </AnimatedPage>
    </AnimatePresence>
  );
};

export default Home;
