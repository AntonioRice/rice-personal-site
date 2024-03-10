import { useNavigate } from "react-router-dom";
import leftHomePhoto from "../assets/images/left.jpg";
import rightHomePhoto from "../assets/images/right.jpg";
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
      <div className="flex flex-col">
        <div className="grid grid-cols-1 md:grid-cols-2 cursor-pointer">
          <div className="relative group" onClick={handleLeftClick}>
            <img
              src={leftHomePhoto}
              alt="Software Engineer"
              className="w-full h-auto sm:h-[calc(50vh-32px)] md:h-[calc(100vh-64px)] object-cover group-hover:opacity-100 opacity-40 blur-[1px]"
            />
            <div className="absolute inset-0 flex justify-center items-center px-5 z-10 sm:bg-gradient-to-t md:bg-gradient-to-l from-[#242323] md:from-2% sm:from-0%">
              <h1 className="text-5xl font-bold text-white uppercase text-center">Software Engineer</h1>
            </div>
          </div>
          <div className="relative group">
            <img
              src={rightHomePhoto}
              alt="Photographer"
              className="w-full h-auto sm:h-[calc(50vh-32px)] md:h-[calc(100vh-64px)] object-cover group-hover:opacity-100 opacity-40"
            />
            <div className="absolute inset-0 flex justify-center items-center px-5 z-10 sm:bg-gradient-to-b md:bg-gradient-to-r from-[#242323] md:from-2% sm:from-0%">
              <h1 className="text-5xl font-bold text-white uppercase text-center">Photographer</h1>
              <h1 className="fixed text-xl font-bold text-red-500 uppercase text-center mt-20">(coming soon)</h1>
            </div>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Home;
