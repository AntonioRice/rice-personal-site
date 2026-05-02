import { useEffect, useState } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import axios from "axios";
import { Helmet } from "react-helmet";
import { ImageWithLoader } from "../components";
import SiteFooter from "../components/SiteFooter";
import Reveal from "../components/Reveal";

const VITE_SERVER_URL = import.meta.env.VITE_SERVER_URL;

const AlbumDetails = () => {
  const location = useLocation();
  const { name, year } = location.state || {};
  const { albumId } = useParams();
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    const fetchImages = async () => {
      try {
        const response = await axios.get(
          `${VITE_SERVER_URL}/albums/${albumId}`,
          { signal: controller.signal },
        );
        const sorted = response.data.images.sort((left, right) => {
          const leftName = left.url.toLowerCase();
          const rightName = right.url.toLowerCase();
          if (leftName < rightName) return -1;
          if (leftName > rightName) return 1;
          return 0;
        });
        setImages(sorted);
      } catch (error) {
        if (axios.isCancel(error) || error?.name === "CanceledError") return;
        if (import.meta.env.DEV)
          console.error("Failed to fetch album images", error);
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    };
    fetchImages();
    return () => controller.abort();
  }, [albumId]);

  return (
    <>
      <Helmet>
        <title>
          {name ? `${name} | A. Rice Photography` : "A. Rice | Photography"}
        </title>
      </Helmet>
      <div className="min-h-screen bg-canvas pb-20 font-mono text-fg">
        <div className="mx-auto max-w-[1280px] px-[18px] lg:px-12">
          <BackToContactSheet />
          <Hero albumId={albumId} name={name} year={year} count={images.length} />
          <ImageGrid images={images} loading={loading} albumName={name} />
          <SiteFooter />
        </div>
      </div>
    </>
  );
};

const BackToContactSheet = () => (
  <div className="flex items-center gap-3 pt-4 lg:pt-7">
    <Link
      to="/photography"
      className="dossier-hover border border-rule-strong px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.06em] text-fg no-underline lg:px-3 lg:py-2 lg:text-[11px]"
    >
      ← contact sheet
    </Link>
  </div>
);

const Hero = ({ albumId, name, year, count }) => (
  <header className="mx-auto max-w-[720px] pb-7 pt-8 text-center lg:pb-14 lg:pt-16">
    <Reveal>
      <div className="mono-label mb-3.5 text-[10px] lg:mb-5 lg:text-[11px]">
        {`// archive · /album/${albumId}`}
      </div>
    </Reveal>
    <Reveal delay={80}>
      <h1
        className="m-0 font-sans font-medium leading-[0.98] tracking-[-0.035em]"
        style={{ fontSize: "clamp(44px, 7vw, 88px)" }}
      >
        {name || "Album"}
        <span className="text-accent">.</span>
      </h1>
    </Reveal>
    {year && (
      <Reveal delay={160}>
        <div className="mt-3.5 font-mono text-[10px] uppercase tracking-[0.08em] text-muted lg:mt-4 lg:text-[11px]">
          {year} · {count || "-"} frames
        </div>
      </Reveal>
    )}
  </header>
);

const ImageGrid = ({ images, loading, albumName }) => {
  if (loading) {
    return (
      <div className="py-12 text-center font-mono text-[11px] uppercase tracking-[0.08em] text-muted">
        loading frames…<span aria-hidden="true" className="cursor" />
      </div>
    );
  }
  return (
    <div
      className="grid gap-px border border-rule bg-rule"
      style={{
        gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
      }}
    >
      {images.map((image, imageIndex) => (
        <ImageFrame
          key={image.id}
          image={image}
          index={imageIndex}
          albumName={albumName}
        />
      ))}
    </div>
  );
};

const ImageFrame = ({ image, index, albumName }) => (
  <div className="dossier-photo-frame relative overflow-hidden bg-canvas">
    <ImageWithLoader
      src={image.url}
      alt={`${albumName || "Album"} - frame ${index + 1}`}
      loading={index < 6 ? "eager" : "lazy"}
    />
    <div className="pointer-events-none absolute left-2 top-2 bg-black/55 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-[0.08em] text-muted">
      f{String(index + 1).padStart(3, "0")}
    </div>
  </div>
);

export default AlbumDetails;
