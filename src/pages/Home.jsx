import { useNavigate } from "react-router-dom";
import Thumbnail from "../assets/images/dalle.jpg";
import Thumbnail2 from "../assets/images/dalle2.jpg";

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
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative opacity-100 hover:opacity-65" onClick={handleLeftClick}>
          <div className="absolute inset-0 flex justify-center items-center px-5">
            <h1 className="text-5xl font-bold text-[#ffffff] uppercase text-center">Software Engineer</h1>
          </div>
          <img
            src={Thumbnail}
            alt="Software Engineer"
            className="w-full h-auto sm:h-[calc(50vh-32px)] md:h-[calc(100vh-64px)] object-cover"
          />
        </div>
        <div className="relative opacity-100 hover:opacity-65" onClick={handleRightClick}>
          <div className="absolute inset-0 flex justify-center items-center px-5">
            <h1 className="text-5xl font-bold text-[#ffffff] uppercase text-center">Photographer</h1>
          </div>
          <img
            src={Thumbnail2}
            alt="Photographer"
            className="w-full h-auto sm:h-[calc(50vh-32px)] md:h-[calc(100vh-64px)] object-cover"
          />
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
