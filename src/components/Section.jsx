const Section = ({ id, title, children }) => {
  return (
    <section id={id} className="section-wrapper">
      <h1 className="text-6xl font-bold">
        {title}
        <div className="ml-1 inline-block size-3 rounded-full bg-red-500" />
      </h1>
      {children}
    </section>
  );
};

export default Section;
