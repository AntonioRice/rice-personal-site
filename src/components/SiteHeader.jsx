import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const NAV_ITEMS = [
  { id: "about", label: "about" },
  { id: "experience", label: "work" },
  { id: "projects", label: "projects" },
  { id: "contact", label: "contact" },
];

const HEADER_CLASS =
  "sticky top-0 z-10 flex items-center justify-between border-b border-rule font-mono text-[11px] " +
  "px-[18px] py-3 lg:px-12 lg:py-3.5 lg:text-[12px] " +
  "[background:rgba(10,10,10,0.92)] [backdrop-filter:blur(8px)] [-webkit-backdrop-filter:blur(8px)]";

const SiteHeader = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const isIndex = pathname === "/";
  const isPhotography =
    pathname.startsWith("/photography") || pathname.startsWith("/album/");

  const goToSection = (id) => (event) => {
    event.preventDefault();
    setMenuOpen(false);
    if (isIndex) {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(`/#${id}`);
    }
  };

  return (
    <>
      <div className={HEADER_CLASS}>
        <HeaderLeft isIndex={isIndex} pathname={pathname} />
        <HeaderRight
          isIndex={isIndex}
          isPhotography={isPhotography}
          goToSection={goToSection}
          menuOpen={menuOpen}
          onToggleMenu={() => setMenuOpen((current) => !current)}
        />
      </div>
      {menuOpen && (
        <MobileMenu goToSection={goToSection} onClose={() => setMenuOpen(false)} />
      )}
    </>
  );
};

const HeaderLeft = ({ isIndex, pathname }) => {
  const breadcrumbLabel = pathname.startsWith("/album/")
    ? "photography"
    : pathname.replace(/^\//, "") || "index";

  return (
    <div className="flex items-center gap-2 lg:gap-4">
      {!isIndex && (
        <>
          <Link
            to="/"
            className="dossier-hover hidden border border-rule-strong px-3 py-2 font-mono text-[11px] uppercase tracking-[0.06em] text-fg no-underline lg:inline-block"
          >
            ← back to index
          </Link>
          <span className="hidden text-faint lg:inline">/</span>
        </>
      )}
      <span className="text-accent">●</span>
      <span className="text-muted">antoniorice.com</span>
      <span className="hidden text-faint lg:inline">/</span>
      <span className="hidden text-fg lg:inline">{breadcrumbLabel}</span>
    </div>
  );
};

const HeaderRight = ({
  isIndex,
  isPhotography,
  goToSection,
  menuOpen,
  onToggleMenu,
}) => (
  <>
    <nav className="hidden gap-6 font-mono text-[11px] uppercase tracking-[0.06em] text-muted lg:flex">
      {NAV_ITEMS.slice(0, 3).map(({ id, label }) => (
        <NavLink key={id} id={id} isIndex={isIndex} goToSection={goToSection}>
          {label}
        </NavLink>
      ))}
      <PhotographyLink isPhotography={isPhotography} />
      <NavLink id="contact" isIndex={isIndex} goToSection={goToSection}>
        contact
      </NavLink>
    </nav>
    <button
      onClick={onToggleMenu}
      className="dossier-hover cursor-pointer border border-rule-strong bg-transparent px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.06em] text-fg lg:hidden"
    >
      {menuOpen ? "close" : "menu"}
    </button>
  </>
);

const NavLink = ({ id, isIndex, goToSection, children }) => (
  <a
    href={isIndex ? `#${id}` : `/#${id}`}
    onClick={goToSection(id)}
    className="dossier-nav-link cursor-pointer text-inherit no-underline"
  >
    {children}
  </a>
);

const PhotographyLink = ({ isPhotography }) => {
  if (isPhotography) {
    return <span className="cursor-default text-accent">photography →</span>;
  }
  return (
    <Link
      to="/photography"
      className="dossier-photography-link text-accent no-underline"
    >
      photography →
    </Link>
  );
};

const MobileMenu = ({ goToSection, onClose }) => (
  <div
    className="sticky z-[9] flex flex-col border-b border-rule lg:hidden [background:rgba(10,10,10,0.96)] [backdrop-filter:blur(8px)] [-webkit-backdrop-filter:blur(8px)]"
    style={{ top: 41 }}
  >
    {NAV_ITEMS.map(({ id, label }) => (
      <a
        key={id}
        href={`#${id}`}
        onClick={goToSection(id)}
        className="dossier-hover border-b border-rule p-[16px_18px] font-mono text-[12px] uppercase tracking-[0.06em] text-fg no-underline"
      >
        {label}
      </a>
    ))}
    <Link
      to="/photography"
      onClick={onClose}
      className="dossier-hover dossier-photography-link border-b border-rule p-[16px_18px] font-mono text-[12px] uppercase tracking-[0.06em] text-accent no-underline"
    >
      photography →
    </Link>
  </div>
);

export default SiteHeader;
