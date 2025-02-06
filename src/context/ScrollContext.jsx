import { createContext, useContext, useRef, useState } from "react";

const ScrollContext = createContext();

export const useScrollContext = () => useContext(ScrollContext);

export const ScrollProvider = ({ children }) => {
  const [activeSection, setActiveSection] = useState("");

  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectRef = useRef(null);
  const learningRef = useRef(null);
  const contactRef = useRef(null);

  const sections = [
    { id: "home", ref: heroRef },
    { id: "about", ref: aboutRef },
    { id: "experience", ref: experienceRef },
    { id: "projects", ref: projectRef },
    { id: "learning", ref: learningRef },
    { id: "contact", ref: contactRef },
  ];

  return (
    <ScrollContext.Provider
      value={{
        heroRef,
        aboutRef,
        experienceRef,
        projectRef,
        contactRef,
        learningRef,
        sections,
        activeSection,
        setActiveSection,
      }}
    >
      {children}
    </ScrollContext.Provider>
  );
};
