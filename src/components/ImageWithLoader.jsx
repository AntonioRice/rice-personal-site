import React, { useState } from "react";
import { CgSpinner } from "react-icons/cg";

const Spinner = () => (
  <div className="flex items-center justify-center">
    <CgSpinner size={40} className="animate-spin text-[#cccccc]" />
  </div>
);

const ImageWithLoader = ({ src, alt, aspectRatio = 4 / 5 }) => {
  const [loaded, setLoaded] = useState(false);

  const containerStyle = {
    position: "relative",
    width: "100%",
    paddingTop: `${(1 / aspectRatio) * 100}%`,
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
        className={`pointer-events-none absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-in-out ${loaded ? "opacity-100" : "opacity-0"}`}
        loading="lazy"
      />
    </div>
  );
};

export default ImageWithLoader;
