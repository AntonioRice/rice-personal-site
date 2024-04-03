import React from "react";
import { useScrollContext } from "../context/ScrollContext";

function HeroSection() {
  const { contactRef } = useScrollContext();

  return (
    <section className="section-wrapper flex flex-col items-center justify-center sm:px-0">
      <a
        title="Linkedin"
        href="https://www.linkedin.com/in/riceantonio"
        target="_blank"
        rel="noopener noreferrer"
        className="mb-4 mt-10 h-48 w-48"
      >
        <img
          className="mx-auto mb-6 rounded-full ring-4 ring-[#cccccc] transition duration-300 ease-in-out hover:ring-red-500"
          src="src/assets/images/avatar.jpeg"
          alt="Antonio Rice Headshot"
        />
      </a>
      <h1 className="mb-5 text-6xl font-bold text-[#cccccc] sm:text-5xl">
        Hi, I'm <span className="text-[#ffffff]">Antonio</span>
        <a
          href="https://www.kappaalphapsi1911.com/"
          title="Kappa Alpha Psi Fraternity, Inc. 1911"
          rel="noopener noreferrer"
          target="_blank"
          className="ml-1 inline-block size-4 rounded-full bg-red-500 sm:size-2"
          aria-label="Learn about my organization, Kappa Alpha Psi Fraternity Inc."
        ></a>
      </h1>
      <p className="mb-5 p-5 text-center text-2xl font-extralight text-[#cccccc]">
        For over half a decade, I've been at the forefront of innovation,
        crafting an industry-leading supply chain visibility tool. Now, I'm
        excited to turn the page and dive into the next chapter of my
        professional journey!
      </p>
      <button
        onClick={() => {
          contactRef.current.scrollIntoView({ behavior: "smooth" });
        }}
        className="rounded-md bg-[#cccccc] px-4 py-2 text-black transition duration-300 ease-in-out hover:bg-red-500"
      >
        Contact me
      </button>
    </section>
  );
}

export default HeroSection;
