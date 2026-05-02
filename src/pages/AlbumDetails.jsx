import { useEffect, useState } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import axios from "axios";
import { Helmet } from "react-helmet";
import { ImageWithLoader } from "../components";
import useIsMobile from "../hooks/useIsMobile";
import SiteFooter from "../components/SiteFooter";
import Reveal from "../components/Reveal";

const VITE_SERVER_URL = import.meta.env.VITE_SERVER_URL;

const AlbumDetails = () => {
  const location = useLocation();
  const { name, year } = location.state || {};
  const { albumId } = useParams();
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const isMobile = useIsMobile(1024);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(
          `${VITE_SERVER_URL}/albums/${albumId}`,
        );
        const sorted = response.data.images.sort((a, b) => {
          const nameA = a.url.toLowerCase();
          const nameB = b.url.toLowerCase();
          if (nameA < nameB) return -1;
          if (nameA > nameB) return 1;
          return 0;
        });
        setImages(sorted);
      } catch (error) {
        if (import.meta.env.DEV)
          console.error("Failed to fetch album images", error);
      } finally {
        setLoading(false);
      }
    };
    fetchImages();
  }, [albumId]);

  return (
    <>
      <Helmet>
        <title>
          {name ? `${name} | A. Rice Photography` : "A. Rice | Photography"}
        </title>
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
          {/* Sub-nav back chip */}
          <div
            style={{
              paddingTop: isMobile ? 18 : 28,
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            <Link
              to="/photography"
              className="dossier-hover"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: isMobile ? 10 : 11,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "var(--text)",
                border: "1px solid var(--border-strong)",
                padding: isMobile ? "6px 10px" : "8px 12px",
                textDecoration: "none",
              }}
            >
              ← contact sheet
            </Link>
          </div>

          {/* Hero */}
          <header
            style={{
              maxWidth: 720,
              margin: "0 auto",
              paddingTop: isMobile ? 32 : 64,
              paddingBottom: isMobile ? 28 : 56,
              textAlign: "center",
            }}
          >
            <Reveal>
              <div
                className="mono-label"
                style={{
                  marginBottom: isMobile ? 14 : 22,
                  fontSize: isMobile ? 10 : 11,
                }}
              >
                {`// archive · /album/${albumId}`}
              </div>
            </Reveal>
            <Reveal delay={80}>
              <h1
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: isMobile ? 44 : "clamp(48px, 7vw, 88px)",
                  lineHeight: 0.98,
                  letterSpacing: "-0.035em",
                  fontWeight: 500,
                  margin: 0,
                }}
              >
                {name || "Album"}
                <span style={{ color: "var(--accent)" }}>.</span>
              </h1>
            </Reveal>
            {year && (
              <Reveal delay={160}>
                <div
                  style={{
                    marginTop: isMobile ? 14 : 18,
                    fontFamily: "var(--font-mono)",
                    fontSize: isMobile ? 10 : 11,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "var(--muted)",
                  }}
                >
                  {year} · {images.length || "—"} frames
                </div>
              </Reveal>
            )}
          </header>

          {/* Grid */}
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
              loading frames…<span className="cursor"></span>
            </div>
          ) : (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: isMobile
                  ? "1fr"
                  : "repeat(auto-fill, minmax(320px, 1fr))",
                gap: 1,
                background: "var(--border)",
                border: "1px solid var(--border)",
              }}
            >
              {images.map((image, i) => (
                <div
                  key={image.id}
                  className="dossier-photo-frame"
                  style={{
                    background: "var(--bg)",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <ImageWithLoader
                    src={image.url}
                    alt={`${name || "Album"} — frame ${i + 1}`}
                    loading={i < 6 ? "eager" : "lazy"}
                  />
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
                      pointerEvents: "none",
                    }}
                  >
                    f{String(i + 1).padStart(3, "0")}
                  </div>
                </div>
              ))}
            </div>
          )}

          <SiteFooter marginTop={isMobile ? 32 : 56} />
        </div>
      </div>
    </>
  );
};

export default AlbumDetails;
