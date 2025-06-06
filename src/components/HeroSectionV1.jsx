import { useScrollContext } from "../context/ScrollContext";
import { motion } from "framer-motion";
import skills from "../utils/skillsData";

function HeroSectionV1() {
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
          alt="Antonio Rice"
        />
      </a>
      <h1 className="mb-5 text-5xl font-bold tracking-tight sm:text-4xl">
        Welcome
        <a
          href="https://www.kappaalphapsi1911.com/"
          title="Kappa Alpha Psi Fraternity, Inc. 1911"
          rel="noopener noreferrer"
          target="_blank"
          className="ml-1 inline-block size-3 animate-pulse rounded-full bg-red-500 sm:size-2"
          aria-label="Learn about my organization, Kappa Alpha Psi Fraternity Inc."
        />
      </h1>
      <p className="mx-auto mb-5 max-w-4xl p-5 text-lg">
        {skills.hero.description}
      </p>
      <motion.button
        title="contact-me"
        className="h-10 w-36 animate-pulse rounded-md bg-[#cccccc] text-sm text-black hover:animate-none hover:bg-gray-200"
        onClick={() => {
          contactRef.current.scrollIntoView({ behavior: "smooth" });
        }}
      >
        contact me
      </motion.button>
    </section>
  );
}

export default HeroSectionV1;
