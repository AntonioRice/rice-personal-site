import useEventsTracker from "../hooks/useEventsTracker";
import { FaFilePdf, FaGithub, FaLinkedin } from "react-icons/fa6";

const SocialLinks = ({ size }) => {
  const trackEvent = useEventsTracker("User Interaction");

  return (
    <section className="mt-5 flex justify-center space-x-4">
      <a
        title="Linkedin"
        href="https://www.linkedin.com/in/riceantonio"
        target="_blank"
        rel="noopener noreferrer"
        className="transform transition duration-300 hover:scale-110 hover:text-blue-700"
        onClick={() => trackEvent("Linkedin button clicked", "Linkedin")}
      >
        <FaLinkedin size={size} />
      </a>
      <a
        title="Github"
        href="https://www.github.com/AntonioRice"
        target="_blank"
        rel="noopener noreferrer"
        className="transform transition duration-300 hover:scale-110 hover:text-white"
        onClick={() => trackEvent("Github button clicked", "Github")}
      >
        <FaGithub size={size} />
      </a>
      <a
        title="Resume"
        href="/assets/ALR-Resume-2024-v6.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="transform transition duration-300 hover:scale-110 hover:text-red-500"
        onClick={() => trackEvent("Resume downloaded", "ALR Resume")}
      >
        <FaFilePdf size={size} />
      </a>
    </section>
  );
};

export default SocialLinks;
