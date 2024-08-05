const ProjectBlock = ({ project }) => {
  return (
    <>
      <h2 className="order-2 py-4 text-3xl font-semibold tracking-tight text-[#cccccc] md:order-1">
        {project.title}
      </h2>
      <div className="scale-105 gap-8 rounded-lg py-4 transition duration-300 hover:bg-[#3c4043] sm:px-4 sm:py-6 md:grid md:grid-cols-2 lg:px-6 xl:gap-16">
        <div className="order-1 hover:cursor-default md:order-2">
          <p className="b-4 mb-6 font-extralight tracking-wider text-[#cccccc] sm:text-xl md:text-left md:text-2xl">
            {project.description}
          </p>
        </div>
        <a
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          className="order-2 md:order-1"
        >
          <img
            className="h-64 w-full transform rounded-lg object-cover transition duration-300 hover:scale-105 hover:cursor-pointer"
            src={project.image}
            alt={project.alt}
          />
        </a>
      </div>
    </>
  );
};

export default ProjectBlock;
