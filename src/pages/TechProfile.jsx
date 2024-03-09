import React, { useRef } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa6";
import { SiGoogledocs } from "react-icons/si";
import { TfiEmail } from "react-icons/tfi";

// TODO: Break up into reusable components
const TechProfile = () => {
  const contactRef = useRef();
  return (
    <div className="flex-grow bg-[#0F1217] text-white p-5">
      <section className="flex flex-col items-center justify-center section-wrapper sm:px-0 border-b-2">
        <div className="w-48 h-48 mb-4 mt-10">
          <img
            className="bg-[#232323] px-3 py-1 rounded-lg"
            src="https://avatars.githubusercontent.com/u/26939265?v=4"
            alt="Antonio Rice"
          />
        </div>
        <h1 className="text-8xl font-bold text-[#cccccc] mb-5">
          Hi, I'm <span className="text-[#ffffff]">Antonio</span>
          <span className="text-red-500">.</span>
        </h1>
        <h1 className="text-2xl font-extralight text-center text-[#cccccc] mb-5">
          For over half a decade, I've been at the forefront of innovation, crafting an industry-leading supply chain
          visibility tool. Now, I'm thrilled to turn the page and dive into the next chapter of my professional journey!
        </h1>
        <button
          onClick={() => {
            contactRef.current?.scrollIntoView({ behavior: "smooth" });
          }}
          className="bg-[#cccccc] hover:bg-red-500 text-black py-2 px-4 rounded-md transition duration-300 ease-in-out"
        >
          Contact me
        </button>
      </section>
      <section className="section-wrapper border-b-2">
        <h1 className="text-6xl font-bold">
          About <span className="text-red-500 -ml-3">.</span>
        </h1>
        <div className="grid grid-cols-3 gap-9 mt-5 ">
          <div className="col-span-2">
            <h1 className="text-xl font-extralight text-[#cccccc] tracking-wide mb-3">
              Hello, I'm Antonio, a dedicated Full Stack Software Engineer from Minneapolis, MN. I have a passion for
              tackling intricate challenges and developing exceptional software solutions.
            </h1>
            <h1 className="text-xl font-extralight text-[#cccccc] tracking-wide mb-3">
              My most notable experience was with C.H. Robinson, a leading 3rd Party Logistics firm based in Eden
              Prairie, MN. I began my journey there as a junior software engineer and, through commitment and continuous
              learning, I advanced to become a Tech Lead and a Subject Matter Expert.
            </h1>
            <h1 className="text-xl font-extralight space-x-0 text-[#cccccc] tracking-wide mb-3">
              When not immersed in code, I love journeying through life with my family, capturing moments through my
              lens – which I find quite stunning, by the way! My curiosity also drives me to explore emerging
              technologies across diverse industries, and I have a profound interest in all things automotive.
            </h1>
            <h1 className="text-xl font-extralight space-x-0 text-[#cccccc]  tracking-wide mb-3">
              Currently, I am on the lookout for new opportunities where I can apply my problem-solving skills and
              broaden my knowledge. If you have a position or a project you believe aligns with my expertise, I'm all
              ears and ready to connect!
            </h1>
          </div>
          <div className="col-span-1">
            <div className="text-xl uppercase mb-5">Skills</div>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="pill">Javascript</span>
              <span className="pill">Node</span>
              <span className="pill">React</span>
              <span className="pill">Express</span>
              <span className="pill">.Net Core</span>
              <span className="pill">C#</span>
              <span className="pill">ServiceStack</span>
              <span className="pill">RESTful Api</span>
              <span className="pill">Elasticsearch</span>
              <span className="pill">MongoDB</span>
              <span className="pill">SQL</span>
              <span className="pill">CI/CD</span>
              <span className="pill">Kafka</span>
              <span className="pill">Kubernetes</span>
              <span className="pill">ESB</span>
              <span className="pill">RabbitMQ</span>
              <span className="pill">Docker</span>
            </div>
          </div>
        </div>
      </section>
      <section className="section-wrapper">
        <h1 className="text-6xl font-bold">
          Experience <span className="text-red-500 -ml-3">.</span>
        </h1>
        <div className="mb-8 mt-8">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-3xl font-semibold text-[#cccccc]">CH Robinson</h3>
          </div>
          <div className="border-b-[1px] border-gray-700 mb-5">
            <div className="flex justify-between ">
              <h4 className="text-2xl font-bold mb-2">
                <span className="text-red-500"> - </span>Software Engineer - Tech Lead
              </h4>
              <span className="text-[#cccccc]">2022 - 2023</span>
            </div>
            <p className="mb-4 text-[#cccccc] text-xl font-extralight">
              Led a team of 7, including 5 engineers, by providing technical guidance and conducting code reviews,
              resulting in a 30% increase in sprint completion rates through strategic blocker elimination and system
              design contributions.
            </p>
            <p className="mb-4 text-[#cccccc] text-xl font-extralight">
              Designed and implemented Kafka-based data integration solutions and developed APIs in Node.js (Hapi.js)
              and .NET Core, significantly enhancing data processing efficiency. Additionally, I built UI features in
              React.js, directly improving client supply chain visibility.
            </p>
            <div className="flex gap-2 mb-4">
              <span className="pill">System Design</span>
              <span className="pill">Leadership</span>
              <span className="pill">Coaching</span>
              <span className="pill">Code Reviews</span>
            </div>
          </div>
          <div className="border-b-[1px] border-gray-700 mb-5">
            <div className="flex justify-between ">
              <h4 className="text-2xl font-bold mb-2">
                <span className="text-red-500"> - </span>Software Engineer II
              </h4>
              <span className="text-[#cccccc]">2019 - 2022</span>
            </div>
            <p className="mb-4 text-[#cccccc] text-xl font-extralight">
              Played a pivotal role in a team of 4, revamping our flagship SaaS application, Navisphere Vision, by
              transitioning from AngularJS to React with Redux. This comprehensive overhaul encompassed requirements
              gathering, UI/UX design, and both unit and E2E testing, significantly improving application performance
              and user satisfaction.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="pill">Javascript</span>
              <span className="pill">React</span>
              <span className="pill">Node</span>
              <span className="pill">.NET Core</span>
              <span className="pill">C#</span>
              <span className="pill">Kafka</span>
              <span className="pill">MongoDB</span>
              <span className="pill">Elasticsearch</span>
              <span className="pill">Microsoft SQL Server</span>
              <span className="pill">Microsoft Azure</span>
              <span className="pill">Microservices</span>
            </div>
          </div>
          <div className="border-b-[1px] border-gray-700 mb-5">
            <div className="flex justify-between ">
              <h4 className="text-2xl font-bold mb-2">
                <span className="text-red-500"> - </span>Software Engineer I
              </h4>
              <span className="text-[#cccccc]">2017 - 2019</span>
            </div>
            <p className="mb-4 text-[#cccccc] text-xl font-extralight">
              Developed custom software solutions to integrate multiple data sources from Enterprise Service Bus,
              including RabbitMQ and Kafka, streamlining data processing and accessibility.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="pill">Javascript</span>
              <span className="pill">AngularJs</span>
              <span className="pill">Node</span>
              <span className="pill">C#</span>
              <span className="pill">Python</span>
              <span className="pill">Kafka</span>
              <span className="pill">RabbitMQ</span>
            </div>
          </div>
        </div>

        <div className="mb-8 mt-8">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-3xl font-semibold text-[#cccccc]">Prime Digital Academy</h3>
          </div>
          <div className="border-b-[1px] border-gray-700 mb-5">
            <div className="flex justify-between ">
              <h4 className="text-2xl font-bold mb-2">
                <span className="text-red-500"> - </span>Full Stack SWE Student
              </h4>
              <span className="text-[#cccccc]">2017</span>
            </div>
            <p className="mb-4 text-[#cccccc] text-xl font-extralight">
              A full-time 20-week emersive software engineering program in which I learned the core fundamental of
              creating software. I developed a web application for automotive use, and a took part in a groupd project
              that aimed to promote student engagement through a student driven challenge/rewards system.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="pill">Node</span>
              <span className="pill">Express</span>
              <span className="pill">AngularJS</span>
              <span className="pill">Passport</span>
              <span className="pill">MongoDB</span>
              <span className="pill">Angular Material</span>
              <span className="pill">Sweet Alerts</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <h1 className="text-lg font-extralight text-center text-[#cccccc] mb-5">
            Download my resume for more details
          </h1>
          <div>
            <button
              className="bg-[#cccccc] hover:bg-red-500 text-black py-2 px-4 rounded-md transition duration-300 ease-in-out"
              onClick={() => window.open("src/assets/ALR-Resume-2024-v2.pdf", "_blank")}
            >
              My Resume
            </button>
          </div>
        </div>
      </section>

      <section ref={contactRef} className="flex flex-col justify-center items-center mt-20 section-wrapper">
        <h1 className="text-8xl font-bold">
          Contact<span className="text-red-500">.</span>
        </h1>
        <h1 className="text-2xl font-extralight text-center text-[#cccccc] mb-5">
          Send me an email if you want to connect. You can also find me on
          <span className="ml-1">
            <a
              href="http://www.linkedin.com/in/riceantonio"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#ffffff] hover:underline decoration-red-500"
            >
              Linkedin!
            </a>
          </span>
        </h1>
        <a
          title="Email"
          href="mailto:contact@antoniorice.com"
          target="_blank"
          rel="noreferrer"
          className="flex items-center hover:text-[#e35757] space-x-2 cursor-pointer"
        >
          <TfiEmail size={25} className="mt-2" />
          <span className="text-2xl underline">contact@antoniorice.com</span>
        </a>
        <section className="flex space-x-4 mt-5">
          <a
            title="Linkedin"
            href="http://www.linkedin.com/in/riceantonio"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#e35757]"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            title="Github"
            href="https://www.github.com/AntonioRice"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#e35757]"
          >
            <FaGithub size={30} />
          </a>
          <a
            title="Resume"
            href="src/assets/ALR-Resume-2024-v2.pdf"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#e35757]"
          >
            <SiGoogledocs size={30} />
          </a>
        </section>
      </section>
    </div>
  );
};

export default TechProfile;
