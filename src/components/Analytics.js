import React from "react";
import Laptop from "./../assets/laptop.jpg";

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={Laptop} alt="/"></img>
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold uppercase">
            DATA ANALYTICS DASHBOARD
          </p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Manage Data Analytics Centrally
          </h1>
          <p>
            Data analytics (DA) is the process of examining data sets in order
            to find trends and draw conclusions about the information they
            contain. Increasingly, data analytics is done with the aid of
            specialized systems and software. Data analytics technologies and
            techniques are widely used in commercial industries to enable
            organizations to make more-informed business decisions. Scientists
            and researchers also use analytics tools to verify or disprove
            scientific models, theories and hypotheses.
          </p>
          <button className="bg-[#000] w-[200px] text-[#00df9a] rounded-md font-medium my-6 md:py-3 py-1.5 mx-auto md:mx-0">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
