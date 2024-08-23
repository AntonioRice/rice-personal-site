import { useNavigate } from "react-router-dom";
import { AnimatedPage } from "../components";
import { motion } from "framer-motion";

const ErrorPage = () => {
  const navigate = useNavigate();

  const navigateHome = () => {
    navigate("/");
  };

  return (
    <AnimatedPage>
      <section className="page-wrapper flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-[#ffffff] sm:text-lg">
          Whoops, you shouldn't have gotten here
          <span className="text-red-500">...</span>
        </h1>
        <motion.button
          title="returnHome"
          className="mt-5 animate-pulse rounded-md bg-[#cccccc] px-4 py-2 text-sm font-semibold text-black hover:bg-gray-200"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          onClick={navigateHome}
        >
          Return Home
        </motion.button>
      </section>
    </AnimatedPage>
  );
};

export default ErrorPage;
