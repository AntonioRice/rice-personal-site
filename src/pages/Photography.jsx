import { Helmet } from "react-helmet";
import { useState, useEffect } from "react";
import { PiInstagramLogo } from "react-icons/pi";
import { Album, AnimatedPage } from "../components";
import axios from "axios";

const VITE_SERVER_URL = import.meta.env.VITE_SERVER_URL;

const isMobileDevice = () => {
  return /Mobi|Android|iPhone/i.test(navigator.userAgent);
};

const Photography = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    async function fetchAlbum() {
      try {
        const response = await axios.get(`${VITE_SERVER_URL}/albums`);
        setAlbums(response.data.data);
      } catch (err) {
        console.error("Error retrieving albums", err);
      }
    }

    fetchAlbum();
  }, []);

  const instagramUrl = isMobileDevice()
    ? "instagram://user?username=mr_arroz"
    : "https://www.instagram.com/mr_arroz/";

  return (
    <AnimatedPage>
      <Helmet>
        <title>A. Rice | Photography</title>
        <meta
          name="description"
          content="Explore the photography portfolio of Antonio Rice, capturing moments through a unique lens. Dive into a diverse collection of landscapes, portraits, and more."
        />
        <link rel="canonical" href="https://antoniorice.com/" />
        <meta property="og:title" content="A. Rice | Photography" />
        <meta
          property="og:description"
          content="Discover the world through the lens of Antonio Rice. A captivating collection of photography ranging from landscapes to portraits."
        />
        <meta
          property="og:image"
          content="https://antoniorice.com/assets/images/site-image.webp"
        />
      </Helmet>
      <div className="page-wrapper">
        <div className="flex items-center justify-center pt-10 font-bold tracking-tight sm:py-10">
          <h1 className="uppercase leading-7 tracking-tighter text-[#cccccc]">
            A. Rice Photography <span className="text-red-500">.</span>
          </h1>
          <a
            href={instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="ml-2 text-[#cccccc] hover:text-red-500"
          >
            <PiInstagramLogo size={20} />
          </a>
        </div>
        <div className="sm:p-1 md:p-10">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {albums &&
              albums.map(({ id, coverImageUrl, name, albumDate }) => (
                <Album
                  key={id}
                  albumId={id}
                  coverImageUrl={coverImageUrl}
                  name={name}
                  albumDate={albumDate}
                />
              ))}
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Photography;
