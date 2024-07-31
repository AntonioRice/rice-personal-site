const ProjectBlock = ({ project }) => {
  return (
    <div className="mt-8">
      <div className="scale-105 gap-8 px-4 py-8 sm:py-16 md:grid md:grid-cols-2 lg:px-6 xl:gap-16">
        <div>
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight">
            {project.title}
          </h2>
          <p className="mb-6 font-light text-[#cccccc] md:text-lg">
            {project.description}
          </p>
        </div>
        <a href={project.href} target="_blank" rel="noopener noreferrer">
          <img
            className="h-64 w-full transform rounded-lg object-cover transition duration-300 hover:scale-110"
            src={project.image}
            alt={project.alt}
          />
        </a>
      </div>
    </div>
  );
};

export default ProjectBlock;
