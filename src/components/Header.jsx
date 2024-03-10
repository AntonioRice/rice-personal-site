import React, { useEffect, useState } from "react";
import { IoHomeOutline, IoCameraOutline } from "react-icons/io5";
import { FaCode } from "react-icons/fa6";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);

  let lastScrollY = window.scrollY;

  useEffect(() => {
    const handleScroll = () => {
      if (lastScrollY < window.scrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full bg-transparent py-6 px-10 flex justify-between items-center z-50 transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0"
      } hover:opacity-100`}
    >
      <a href="/" className="text-[#ffffff] text-3xl hover:text-red-500 uppercase">
        ar<span className="text-red-500">.</span>
      </a>
      <nav className="hidden md:flex">
        <ul className="flex space-x-4">
          <li>
            <a
              className="text-[#cccccc] text-lg uppercase hover:text-[#ffffff] hover:border-b-2 hover:border-red-500"
              href="/"
            >
              home
            </a>
          </li>
          <li>
            <a
              className="text-[#cccccc] text-lg  uppercase hover:text-[#ffffff] hover:border-b-2 hover:border-red-500"
              href="/techprofile"
            >
              Software Engineer
            </a>
          </li>
          <li>
            <a
              href="/photography"
              className=" text-[#cccccc] text-lg uppercase hover:text-[#ffffff] hover:border-b-2 hover:border-red-500 pointer-events-none"
            >
              Photography
            </a>
          </li>
        </ul>
      </nav>
      <nav className="flex md:hidden">
        <ul className="flex space-x-3">
          <li>
            <a href="/" className="text-[#cccccc]">
              <IoHomeOutline size={20} />
            </a>
          </li>
          <li>
            <a href="/techprofile" className="text-[#cccccc]">
              <FaCode size={20} />
            </a>
          </li>
          <li>
            <a href="/photography" className="text-[#cccccc] pointer-events-none">
              <IoCameraOutline size={20} />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
