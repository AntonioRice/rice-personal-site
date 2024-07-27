import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import axios from "axios";
import { AnimatedPage, ImageWithLoader } from "../components";

const VITE_SERVER_URL = import.meta.env.VITE_SERVER_URL;

const AlbumDetails = () => {
  const location = useLocation();
  const { name, year } = location.state || {};
  const { albumId } = useParams();
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(
          `${VITE_SERVER_URL}/images/album/${albumId}`,
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
      <div className="page-wrapper flex flex-col pt-20">
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
                loading={i < 5 ? "eager" : "lazy"}
              />
            ))}
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default AlbumDetails;
