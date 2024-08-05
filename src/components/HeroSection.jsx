import { useScrollContext } from "../context/ScrollContext";
import { motion } from "framer-motion";
import skills from "../utils/skillsData";

function HeroSection() {
  const { contactRef } = useScrollContext();

  return (
    <section className="section-wrapper flex min-h-screen flex-col items-center justify-center sm:px-0">
      <a
        title="Linkedin"
        href="https://www.linkedin.com/in/riceantonio"
        target="_blank"
        rel="noopener noreferrer"
        className="mb-4 mt-10 h-48 w-48"
      >
        <img
          className="mx-auto mb-6 transform rounded-full ring-4 ring-[#cccccc] transition duration-300 ease-in-out hover:scale-110 hover:ring-[#ffffff]"
          src="/assets/images/avatar.jpeg"
          alt="Antonio Rice Head shot"
        />
      </a>
      <h1 className="mb-5 text-6xl font-bold text-[#ffffff] sm:text-5xl">
        welcome
        <a
          href="https://www.kappaalphapsi1911.com/"
          title="Kappa Alpha Psi Fraternity, Inc. 1911"
          rel="noopener noreferrer"
          target="_blank"
          className="ml-1 inline-block size-4 animate-pulse rounded-full bg-red-500 sm:size-2"
          aria-label="Learn about my organization, Kappa Alpha Psi Fraternity Inc."
        ></a>
      </h1>
      <p className="mx-auto mb-5 max-w-4xl p-5 text-2xl font-light text-[#cccccc]">
        {skills.hero.description}
      </p>
      <motion.button
        title="contactMe"
        className="h-10 w-36 animate-pulse rounded-md bg-[#cccccc] text-black hover:animate-none hover:bg-gray-200"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        onClick={() => {
          contactRef.current.scrollIntoView({ behavior: "smooth" });
        }}
      >
        contact me
      </motion.button>
    </section>
  );
}

export default HeroSection;
