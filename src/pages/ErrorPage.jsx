import React from "react";
import { useNavigate } from "react-router-dom";
import AnimatedPage from "../components/AnimatedPage";

const ErrorPage = () => {
  const navigate = useNavigate();

  const navigateHome = () => {
    navigate("/");
  };

  return (
    <AnimatedPage>
      <section className="flex min-h-screen flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-[#ffffff] sm:text-lg">
          Whoops, you shouldn't have gotten here
          <span className="text-red-500">...</span>
        </h1>
        <button
          onClick={navigateHome}
          className="mt-5 rounded-lg bg-[#cccccc]  p-1 hover:bg-red-500"
        >
          Return to Home
        </button>
      </section>
    </AnimatedPage>
  );
};

export default ErrorPage;
