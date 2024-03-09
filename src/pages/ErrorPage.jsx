import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  const navigateHome = () => {
    navigate("/");
  };

  return (
    <section className="flex flex-col min-h-screen items-center justify-center bg-black">
      <h1 className="sm:text-lg text-4xl font-bold text-[#ffffff]">
        Whoops, you shouldn't have gotten here<span className="text-red-500">...</span>
      </h1>
      <button onClick={navigateHome} className="p-1 rounded-lg mt-5  bg-[#cccccc] hover:bg-red-500">
        Return to Home
      </button>
    </section>
  );
};

export default ErrorPage;
