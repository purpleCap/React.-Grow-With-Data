import React from "react";
// import { TextField } from "@mui/material";

const NewsLetter = () => {
  return (
    <div className="w-full py-16 text-white px-4">
      <div className="max-w-[1240px] mx-auto lg:grid lg:grid-cols-3">
        <div className="lg:col-span-2 my-4">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Want tips & tricks to optimize your flow?
          </h1>
          <p>Sign up to our newsletter and stay up to date.</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row justify-center items-center">
            <input
              className="p-3 w-full rounded-md text-black"
              type="email"
              placeholder="Enter Email"
            />
            <button className="bg-[#00df9a] w-[200px] text-black rounded-md font-medium my-6 px-6 py-3 sm:ml-4">
              Notify Me
            </button>
          </div>
          <p>
            We care about the protection of your data. Read our{" "}
            <a href="/">
              <span className="text-[#00df9a] ">Privacy Policy.</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
