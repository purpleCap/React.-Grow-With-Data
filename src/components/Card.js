import React from "react";

const Card = (props) => {
  return (
    <div
      className={`md:w-[340px] md:my-0 w-[368px] shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 mx-auto ${
        props.highlight ? "bg-[rgba(185,212,192,0.15)] h-[104%]" : "bg-white"
      }`}
    >
      <img
        className="w-20 mx-auto mt-[-3rem] bg-transparent"
        src={props.image}
        alt=""
      />
      <h2 className="text-2xl font-bold text-center py-8">{props.heading}</h2>
      <p className="text-center text-4xl font-bold">${props.price}</p>
      <div className="text-center font-medium">
        <p className="py-2 border-b mx-8 mt-8">{props.msg1}</p>
        <p className="py-2 border-b mx-8">{props.msg2}</p>
        <p className="py-2 border-b mx-8">{props.msg3}</p>
      </div>
      <button
        className={`${
          props.highlight
            ? "bg-[#000] w-[200px] text-[#00df9a]"
            : "bg-[#00df9a] w-[200px] text-black"
        } rounded-md font-medium my-6 md:py-3 py-1.5 mx-auto`}
      >
        Start Trial
      </button>
    </div>
  );
};

export default Card;
