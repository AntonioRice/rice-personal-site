import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa6";
import { SiGoogledocs } from "react-icons/si";
import { TfiEmail } from "react-icons/tfi";
import AnimatedPage from "../components/AnimatedPage";
import useSectionScroll from "../hooks/useSectionScroll";

// TODO: Break up into reusable components
const TechProfile = () => {
  const offset = ["0 1", ".5 1"];
  const about = useSectionScroll(offset);
  const experience = useSectionScroll(offset);
  const contact = useSectionScroll(offset);

  return (
    <AnimatedPage>
      <div className="flex-grow bg-[#0F1217] text-white ">
        <section className="section-wrapper flex flex-col items-center justify-center sm:px-0">
          <a
            title="Linkedin"
            href="https://www.linkedin.com/in/riceantonio"
            target="_blank"
            rel="noopener noreferrer"
            className="mb-4 mt-10 h-48 w-48"
          >
            <img
              className="mx-auto mb-6 rounded-full ring-4 ring-[#cccccc] transition duration-300 ease-in-out hover:ring-red-500"
              src="src/assets/images/avatar.jpeg"
              alt="Antonio Rice Headshot"
            />
          </a>
          <h1 className="mb-5 text-6xl font-bold text-[#cccccc] sm:text-5xl">
            Hi, I'm <span className="text-[#ffffff]">Antonio</span>
            <a
              href="https://www.kappaalphapsi1911.com/"
              title="Kappa Alpha Psi Fraternity, Inc. 1911"
              rel="noopener noreferrer"
              target="_blank"
              className="ml-1 inline-block size-4 rounded-full bg-red-500 sm:size-2"
              aria-label="Learn about my organization, Kappa Alpha Psi Fraternity Inc."
            ></a>
          </h1>
          <h1 className="mb-5 p-5 text-center text-2xl font-extralight text-[#cccccc]">
            For over half a decade, I've been at the forefront of innovation,
            crafting an industry-leading supply chain visibility tool. Now, I'm
            excited to turn the page and dive into the next chapter of my
            professional journey!
          </h1>
          <button
            onClick={() => {
              contact.ref?.current?.scrollIntoView({ behavior: "smooth" });
            }}
            className="rounded-md bg-[#cccccc] px-4 py-2 text-black transition duration-300 ease-in-out hover:bg-red-500"
          >
            Contact me
          </button>
        </section>
        <motion.section
          ref={about.ref}
          style={{ scale: about.scale, opacity: about.opacity }}
        >
          <section className="section-wrapper border-t-2">
            <h1 className="text-6xl font-bold">
              About
              <div className="ml-1 inline-block size-3 rounded-full bg-red-500" />
            </h1>
            <div className="mt-5 grid gap-9 md:grid-cols-3 ">
              <div className="col-span-2">
                <h1 className="mb-4 text-xl font-extralight tracking-wide text-[#cccccc]">
                  Hello, I'm Antonio, a dedicated Full Stack Software Engineer
                  from Minneapolis, MN. I have a passion for tackling intricate
                  challenges and developing exceptional software solutions.
                </h1>
                <h1 className="mb-4 text-xl font-extralight tracking-wide text-[#cccccc]">
                  My most notable experience was with C.H. Robinson, a leading
                  3rd Party Logistics firm based in Eden Prairie, MN. I began my
                  journey there as a junior software engineer and, through
                  commitment and continuous learning, I advanced to become a
                  Tech Lead and a Subject Matter Expert.
                </h1>
                <h1 className="mb-4 text-xl font-extralight tracking-wide text-[#cccccc]">
                  When not immersed in code, I love journeying through life with
                  my family, capturing moments through my lens – which I find
                  quite stunning, by the way! My curiosity also drives me to
                  explore emerging technologies across diverse industries, and I
                  have a profound interest in all things automotive.
                </h1>
                <h1 className="mb-4 text-xl font-extralight tracking-wide text-[#cccccc]">
                  Currently, I am on the lookout for new opportunities where I
                  can apply my problem-solving skills and broaden my knowledge.
                  If you have a position or a project you believe aligns with my
                  expertise, I'm all ears and ready to connect!
                </h1>
              </div>
              <div className="sm:col-span-2 md:col-span-1">
                <div className="mb-5 text-xl uppercase">Skills</div>
                <div className="mb-4 flex flex-wrap gap-2">
                  <div className="pill">Javascript</div>
                  <div className="pill">Node</div>
                  <div className="pill">React</div>
                  <div className="pill">Express</div>
                  <div className="pill">.Net Core</div>
                  <div className="pill">C#</div>
                  <div className="pill">ServiceStack</div>
                  <div className="pill">RESTful Api</div>
                  <div className="pill">Elasticsearch</div>
                  <div className="pill">MongoDB</div>
                  <div className="pill">SQL</div>
                  <div className="pill">CI/CD</div>
                  <div className="pill">Kafka</div>
                  <div className="pill">Kubernetes</div>
                  <div className="pill">ESB</div>
                  <div className="pill">RabbitMQ</div>
                  <div className="pill">Docker</div>
                </div>
              </div>
            </div>
          </section>
        </motion.section>
        <motion.section
          ref={experience.ref}
          style={{ scale: experience.scale, opacity: experience.opacity }}
        >
          <section className="section-wrapper border-t-2">
            <h1 className="text-6xl font-bold">
              Experience
              <div className="ml-1 inline-block size-3 rounded-full bg-red-500" />
            </h1>
            <div className="mb-8 mt-8">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-3xl font-semibold text-[#cccccc]">
                  CH Robinson
                </h3>
              </div>
              <div className="mb-5 border-b-[1px] border-gray-700">
                <div className="text-[#cccccc] sm:text-[12px]">2022 - 2023</div>
                <h4 className="mb-2 text-2xl font-bold">
                  <span className="text-red-500"> - </span>Software Engineer -
                  Tech Lead
                </h4>
                <p className="mb-4 text-xl font-extralight tracking-wide text-[#cccccc]">
                  Led a team of 7, including 5 engineers, by providing technical
                  guidance and conducting code reviews, resulting in a 30%
                  increase in sprint completion rates through strategic blocker
                  elimination and system design contributions.
                </p>
                <p className="mb-4 text-xl font-extralight tracking-wide text-[#cccccc]">
                  Designed and implemented Kafka-based data integration
                  solutions and developed APIs in Node.js (Hapi.js) and .NET
                  Core, significantly enhancing data processing efficiency.
                  Additionally, I built UI features in React.js, directly
                  improving client supply chain visibility.
                </p>
                <div className="mb-4 flex flex-wrap gap-2">
                  <div className="pill ">System Design</div>
                  <div className="pill">Leadership</div>
                  <div className="pill">Coaching</div>
                  <div className="pill">Code Reviews</div>
                </div>
              </div>
              <div className="mb-5 border-b-[1px] border-gray-700">
                <div className="text-[#cccccc] sm:text-[12px]">2019 - 2022</div>
                <h4 className="mb-2 text-2xl font-bold">
                  <span className="text-red-500"> - </span>Software Engineer II
                </h4>
                <p className="mb-4 text-xl font-extralight tracking-wide text-[#cccccc]">
                  Played a pivotal role in a team of 4, revamping our flagship
                  SaaS application, Navisphere Vision, by transitioning from
                  AngularJS to React with Redux. This comprehensive overhaul
                  encompassed requirements gathering, UI/UX design, and both
                  unit and E2E testing, significantly improving application
                  performance and user satisfaction.
                </p>
                <div className="mb-4 flex flex-wrap gap-2">
                  <div className="pill">Javascript</div>
                  <div className="pill">React</div>
                  <div className="pill">Node</div>
                  <div className="pill">.NET Core</div>
                  <div className="pill">C#</div>
                  <div className="pill">Kafka</div>
                  <div className="pill">MongoDB</div>
                  <div className="pill">Elasticsearch</div>
                  <div className="pill">Microsoft SQL Server</div>
                  <div className="pill">Microsoft Azure</div>
                  <div className="pill">Microservices</div>
                </div>
              </div>
              <div className="mb-5 border-b-[1px] border-gray-700">
                <div className="text-[#cccccc] sm:text-[12px]">2017 - 2019</div>
                <h4 className="mb-2 text-2xl font-bold">
                  <span className="text-red-500"> - </span>Software Engineer I
                </h4>
                <p className="mb-4 text-xl font-extralight tracking-wide text-[#cccccc]">
                  Developed custom software solutions to integrate multiple data
                  sources from Enterprise Service Bus, including RabbitMQ and
                  Kafka, streamlining data processing and accessibility.
                </p>
                <div className="mb-4 flex flex-wrap gap-2">
                  <div className="pill">Javascript</div>
                  <div className="pill">AngularJs</div>
                  <div className="pill">Node</div>
                  <div className="pill">C#</div>
                  <div className="pill">Python</div>
                  <div className="pill">Kafka</div>
                  <div className="pill">RabbitMQ</div>
                </div>
              </div>
            </div>

            <div className="mb-8 mt-8">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-3xl font-semibold text-[#cccccc]">
                  Prime Digital Academy
                </h3>
              </div>
              <div className="mb-5 border-b-[1px] border-gray-700">
                <div className="text-[#cccccc] sm:text-[12px]">2017</div>
                <h4 className="mb-2 text-2xl font-bold">
                  <span className="text-red-500"> - </span>Full Stack SWE
                  Student
                </h4>
                <p className="mb-4 text-xl font-extralight tracking-wide text-[#cccccc]">
                  A full-time 20-week emersive software engineering program in
                  which I learned the core fundamental of creating software. I
                  developed a web application for automotive use, and a took
                  part in a group project that aimed to promote student
                  engagement through a student driven challenge/rewards system.
                </p>
                <div className="mb-4 flex flex-wrap gap-2">
                  <div className="pill">Node</div>
                  <div className="pill">Express</div>
                  <div className="pill">AngularJS</div>
                  <div className="pill">Passport</div>
                  <div className="pill">MongoDB</div>
                  <div className="pill">Angular Material</div>
                  <div className="pill">Sweet Alerts</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center">
              <h1 className="mb-5 text-center text-lg font-extralight text-[#cccccc]">
                Download my resume for more details
              </h1>
              <div>
                <button
                  className="rounded-md bg-[#cccccc] px-4 py-2 text-black transition duration-300 ease-in-out hover:bg-red-500"
                  onClick={() =>
                    window.open("/ALR-Resume-2024-v2.pdf", "_blank")
                  }
                >
                  My Resume
                </button>
              </div>
            </div>
          </section>
        </motion.section>
        <motion.section
          ref={contact.ref}
          style={{ scale: contact.scale, opacity: contact.opacity }}
        >
          <section className="section-wrapper mt-20 flex flex-col items-center justify-center border-t-2">
            <h1 className="text-8xl font-bold sm:text-6xl">
              Contact
              <div className="ml-2 inline-block size-5 rounded-full bg-red-500 sm:size-3" />
            </h1>
            <h1 className="mb-5 text-center text-2xl font-extralight text-[#cccccc] sm:text-xl">
              Send me an email if you want to connect. You can also find me on
              <span className="ml-1">
                <a
                  href="https://www.linkedin.com/in/riceantonio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="decoration-red-500 hover:text-[#ffffff] hover:underline"
                >
                  Linkedin!
                </a>
              </span>
            </h1>
            <a
              title="Email"
              href="mailto:contact@antoniorice.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex cursor-pointer items-center space-x-2 hover:text-[#e35757]"
            >
              <TfiEmail size={25} className="mt-2" />
              <span className="text-2xl underline sm:text-xl">
                contact@antoniorice.com
              </span>
            </a>
            <section className="mt-5 flex space-x-4">
              <a
                title="Linkedin"
                href="https://www.linkedin.com/in/riceantonio"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#e35757]"
              >
                <FaLinkedin size={30} />
              </a>
              <a
                title="Github"
                href="https://www.github.com/AntonioRice"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#e35757]"
              >
                <FaGithub size={30} />
              </a>
              <a
                title="Resume"
                href="/ALR-Resume-2024-v2.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#e35757]"
              >
                <SiGoogledocs size={30} />
              </a>
            </section>
          </section>
        </motion.section>
      </div>
    </AnimatedPage>
  );
};

export default TechProfile;
