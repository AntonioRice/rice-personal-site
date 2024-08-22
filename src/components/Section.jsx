const Section = ({ id, title, children }) => {
  return (
    <section id={id}>
      <div
        className={`section-wrapper ${id == "contact" ? "!border-b-0" : ""}`}
      >
        <h1 className="pb-10 text-5xl font-bold sm:text-4xl">
          {title}
          <div className="ml-1 inline-block size-3 rounded-full bg-red-500" />
        </h1>
        {children}
      </div>
    </section>
  );
};

export default Section;
