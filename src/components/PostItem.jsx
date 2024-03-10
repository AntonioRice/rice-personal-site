import React from "react";
import { Link } from "react-router-dom";

const PostItem = ({ postID, thumbnail, title, year, description }) => {
  return (
    <div className="relative opacity-100 hover:opacity-65 transition duration-400 ease-in-out">
      <div className="absolute inset-0 flex justify-center items-center opacity-0 hover:opacity-100 bg-transparent">
        <h1 className="text-[#ffffff] text-2xl uppercase flex">{title}</h1>
        <h1 className="absolute mt-14 text-gray-500">{year}</h1>
      </div>
      <img src={thumbnail} alt={title} />
    </div>
  );
};

export default PostItem;
