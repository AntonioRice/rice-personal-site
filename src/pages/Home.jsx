import { useNavigate } from "react-router-dom";
import homePhoto from "../assets/images/home.jpg";
import AnimatedPage from "../components/AnimatedPage";

const Home = () => {
  const navigate = useNavigate();

  const handleLeftClick = () => {
    navigate("/techprofile");
  };

  const handleRightClick = () => {
    navigate("/photography");
  };

  return (
    <AnimatedPage>
      <section className="relative flex h-[calc(100vh-2.5rem)] flex-col justify-center bg-[#0F1217] p-10">
        <h1 className="mb-5 text-4xl font-bold text-[#cccccc] md:text-8xl">
          I'm a <br />
          <span className="text-[#ffffff]">software engineer</span>
          <span className="text-red-500">.</span>
        </h1>
        <h2 className="mb-5 pb-5 text-2xl font-extralight text-[#cccccc]">
          ...and also a wannabe photographer, which would you like to explore:
        </h2>
        <div className="flex animate-pulse flex-row gap-2 md:justify-start">
          <button
            onClick={handleLeftClick}
            className="rounded-md bg-white px-4 py-2 transition duration-300 ease-in-out hover:bg-red-500"
          >
            software engineer
          </button>
          <button
            onClick={handleRightClick}
            className="rounded-md bg-white px-4 py-2 transition duration-300 ease-in-out hover:bg-red-500"
          >
            photography
          </button>
        </div>
      </section>
    </AnimatedPage>
  );
};

export default Home;
