import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import axios from "axios";
import AnimatedPage from "../components/AnimatedPage";
import { CgSpinner } from "react-icons/cg";

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

const Spinner = () => (
  <div className="flex items-center justify-center">
    <CgSpinner size={40} className="animate-spin text-[#cccccc]" />
  </div>
);

const ImageWithLoader = ({ src, alt, aspectRatio = 4 / 5 }) => {
  const [loaded, setLoaded] = useState(false);
  const paddingTop = `${(1 / aspectRatio) * 100}%`;

  const containerStyle = {
    position: "relative",
    width: "100%",
    paddingTop,
  };

  return (
    <div style={containerStyle}>
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <Spinner />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-in-out ${loaded ? "opacity-100" : "opacity-0"}`}
        loading="lazy"
      />
    </div>
  );
};

const AlbumDetails = () => {
  const location = useLocation();
  const { name, year } = location.state || {};
  const { albumId } = useParams();
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(
          `${SERVER_URL}/images/album/${albumId}`,
        );
        setImages(response.data.images);
      } catch (error) {
        console.error("Failed to fetch album images", error);
      }
    };

    fetchImages();
  }, [albumId]);

  return (
    <AnimatedPage>
      <div className="flex min-h-screen flex-col pt-20">
        <div className="flex items-center justify-center">
          <h1 className="text-md font-extralight uppercase text-[#cccccc]">
            {name} <span className="text-[#cccccc]">- {year}</span>
          </h1>
        </div>
        <div className="sm:p-1 md:p-10">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {images.map((image, i) => (
              <ImageWithLoader
                key={image.id}
                src={image.url}
                alt={`Image ${i + 1}`}
                aspectRatio={4 / 5}
              />
            ))}
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default AlbumDetails;
