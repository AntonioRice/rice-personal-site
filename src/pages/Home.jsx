import { useNavigate } from "react-router-dom";
import leftHomePhoto from "../assets/images/left.jpg";
import rightHomePhoto from "../assets/images/right.jpg";

const Home = () => {
  const navigate = useNavigate();

  const handleLeftClick = () => {
    navigate("/techprofile");
  };

  const handleRightClick = () => {
    navigate("/photography");
  };

  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-1 md:grid-cols-2 cursor-pointer">
        <div className="relative group" onClick={handleLeftClick}>
          <img
            src={leftHomePhoto}
            alt="Software Engineer"
            className="w-full h-auto sm:h-[calc(50vh-32px)] md:h-[calc(100vh-64px)] object-cover group-hover:opacity-100 opacity-40 blur-[2px]"
          />
          <div className="absolute inset-0 flex justify-center items-center px-5 z-10 sm:bg-gradient-to-t md:bg-gradient-to-l from-[#242323] md:from-2% sm:from-0%">
            <h1 className="text-5xl font-bold text-white uppercase text-center">Software Engineer</h1>
          </div>
        </div>
        <div className="relative group" onClick={handleRightClick}>
          <img
            src={rightHomePhoto}
            alt="Photographer"
            className="w-full h-auto sm:h-[calc(50vh-32px)] md:h-[calc(100vh-64px)] object-cover group-hover:opacity-100 opacity-40"
          />
          <div className="absolute inset-0 flex justify-center items-center px-5 z-10 sm:bg-gradient-to-b md:bg-gradient-to-r from-[#242323] md:from-2% sm:from-0%">
            <h1 className="text-5xl font-bold text-white uppercase text-center">Photographer</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

{
  /* <section className="flex flex-1">
<div
  className="w-full lg:w-1/2 sm:w-full justify-center items-center hover:shadow-lg relative"
  onClick={handleLeftClick}
>
  <div className="absolute inset-0 flex justify-center items-center bg-[#cccccc] bg-opacity-0 hover:bg-opacity-50 transition duration-700">
    <h2 className="text-6xl text-[#ffffff] font-bold z-10">Software Engineer</h2>
  </div>
</div>
<div
  className="w-full lg:w-1/2  sm:w-full  justify-center items-center hover:shadow-lg relative"
  onClick={handleRightClick}
  // style={{
  //   backgroundImage: "url('./src/assets/images/banner1.jpg')",
  //   backgroundSize: "cover",
  //   backgroundRepeat: "no-repeat",
  //   backgroundPosition: "center",
  // }}
>
  <div className="absolute inset-0 flex justify-center items-center bg-[#cccccc] bg-opacity-0 hover:bg-opacity-50 transition duration-00">
    <h2 className="text-6xl text-[#ffffff] font-bold z-10">Photographer</h2>
  </div>
</div>
</section> */
}
