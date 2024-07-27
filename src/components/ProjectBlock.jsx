const ProjectBlock = () => {
  return (
    <div className="mb-8 mt-8">
      <div className="scale-105 items-center gap-8 px-4 py-8 sm:py-16 md:grid md:grid-cols-2 lg:px-6 xl:gap-16">
        <a
          href="https://appsource.microsoft.com/en-us/product/web-apps/chrobinsonworldwide.navispherevision?tab=Overview"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="w-full transform rounded-lg transition duration-300 hover:scale-110"
            src="/assets/images/navisphere-vision.png"
            alt="navisphere vision main view"
          />
        </a>
        <div className="mt-4 md:mt-0">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight">
            Navisphere Vision
          </h2>
          <p className="mb-6 font-light md:text-lg">
            Supply chain visibility SaaS product on Microsoft Azure Marketplace.
            I was responsible for key features including search, filter,
            notifications (email, in-app, SMS), data display on map/list view,
            and more. Managed new customer implementations involving
            requirements gathering, business rules creation, and development of
            tenant-specific features.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectBlock;
