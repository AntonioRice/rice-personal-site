const ProjectBlock = ({ project }) => {
  return (
    <div className="mb-4 rounded-lg border border-gray-500 bg-[#2c2f31] px-4 pb-6 shadow-xl ">
      <h2 className="py-4 text-2xl font-semibold text-[#cccccc]">
        {project.title}
      </h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <a
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          className="order-1 md:order-2"
        >
          <img
            className="h-64 w-full rounded-lg object-cover hover:cursor-pointer"
            src={project.image}
            alt={project.alt}
          />
        </a>
        <div className="order-2 md:order-1">
          <p className="mb-6 leading-7 md:text-left">{project.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectBlock;
