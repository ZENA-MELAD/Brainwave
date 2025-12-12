import React from "react";
import Img from "../../assets/Images/ChooseUs/Group 161.png";
import Data from "../../assets/Data/DataChooseUs";
import GetStartedButton from "../../Components/GetStartedButton/GetStartedButton";
import NextProject from "../../Components/NextProject/NextProject";
const ChooseUs = () => {
  const colors = [
    "bg-indigo-100/60",
    "bg-red-100/60",
    "bg-green-100/60",
    "bg-slate-200/60",
  ];
  return (
    <div className="w-full flex flex-col justify-center items-center bg-primary px-0.5 py-16 relative">
      <div className="hidden sm:block absolute top-[20%] left-0 z-10">
        <img src={Img} alt="imge one" />
      </div>
      <div className=" mx-auto px-4 flex flex-col justify-center items-center sm:px-6 lg:px-8">
        <h2 className=" uppercase text-customRed font-questrial text-sm font-bold tracking-wider">
          why choose us
        </h2>
        <h2 className="mt-6 font-black font-questrial text-center text-lg  text-balance sm:text-2xl">
          People choose us because we
          <br /> serve the best for everyone
        </h2>
        <div className="grid grid-cols-1 auto-rows-fr gap-12 mt-20 md:w-10/12 md:grid md:grid-cols-2 md:gap-6 lg:w-2/3  xl:w-3/5 mx-auto">
          {Data.map((item) => (
            <div
              key={item.id}
              className="flex flex-col justify-center items-center  text-center sm:text-left  sm:flex sm:flex-row sm:justify-center sm:items-start"
            >
              <div
                className={`${
                  colors[item.id]
                } rounded-xl  flex justify-center items-center w-14 h-14 sm:mr-3 sm:w-14 sm:h-10 lg:w-16 lg:h-14`}
              >
                <img
                  src={item.image}
                  className="w-6  opacity-100 sm:w-5 lg:w-fit"
                />
              </div>
              <div className=" w-2/3 sm:w-full">
                <h2 className="font-questrial font-bold mt-2.5 text-balance sm:mt-0 sm:text-sm md:text-lg">
                  {item.title}
                </h2>
                <p className="font-questrial mt-2 text-slate-600 text-balance text-xs md:text-sm">
                  {item.des}
                </p>
                <p className="text-slate-600 font-questrial text-xs text-balance md:text-sm">
                  {item.des2}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <hr className=" w-10/12  h-1.5 text-gray-200 my-16 lg:w-3/4" />
     <NextProject color="text-slate-600" font="font-bold"/>
    </div>
  );
};

export default ChooseUs;
