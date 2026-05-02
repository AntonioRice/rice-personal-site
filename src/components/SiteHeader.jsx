import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useIsMobile from "../hooks/useIsMobile";

const NAV_ITEMS = [
  { id: "about", label: "about" },
  { id: "experience", label: "work" },
  { id: "projects", label: "projects" },
  { id: "contact", label: "contact" },
];

const topNavLink = {
  textDecoration: "none",
  color: "inherit",
  cursor: "pointer",
};

const SiteHeader = () => {
  const isMobile = useIsMobile(1024);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const isIndex = pathname === "/";

  const goToSection = (id) => (e) => {
    e.preventDefault();
    setMenuOpen(false);
    if (isIndex) {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(`/#${id}`);
    }
  };

  if (isMobile) {
    return (
      <>
        <div
          style={{
            position: "sticky",
            top: 0,
            zIndex: 10,
            background: "rgba(10,10,10,0.92)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            borderBottom: "1px solid var(--border)",
            padding: "12px 18px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 11,
            fontFamily: "var(--font-mono)",
          }}
        >
          {isIndex ? (
            <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
              <span style={{ color: "var(--accent)" }}>●</span>
              <span style={{ color: "var(--muted)" }}>antoniorice.com</span>
            </div>
          ) : (
            <Link
              to="/"
              className="dossier-hover"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 10,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "var(--text)",
                border: "1px solid var(--border-strong)",
                padding: "6px 10px",
                textDecoration: "none",
              }}
            >
              ← index
            </Link>
          )}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="dossier-hover"
            style={{
              background: "transparent",
              border: "1px solid var(--border-strong)",
              color: "var(--text)",
              fontFamily: "var(--font-mono)",
              fontSize: 10,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              padding: "6px 10px",
              cursor: "pointer",
            }}
          >
            {menuOpen ? "close" : "menu"}
          </button>
        </div>
        {menuOpen && (
          <div
            style={{
              position: "sticky",
              top: 41,
              zIndex: 9,
              background: "rgba(10,10,10,0.96)",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
              borderBottom: "1px solid var(--border)",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {NAV_ITEMS.map(({ id, label }) => (
              <a
                key={id}
                href={isIndex ? `#${id}` : `/#${id}`}
                onClick={goToSection(id)}
                className="dossier-hover"
                style={{
                  padding: "16px 18px",
                  borderBottom: "1px solid var(--border)",
                  fontFamily: "var(--font-mono)",
                  fontSize: 12,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "var(--text)",
                  textDecoration: "none",
                }}
              >
                {label}
              </a>
            ))}
            <Link
              to="/photography"
              onClick={() => setMenuOpen(false)}
              className="dossier-hover dossier-photography-link"
              style={{
                padding: "16px 18px",
                borderBottom: "1px solid var(--border)",
                fontFamily: "var(--font-mono)",
                fontSize: 12,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "var(--accent)",
                textDecoration: "none",
              }}
            >
              photography →
            </Link>
          </div>
        )}
      </>
    );
  }

  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        zIndex: 10,
        background: "rgba(10,10,10,0.92)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        borderBottom: "1px solid var(--border)",
        padding: "14px 48px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontSize: 12,
        fontFamily: "var(--font-mono)",
      }}
    >
      <div style={{ display: "flex", gap: 18, alignItems: "center" }}>
        {!isIndex && (
          <>
            <Link
              to="/"
              className="dossier-hover"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "var(--text)",
                border: "1px solid var(--border-strong)",
                padding: "8px 12px",
                textDecoration: "none",
              }}
            >
              ← back to index
            </Link>
            <span style={{ color: "var(--muted-2)" }}>/</span>
          </>
        )}
        <span style={{ color: "var(--accent)" }}>●</span>
        <span style={{ color: "var(--muted)" }}>antoniorice.com</span>
        <span style={{ color: "var(--muted-2)" }}>/</span>
        <span style={{ color: "var(--text)" }}>
          {isIndex
            ? "index"
            : pathname.startsWith("/album/")
              ? "photography"
              : pathname.replace(/^\//, "")}
        </span>
      </div>
      <div
        style={{
          display: "flex",
          gap: 24,
          color: "var(--muted)",
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          fontSize: 11,
        }}
      >
        {NAV_ITEMS.slice(0, 3).map(({ id, label }) => (
          <a
            key={id}
            href={isIndex ? `#${id}` : `/#${id}`}
            onClick={goToSection(id)}
            className="dossier-nav-link"
            style={topNavLink}
          >
            {label}
          </a>
        ))}
        {pathname.startsWith("/photography") || pathname.startsWith("/album/") ? (
          <span
            style={{
              color: "var(--accent)",
              cursor: "default",
            }}
          >
            photography →
          </span>
        ) : (
          <Link
            to="/photography"
            className="dossier-photography-link"
            style={{ ...topNavLink, color: "var(--accent)" }}
          >
            photography →
          </Link>
        )}
        <a
          href={isIndex ? "#contact" : "/#contact"}
          onClick={goToSection("contact")}
          className="dossier-nav-link"
          style={topNavLink}
        >
          contact
        </a>
      </div>
    </div>
  );
};

export default SiteHeader;
