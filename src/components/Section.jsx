const Section = ({ id, title, children }) => {
  return (
    <section id={id}>
      <div className="section-wrapper">
        <h1 className="text-6xl font-bold sm:text-5xl">
          {title}
          <div className="ml-1 inline-block size-3 rounded-full bg-red-500" />
        </h1>
        {children}
      </div>
    </section>
  );
};

export default Section;
