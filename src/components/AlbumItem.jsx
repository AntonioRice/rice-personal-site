import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

const AlbumItem = ({ albumId, coverImageUrl, name, albumDate, images }) => {
  const year = moment(albumDate).year();

  return (
    <div className="duration-400 relative opacity-100 transition ease-in-out hover:opacity-65">
      <div className="absolute inset-0 flex items-center justify-center bg-transparent opacity-0 hover:opacity-100">
        <h1 className="flex text-2xl uppercase text-[#ffffff]">{name}</h1>
        <h1 className="absolute mt-14 text-black">{year}</h1>
      </div>
      <img src={coverImageUrl} alt={name} />
    </div>
  );
};

export default AlbumItem;
