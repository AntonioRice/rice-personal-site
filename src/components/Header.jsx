import { useEffect, useState } from "react";
import { IoHomeOutline, IoCameraOutline, IoCodeSlash } from "react-icons/io5";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);

  let lastScrollY = window.scrollY;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 50) {
        setIsVisible(true);
      } else if (lastScrollY < window.scrollY) {
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

  const linkClasses =
    "uppercase text-[#cccccc] hover:border-b-2 hover:border-red-500 hover:text-[#ffffff] text-sm";
  const iconLinkClasses = "text-[#cccccc] hover:text-red-500";

  return (
    <header
      className={`fixed left-0 top-0 z-50 flex w-full items-center justify-between bg-transparent px-5 py-6 transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0"
      } hover:opacity-100`}
    >
      <div className="size-10">
        <a href="/">
          <img src="/assets/images/logo.png" alt="Antonio Rice" />
        </a>
      </div>

      <nav className="hidden md:flex">
        <ul className="flex space-x-4">
          <li>
            <a className={linkClasses} href="/">
              Software Engineer
            </a>
          </li>
          <li>
            <a className={linkClasses} href="/photographer">
              Photographer
            </a>
          </li>
        </ul>
      </nav>

      <nav className="flex rounded-2xl bg-black bg-opacity-80 p-2 md:hidden">
        <ul className="flex space-x-8">
          <li>
            <a title="home" href="/" className={iconLinkClasses}>
              <IoCodeSlash size={20} />
            </a>
          </li>
          <li>
            <a
              title="photography profile"
              href="/photographer"
              className={iconLinkClasses}
            >
              <IoCameraOutline size={20} />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
