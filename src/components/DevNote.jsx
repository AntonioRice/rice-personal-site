import React from "react";

const DevNote = () => {
  return (
    <div className="grid grid-cols-1 p-5 md:grid-cols-4 lg:grid-cols-6">
      <div className="col-span-1 col-start-6 p-2 sm:p-6">
        <p className="leading-0 text-xs font-extralight tracking-wide opacity-60 sm:text-[.65rem]">
          Designed and built by me. Utilizing React.js and Tailwind CSS on the
          frontend. Backend is built with Node.js and Express, with MongoDB and
          AWS S3. Deployed to AWS EC2 via Github Actions, Docker, and NGINX.
        </p>
      </div>
    </div>
  );
};

export default DevNote;
