import React, { useState, useEffect } from "react";
import { FaInstagram } from "react-icons/fa6";
import Album from "../components/Album";
import AnimatedPage from "../components/AnimatedPage";
import axios from "axios";

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

const Photography = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    async function fetchAlbum() {
      try {
        const response = await axios.get(`${SERVER_URL}/albums`);
        setAlbums(response.data.data);
      } catch (e) {
        console.error("Error retrieving albums", e);
        alert("Error retrieving albums");
      }
    }

    fetchAlbum();
  }, []);

  return (
    <AnimatedPage>
      <div className="flex min-h-screen flex-col pt-20">
        <div className="flex items-center justify-center">
          <h1 className="text-md font-extralight uppercase text-[#cccccc]">
            A. Rice Photography <span className="text-red-500">.</span>
          </h1>
          <a
            href="instagram://user?username=mr_arroz"
            target="_blank"
            rel="noreferrer"
            className="ml-2 text-[#cccccc] hover:text-[#e35757]"
          >
            <FaInstagram size={20} />
          </a>
        </div>
        <div className="sm:p-1 md:p-10">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {albums.map(({ id, coverImageUrl, name, albumDate }) => (
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
