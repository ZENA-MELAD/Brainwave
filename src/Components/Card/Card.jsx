import React from "react";
import DataServices from "../../assets/Data/DataServices";
import LearnMore from "../LearnMore/LearnMore";
const Card = () => {
  const colors = ["bg-green-400", "bg-indigo-800", "bg-customRed"];
  return (
    <div className="w-full relative z-30 flex flex-col justify-center items-center  sm:flex sm:flex-row sm:justify-center sm:items-center sm:gap-2.5 md:gap-4 lg:gap-8">
      {DataServices.map((item) => (
        <div
          className={`${
            colors[item.id]
          } rounded-lg max-w-[70vw]  h-80 px-10 mb-3.5  flex flex-col justify-center items-center  sm:max-w-[28vw] sm:px-2 md:max-w-[26vw] lg:max-w-[24vw] xl:max-w-[22vw]`}
          key={item.id}
        >
          <img src={item.image} />
          <h2 className="text-white font-questrial mt-4 capitalize ">
            {item.name}
          </h2>
          <p className="text-center text-white font-questrial  capitalize mt-2.5 text-xs tracking-wider opacity-65 ">
            {item.description}
          </p>
          <p className="text-center text-white font-questrial text-xs capitalize mt-0.5 tracking-wider opacity-65">
            {item.des}
          </p>
          <LearnMore />
        </div>
      ))}
    </div>
  );
};

export default Card;
