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
      className={`fixed top-0 left-0 w-full bg-transparent py-6 px-5 flex justify-between items-center z-50 transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0"
      } hover:opacity-100`}
    >
      <div className="size-10">
        <a href="/">
          <img src="/logo.png" alt="Logo" />
        </a>
      </div>
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
            {/* <a
              href="/photography"
              className=" text-[#cccccc] text-lg uppercase hover:text-[#ffffff] hover:border-b-2 hover:border-red-500"
            >
              Photographer
            </a> */}
          </li>
        </ul>
      </nav>
      <nav className="flex md:hidden">
        <ul className="flex space-x-8">
          <li>
            <a title="home" href="/" className="text-[#cccccc] hover:text-red-500">
              <IoHomeOutline size={20} />
            </a>
          </li>
          <li>
            <a title="tech profile" href="/techprofile" className="text-[#cccccc] hover:text-red-500">
              <FaCode size={20} />
            </a>
          </li>
          <li>
            {/* <a title="photography profile" href="/photography" className="text-[#cccccc] hover:text-red-500">
              <IoCameraOutline size={20} />
            </a> */}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
