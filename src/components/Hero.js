import React from "react";
import Typed from "react-typed";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen flex flex-col text-center mx-auto justify-center">
        <p className="text-[#00df9a] font-bold p-4 tracking-wider">
          GROWING WITH DATA ANALYTICS
        </p>
        <h1 className="font-bold md:text-7xl md:py-6 sm:text-6xl text-4xl">
          Grow with data.
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold  pt-4">
            Fast, flexible financing for
          </p>
          <Typed
            className="md:text-5xl sm:text-4xl text-xl font-bold pl-2 md:pl-4 pt-4"
            strings={["BTB", "BTC", "SAAS"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="md:text-2xl text-0.5xl font-bold text-gray-500  mt-2 md:mt-4">
          Monitor your data analytics to increase revenue for BTB, BTC & SAAS
          platforms.
        </p>
        <button className="bg-[#00df9a] w-[200px] text-black rounded-md font-medium my-6 md:py-3 py-1.5 mx-auto">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
