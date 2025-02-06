import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { IoMenu, IoClose } from "react-icons/io5";
import { useScrollContext } from "../context/ScrollContext";
import NavItem from "./NavItem";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { sections, activeSection } = useScrollContext();

  const [isVisible, setIsVisible] = useState(true);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  let lastScrollY = useRef(window.scrollY);
  const pendingScroll = useRef(null);

  useEffect(() => {
    if (pendingScroll.current && location.pathname === "/") {
      const sectionId = pendingScroll.current;
      pendingScroll.current = null;

      setTimeout(() => {
        const section = sections.find((s) => s.id === sectionId);
        if (section?.ref?.current) {
          section.ref.current.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [location.pathname, sections]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 50) {
        setIsVisible(true);
      } else if (lastScrollY < window.scrollY) {
        setIsVisible(false);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const linkClasses = (path) => {
    const baseClasses =
      "text-[#6b7280] hover:text-[#ffffff] sm:text-lg lg:text-sm";
    const activeClasses = "border-b-2 border-red-500 !text-[#ffffff]";

    return location.pathname === path
      ? `${baseClasses} ${activeClasses}`
      : baseClasses;
  };

  const handleSectionClick = (sectionId) => {
    setIsMobileNavOpen(false);

    if (location.pathname !== "/") {
      pendingScroll.current = sectionId;
      navigate("/");
    } else {
      const section = sections.find((s) => s.id === sectionId);
      if (section?.ref?.current) {
        section.ref.current.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <header
      className={`fixed left-0 top-0 z-50 flex w-full items-center justify-between bg-transparent px-5 py-4 transition-opacity duration-500 ${
        isVisible || isMobileNavOpen ? "opacity-100" : "opacity-0"
      } hover:opacity-100`}
    >
      <div className="size-10">
        <a href="/">
          <img src="/assets/images/logo.png" alt="Antonio Rice" />
        </a>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex">
        <ul className="flex space-x-4">
          <li>
            <a className={linkClasses("/")} href="/">
              Software Engineering
            </a>
          </li>
          <li>
            <a className={linkClasses("/photography")} href="/photography">
              Photography
            </a>
          </li>
        </ul>
      </nav>

      {/* Mobile Navigation Toggle Button */}
      <button className="z-40 text-white md:hidden" onClick={toggleMobileNav}>
        {isMobileNavOpen ? <IoClose size={20} /> : <IoMenu size={20} />}
      </button>

      {/* Mobile Popout Side Navigation */}
      <nav
        className={`fixed right-0 top-0 z-20 h-full w-full bg-black bg-opacity-95 transition-transform duration-300 ease-in-out md:hidden ${
          isMobileNavOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="mt-16 flex flex-col space-y-4 p-4">
          <li>
            <a
              className={linkClasses("/")}
              href="/"
              onClick={() => setIsMobileNavOpen(false)}
            >
              Software Engineering
            </a>
          </li>
          <ul className="flex flex-col px-4">
            {sections.map((section) => (
              <li key={section.id}>
                <NavItem
                  id={section.id}
                  isActive={activeSection === section.id}
                  onClick={() => handleSectionClick(section.id)}
                >
                  <div className="text-lg">
                    {section.id.charAt(0).toUpperCase() + section.id.slice(1)}
                  </div>
                </NavItem>
              </li>
            ))}
          </ul>
          <li>
            <a
              className={linkClasses("/photography")}
              href="/photography"
              onClick={() => setIsMobileNavOpen(false)}
            >
              Photography
            </a>
          </li>
          <li>
            <a
              className={linkClasses("/cv")}
              href="/cv"
              onClick={() => setIsMobileNavOpen(false)}
            >
              CV
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
