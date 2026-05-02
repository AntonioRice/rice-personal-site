import { Helmet } from "react-helmet";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
import useIsMobile from "../hooks/useIsMobile";
import SiteFooter from "../components/SiteFooter";

const VITE_SERVER_URL = import.meta.env.VITE_SERVER_URL;

const reveal = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0 },
};

function Reveal({ children, delay = 0, amount = 0.15 }) {
  return (
    <motion.div
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      transition={{ duration: 0.7, ease: [0.2, 0.7, 0.2, 1], delay: delay / 1000 }}
    >
      {children}
    </motion.div>
  );
}

const Photography = () => {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);
  const isMobile = useIsMobile(1024);

  useEffect(() => {
    async function fetchAlbums() {
      try {
        const response = await axios.get(`${VITE_SERVER_URL}/albums`);
        setAlbums(response.data.data || []);
      } catch (err) {
        if (import.meta.env.DEV) console.error("Error retrieving albums", err);
      } finally {
        setLoading(false);
      }
    }
    fetchAlbums();
  }, []);

  return (
    <>
      <Helmet>
        <title>A. Rice | Photography</title>
        <meta
          name="description"
          content="Photography archive — Antonio Rice. Portraits, travel, and street, shot on Sony A7 III."
        />
        <link rel="canonical" href="https://antoniorice.com/photography" />
        <meta property="og:title" content="A. Rice | Photography" />
        <meta
          property="og:description"
          content="Photography archive — Antonio Rice. Portraits, travel, and street, shot on Sony A7 III."
        />
        <meta
          property="og:image"
          content="https://antoniorice.com/assets/images/site-image.webp"
        />
      </Helmet>

      <div
        style={{
          background: "var(--bg)",
          color: "var(--text)",
          fontFamily: "var(--font-mono)",
          minHeight: "100vh",
          paddingBottom: 80,
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: isMobile ? "0 18px" : "0 48px",
          }}
        >
          {/* Hero — narrow centered */}
          <header
            style={{
              maxWidth: 720,
              margin: "0 auto",
              paddingTop: isMobile ? 40 : 96,
              paddingBottom: isMobile ? 32 : 64,
              textAlign: "center",
            }}
          >
            <Reveal>
              <div
                className="mono-label"
                style={{
                  marginBottom: isMobile ? 14 : 24,
                  fontSize: isMobile ? 10 : 11,
                }}
              >
                {"// archive · /photography"}
              </div>
            </Reveal>
            <Reveal delay={80}>
              <h1
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: isMobile
                    ? 56
                    : "clamp(56px, 8vw, 112px)",
                  lineHeight: 0.95,
                  letterSpacing: "-0.04em",
                  fontWeight: 500,
                  margin: 0,
                }}
              >
                Photography<span style={{ color: "var(--accent)" }}>.</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: isMobile ? 15 : 17,
                  lineHeight: 1.55,
                  color: "var(--text-dim)",
                  marginTop: isMobile ? 18 : 24,
                  maxWidth: 560,
                  marginLeft: "auto",
                  marginRight: "auto",
                  textWrap: "pretty",
                }}
              >
                Mostly portraits, travel, and street. Shot on a Sony A7 III.
                New frames added when something earns it.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div
                style={{
                  marginTop: isMobile ? 22 : 28,
                  fontFamily: "var(--font-mono)",
                  fontSize: isMobile ? 9 : 10,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "var(--muted)",
                }}
              >
                {albums.length || "—"} albums · since 2018 · sony a7 iii · digital
              </div>
            </Reveal>
          </header>

          {/* Section header for the grid */}
          <Reveal>
            <header
              style={{
                display: "flex",
                alignItems: "baseline",
                justifyContent: "space-between",
                paddingBottom: isMobile ? 14 : 24,
                borderBottom: "1px solid var(--border-strong)",
                marginBottom: isMobile ? 22 : 32,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: isMobile ? 12 : 20,
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: isMobile ? 11 : 12,
                    color: "var(--accent)",
                  }}
                >
                  {"// 01"}
                </span>
                <h2
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: isMobile ? 26 : 40,
                    fontWeight: 500,
                    letterSpacing: "-0.025em",
                    margin: 0,
                  }}
                >
                  contact sheet
                  <span style={{ color: "var(--accent)" }}>.</span>
                </h2>
              </div>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: isMobile ? 9 : 11,
                  color: "var(--muted)",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}
              >
                {loading
                  ? "loading…"
                  : `${albums.length} ${
                      albums.length === 1 ? "record" : "records"
                    }`}
              </span>
            </header>
          </Reveal>

          {/* Album grid */}
          {loading ? (
            <div
              style={{
                padding: "48px 0",
                textAlign: "center",
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "var(--muted)",
              }}
            >
              fetching frames…<span className="cursor"></span>
            </div>
          ) : albums.length === 0 ? (
            <div
              style={{
                padding: "48px 0",
                textAlign: "center",
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "var(--muted)",
              }}
            >
              no frames available · check back soon
            </div>
          ) : (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: isMobile
                  ? "1fr"
                  : "repeat(auto-fill, minmax(280px, 1fr))",
                gap: 1,
                background: "var(--border)",
                border: "1px solid var(--border)",
              }}
            >
              {albums.map((album, i) => (
                <AlbumFrame key={album.id} album={album} index={i} />
              ))}
            </div>
          )}

          <SiteFooter marginTop={isMobile ? 32 : 56} />
        </div>
      </div>
    </>
  );
};

function AlbumFrame({ album, index }) {
  const idStr = `f${String(index + 1).padStart(3, "0")}`;
  const year =
    album.albumDate && album.albumDate.slice
      ? album.albumDate.slice(0, 4)
      : "—";
  return (
    <Link
      to={`/album/${album.id}`}
      state={{ name: album.name, year }}
      className="dossier-photo-frame"
      style={{
        background: "var(--bg)",
        position: "relative",
        display: "block",
        aspectRatio: "4 / 3",
        overflow: "hidden",
        textDecoration: "none",
        color: "inherit",
      }}
    >
      {album.coverImageUrl && (
        <img
          src={album.coverImageUrl}
          alt={album.name}
          loading={index < 6 ? "eager" : "lazy"}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "saturate(0.85)",
            transition: "filter 0.3s ease, transform 0.3s ease",
            display: "block",
          }}
        />
      )}
      <div
        style={{
          position: "absolute",
          top: 8,
          left: 8,
          fontFamily: "var(--font-mono)",
          fontSize: 9,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "var(--muted)",
          background: "rgba(0,0,0,0.55)",
          padding: "3px 6px",
        }}
      >
        {idStr}
      </div>
      <div
        style={{
          position: "absolute",
          right: 8,
          bottom: 8,
          fontFamily: "var(--font-mono)",
          fontSize: 9,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "var(--text)",
          background: "rgba(0,0,0,0.65)",
          padding: "3px 6px",
          border: "1px solid var(--border-strong)",
        }}
      >
        {album.name} · {year}
      </div>
    </Link>
  );
}


export default Photography;
