import { Helmet } from "react-helmet";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import SiteFooter from "../components/SiteFooter";
import Reveal from "../components/Reveal";

const VITE_SERVER_URL = import.meta.env.VITE_SERVER_URL;

const Photography = () => {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    const fetchAlbums = async () => {
      try {
        const response = await axios.get(`${VITE_SERVER_URL}/albums`, {
          signal: controller.signal,
        });
        setAlbums(response.data.data || []);
      } catch (err) {
        if (axios.isCancel(err) || err?.name === "CanceledError") return;
        if (import.meta.env.DEV) console.error("Error retrieving albums", err);
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    };
    fetchAlbums();
    return () => controller.abort();
  }, []);

  return (
    <>
      <Helmet>
        <title>A. Rice | Photography</title>
        <meta
          name="description"
          content="Photography archive - Antonio Rice. Portraits, travel, and street, shot on Sony A7 III."
        />
        <link rel="canonical" href="https://antoniorice.com/photography" />
        <meta property="og:title" content="A. Rice | Photography" />
        <meta
          property="og:description"
          content="Photography archive - Antonio Rice. Portraits, travel, and street, shot on Sony A7 III."
        />
        <meta
          property="og:image"
          content="https://antoniorice.com/assets/images/site-image.webp"
        />
      </Helmet>

      <div className="min-h-screen bg-canvas pb-20 font-mono text-fg">
        <div className="mx-auto max-w-[1280px] px-[18px] lg:px-12">
          <Hero albumCount={albums.length} />
          <ContactSheetHeader albumCount={albums.length} loading={loading} />
          <AlbumGrid albums={albums} loading={loading} />
          <SiteFooter />
        </div>
      </div>
    </>
  );
};

const Hero = ({ albumCount }) => (
  <header className="mx-auto max-w-[720px] pb-8 pt-10 text-center lg:pb-16 lg:pt-24">
    <Reveal>
      <div className="mono-label mb-3.5 text-[10px] lg:mb-6 lg:text-[11px]">
        {"// archive · /photography"}
      </div>
    </Reveal>
    <Reveal delay={80}>
      <h1
        className="m-0 font-sans font-medium leading-[0.95] tracking-[-0.04em]"
        style={{ fontSize: "clamp(56px, 8vw, 112px)" }}
      >
        Photography<span className="text-accent">.</span>
      </h1>
    </Reveal>
    <Reveal delay={160}>
      <p
        className="mx-auto mt-[18px] max-w-[560px] font-sans text-[15px] leading-[1.55] text-dim lg:mt-6 lg:text-[17px]"
        style={{ textWrap: "pretty" }}
      >
        Mostly portraits, travel, and street. Shot on a Sony A7 III. New frames
        added when something earns it.
      </p>
    </Reveal>
    <Reveal delay={240}>
      <div className="mt-5 font-mono text-[9px] uppercase tracking-[0.08em] text-muted lg:mt-7 lg:text-[10px]">
        {albumCount || "-"} albums · since 2018 · sony a7 iii · digital
      </div>
    </Reveal>
  </header>
);

const ContactSheetHeader = ({ albumCount, loading }) => (
  <Reveal>
    <header className="mb-5 flex items-baseline justify-between border-b border-rule-strong pb-3.5 lg:mb-8 lg:pb-6">
      <div className="flex items-baseline gap-3 lg:gap-5">
        <span className="font-mono text-[11px] text-accent lg:text-[12px]">
          {"// 01"}
        </span>
        <h2 className="m-0 font-sans text-[26px] font-medium tracking-[-0.025em] lg:text-[40px]">
          contact sheet<span className="text-accent">.</span>
        </h2>
      </div>
      <span className="font-mono text-[9px] uppercase tracking-[0.06em] text-muted lg:text-[11px]">
        {loading
          ? "loading…"
          : `${albumCount} ${albumCount === 1 ? "record" : "records"}`}
      </span>
    </header>
  </Reveal>
);

const EmptyState = ({ message }) => (
  <div className="py-12 text-center font-mono text-[11px] uppercase tracking-[0.08em] text-muted">
    {message}
  </div>
);

const AlbumGrid = ({ albums, loading }) => {
  if (loading) {
    return (
      <div className="py-12 text-center font-mono text-[11px] uppercase tracking-[0.08em] text-muted">
        fetching frames…<span aria-hidden="true" className="cursor" />
      </div>
    );
  }
  if (albums.length === 0) {
    return <EmptyState message="no frames available · check back soon" />;
  }
  return (
    <div
      className="grid gap-px border border-rule bg-rule"
      style={{
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
      }}
    >
      {albums.map((album, albumIndex) => (
        <AlbumFrame key={album.id} album={album} index={albumIndex} />
      ))}
    </div>
  );
};

const AlbumFrame = ({ album, index }) => {
  const idLabel = `f${String(index + 1).padStart(3, "0")}`;
  const year =
    album.albumDate && album.albumDate.slice
      ? album.albumDate.slice(0, 4)
      : "-";
  return (
    <Link
      to={`/album/${album.id}`}
      state={{ name: album.name, year }}
      className="dossier-photo-frame relative block aspect-[4/3] overflow-hidden bg-canvas text-fg no-underline"
    >
      {album.coverImageUrl && (
        <img
          src={album.coverImageUrl}
          alt={album.name}
          loading={index < 6 ? "eager" : "lazy"}
          className="block h-full w-full object-cover transition-[filter,transform] duration-300"
          style={{ filter: "saturate(0.85)" }}
        />
      )}
      <div className="absolute left-2 top-2 bg-black/55 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-[0.08em] text-muted">
        {idLabel}
      </div>
      <div className="absolute bottom-2 right-2 border border-rule-strong bg-black/65 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-[0.08em] text-fg">
        {album.name} · {year}
      </div>
    </Link>
  );
};

export default Photography;
