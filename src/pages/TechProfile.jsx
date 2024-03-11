import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa6";
import { SiGoogledocs } from "react-icons/si";
import { TfiEmail } from "react-icons/tfi";
import AnimatedPage from "../components/AnimatedPage";
import useSectionScroll from "../hooks/useSectionScroll";

// TODO: Break up into reusable components
const TechProfile = () => {
  const offset = ["-0.2 0.8", "0.6 1"];
  const about = useSectionScroll(offset);
  const experience = useSectionScroll(offset);
  const contact = useSectionScroll(offset);

  return (
    <AnimatedPage>
      <div className="flex-grow bg-[#0F1217] text-white p-1">
        <motion.section>
          <section className="section-wrapper flex flex-col items-center justify-center sm:px-0">
            <a
              title="Linkedin"
              href="http://www.linkedin.com/in/riceantonio"
              target="_blank"
              className="w-48 h-48 mb-4 mt-10"
            >
              <img
                className="rounded-full mx-auto mb-6 ring-4 ring-[#cccccc] hover:ring-red-500 transition duration-300 ease-in-out"
                src="https://avatars.githubusercontent.com/u/26939265?v=4"
                alt="Antonio Rice Headshot"
              />
            </a>
            <h1 className="sm:text-4xl md:text-8xl font-bold text-[#cccccc] mb-5 ">
              Hi, I'm <span className="text-[#ffffff]">Antonio</span>
              <span className="text-red-500">.</span>
            </h1>
            <h1 className="text-2xl font-extralight text-center text-[#cccccc] mb-5 p-5">
              For over half a decade, I've been at the forefront of innovation, crafting an industry-leading supply
              chain visibility tool. Now, I'm excited to turn the page and dive into the next chapter of my professional
              journey!
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
        </motion.section>

        <motion.section ref={about.ref} style={{ scale: about.scale, opacity: about.opacity }}>
          <section className="section-wrapper border-t-2">
            <h1 className="text-6xl font-bold">
              About <span className="text-red-500 -ml-3">.</span>
            </h1>
            <div className="grid md:grid-cols-3 gap-9 mt-5 ">
              <div className="col-span-2">
                <h1 className="text-xl font-extralight text-[#cccccc] tracking-wide mb-4">
                  Hello, I'm Antonio, a dedicated Full Stack Software Engineer from Minneapolis, MN. I have a passion
                  for tackling intricate challenges and developing exceptional software solutions.
                </h1>
                <h1 className="text-xl font-extralight text-[#cccccc] tracking-wide mb-4">
                  My most notable experience was with C.H. Robinson, a leading 3rd Party Logistics firm based in Eden
                  Prairie, MN. I began my journey there as a junior software engineer and, through commitment and
                  continuous learning, I advanced to become a Tech Lead and a Subject Matter Expert.
                </h1>
                <h1 className="text-xl font-extralight text-[#cccccc] tracking-wide mb-4">
                  When not immersed in code, I love journeying through life with my family, capturing moments through my
                  lens – which I find quite stunning, by the way! My curiosity also drives me to explore emerging
                  technologies across diverse industries, and I have a profound interest in all things automotive.
                </h1>
                <h1 className="text-xl font-extralight text-[#cccccc] tracking-wide mb-4">
                  Currently, I am on the lookout for new opportunities where I can apply my problem-solving skills and
                  broaden my knowledge. If you have a position or a project you believe aligns with my expertise, I'm
                  all ears and ready to connect!
                </h1>
              </div>
              <div className="sm:col-span-2 md:col-span-1">
                <div className="text-xl uppercase mb-5">Skills</div>
                <div className="flex flex-wrap gap-2 mb-4">
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
        <motion.section ref={experience.ref} style={{ scale: experience.scale, opacity: experience.opacity }}>
          <section className="section-wrapper border-t-2">
            <h1 className="text-6xl font-bold">
              Experience <span className="text-red-500 -ml-3">.</span>
            </h1>
            <div className="mb-8 mt-8">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-3xl font-semibold text-[#cccccc]">CH Robinson</h3>
              </div>
              <div className="border-b-[1px] border-gray-700 mb-5">
                <div className="text-[#cccccc] sm:text-[12px]">2022 - 2023</div>
                <h4 className="text-2xl font-bold mb-2">
                  <span className="text-red-500"> - </span>Software Engineer - Tech Lead
                </h4>
                <p className="text-xl font-extralight text-[#cccccc] tracking-wide mb-4">
                  Led a team of 7, including 5 engineers, by providing technical guidance and conducting code reviews,
                  resulting in a 30% increase in sprint completion rates through strategic blocker elimination and
                  system design contributions.
                </p>
                <p className="text-xl font-extralight text-[#cccccc] tracking-wide mb-4">
                  Designed and implemented Kafka-based data integration solutions and developed APIs in Node.js
                  (Hapi.js) and .NET Core, significantly enhancing data processing efficiency. Additionally, I built UI
                  features in React.js, directly improving client supply chain visibility.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <div className="pill ">System Design</div>
                  <div className="pill">Leadership</div>
                  <div className="pill">Coaching</div>
                  <div className="pill">Code Reviews</div>
                </div>
              </div>
              <div className="border-b-[1px] border-gray-700 mb-5">
                <div className="text-[#cccccc] sm:text-[12px]">2019 - 2022</div>
                <h4 className="text-2xl font-bold mb-2">
                  <span className="text-red-500"> - </span>Software Engineer II
                </h4>
                <p className="text-xl font-extralight text-[#cccccc] tracking-wide mb-4">
                  Played a pivotal role in a team of 4, revamping our flagship SaaS application, Navisphere Vision, by
                  transitioning from AngularJS to React with Redux. This comprehensive overhaul encompassed requirements
                  gathering, UI/UX design, and both unit and E2E testing, significantly improving application
                  performance and user satisfaction.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
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
              <div className="border-b-[1px] border-gray-700 mb-5">
                <div className="text-[#cccccc] sm:text-[12px]">2017 - 2019</div>
                <h4 className="text-2xl font-bold mb-2">
                  <span className="text-red-500"> - </span>Software Engineer I
                </h4>
                <p className="text-xl font-extralight text-[#cccccc] tracking-wide mb-4">
                  Developed custom software solutions to integrate multiple data sources from Enterprise Service Bus,
                  including RabbitMQ and Kafka, streamlining data processing and accessibility.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
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
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-3xl font-semibold text-[#cccccc]">Prime Digital Academy</h3>
              </div>
              <div className="border-b-[1px] border-gray-700 mb-5">
                <div className="text-[#cccccc] sm:text-[12px]">2017</div>
                <h4 className="text-2xl font-bold mb-2">
                  <span className="text-red-500"> - </span>Full Stack SWE Student
                </h4>
                <p className="text-xl font-extralight text-[#cccccc] tracking-wide mb-4">
                  A full-time 20-week emersive software engineering program in which I learned the core fundamental of
                  creating software. I developed a web application for automotive use, and a took part in a group
                  project that aimed to promote student engagement through a student driven challenge/rewards system.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
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
              <h1 className="text-lg font-extralight text-center text-[#cccccc] mb-5">
                Download my resume for more details
              </h1>
              <div>
                <button
                  className="bg-[#cccccc] hover:bg-red-500 text-black py-2 px-4 rounded-md transition duration-300 ease-in-out"
                  onClick={() => window.open("/ALR-Resume-2024-v2.pdf", "_blank")}
                >
                  My Resume
                </button>
              </div>
            </div>
          </section>
        </motion.section>
        <motion.section ref={contact.ref} style={{ scale: contact.scale, opacity: contact.opacity }}>
          <section className="section-wrapper flex flex-col justify-center items-center mt-20 border-t-2">
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
                href="/ALR-Resume-2024-v2.pdf"
                target="_blank"
                rel="noreferrer"
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
