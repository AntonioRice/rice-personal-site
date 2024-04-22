import React from "react";
import { useNavigate } from "react-router-dom";
import ImageWithLoader from "./ImageWithLoader";

const Album = ({ albumId, coverImageUrl, name, albumDate }) => {
  const navigate = useNavigate();
  const year = new Date(albumDate).getFullYear();

  const handleAlbumClick = () => {
    navigate(`/album/${albumId}`, { state: { name, year } });
  };

  return (
    <div
      className="duration-400 relative opacity-100 transition ease-in-out hover:opacity-65"
      onClick={handleAlbumClick}
    >
      <div className="absolute inset-0 z-10 flex items-center justify-center bg-transparent opacity-0 hover:opacity-100">
        <p className="flex text-2xl uppercase text-[#ffffff]">{name}</p>
        <p className="absolute mt-14 text-black">{year}</p>
      </div>
      <ImageWithLoader src={coverImageUrl} alt={name} loading="eager" />
    </div>
  );
};

export default Album;
