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
      <div className="page-wrapper flex flex-col pt-20">
        <div className="flex items-center justify-center">
          <h1 className="text-md font-extralight uppercase text-[#cccccc]">
            A. Rice Photography <span className="text-red-500">.</span>
          </h1>
          <a
            href={instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="ml-2 text-[#cccccc] hover:text-[#e35757]"
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
