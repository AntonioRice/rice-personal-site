import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa6";
import { SiGoogledocs } from "react-icons/si";
import { TfiEmail } from "react-icons/tfi";

function Contact() {
  return (
    <section className="section-wrapper mt-20 flex flex-col items-center justify-center !border-b-0">
      <h1 className="text-8xl font-bold sm:text-6xl">
        Contact
        <div className="ml-2 inline-block size-5 rounded-full bg-red-500 sm:size-3" />
      </h1>
      <h1 className="mb-5 text-center text-2xl font-extralight text-[#cccccc] sm:text-xl">
        Send me an email if you want to connect. You can also find me on
        <span className="ml-1">
          <a
            href="https://www.linkedin.com/in/riceantonio"
            target="_blank"
            rel="noopener noreferrer"
            className="decoration-red-500 hover:text-[#ffffff] hover:underline"
          >
            Linkedin!
          </a>
        </span>
      </h1>
      <a
        title="Email"
        href="mailto:contact@antoniorice.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex cursor-pointer items-center space-x-2 hover:text-[#e35757]"
      >
        <TfiEmail size={25} className="mt-2" />
        <span className="text-2xl underline sm:text-xl">
          contact@antoniorice.com
        </span>
      </a>
      <section className="mt-5 flex space-x-4">
        <a
          title="Linkedin"
          href="https://www.linkedin.com/in/riceantonio"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#e35757]"
        >
          <FaLinkedin size={30} />
        </a>
        <a
          title="Github"
          href="https://www.github.com/AntonioRice"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#e35757]"
        >
          <FaGithub size={30} />
        </a>
        <a
          title="Resume"
          href="/ALR-Resume-2024-v2.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#e35757]"
        >
          <SiGoogledocs size={30} />
        </a>
      </section>
    </section>
  );
}

export default Contact;
