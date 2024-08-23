const Section = ({ id, title, children }) => {
  return (
    <section
      id={id}
      className={`section-wrapper ${id == "contact" ? "!border-b-0" : ""} drop-shadow-xl`}
    >
      <h1 className="pb-10 text-5xl font-bold tracking-tight sm:text-4xl">
        {title}
        <div className="ml-1 inline-block size-3 rounded-full bg-red-500 sm:size-2" />
      </h1>
      {children}
    </section>
  );
};

export default Section;
