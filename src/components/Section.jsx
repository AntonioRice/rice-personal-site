import { useRef } from "react";

const Section = ({ id, title, children }) => {
  const ref = useRef(null);

  return (
    <section
      id={id}
      className={`${id === "contact" ? "!border-b-0" : ""} section-wrapper p-5 md:overflow-hidden`}
    >
      <div
        ref={ref}
        className="sticky top-0 z-10 sm:-mx-5 sm:bg-[#202124] sm:bg-opacity-85 sm:px-5"
      >
        <h1 className="py-10 text-5xl font-bold tracking-tight sm:py-4 sm:text-2xl">
          {title}
          <div className="ml-1 inline-block size-3 rounded-full bg-red-500 sm:size-2" />
        </h1>
      </div>
      {children}
    </section>
  );
};

export default Section;
