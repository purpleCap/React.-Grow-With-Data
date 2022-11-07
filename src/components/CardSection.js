import React from "react";
import Card from "./Card";
import Single from "./../assets/single.png";
import Double from "./../assets/double.png";
import Triple from "./../assets/triple.png";

const CardSection = () => {
  return (
    <div className="w-full bg-white py-[160px] px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 py-4">
        <Card
          image={Single}
          price={149}
          heading="Single User"
          msg1="500 GB Storage"
          msg2="1 Granted User"
          msg3="Send upto 2 GB"
        />
        <Card
          image={Double}
          price={149}
          heading="Double User"
          msg1="1 TB Storage"
          msg2="2 Granted User"
          msg3="Send upto 18 GB"
          highlight
        />
        <Card
          image={Triple}
          price={149}
          heading="Triple User"
          msg1="10 TB Storage"
          msg2="3 Granted User"
          msg3="Send upto 46 GB"
        />
      </div>
    </div>
  );
};

export default CardSection;
