import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import GetStartedButton from "../../Components/GetStartedButton/GetStartedButton";
import Img from "../../assets/Images/HeroSec/Image.png";

const Hero = () => {
  return (
    <div className="bg-primary px-2.5 py-3">
      <Navbar />
      <div className=" flex flex-col justify-center items-center mt-12 px-3 custom:w-full custom:flex   custom:flex-row custom:justify-center custom:items-center  ">
        <div className="  custom:w-2/5">
          <h2 className=" uppercase text-customRed font-bold text-xs tracking-wide">
            lets shift your business
          </h2>
          <h2 className=" font-bold text-3xl tracking-wide mt-3 lg:text-4xl">
            Shift your business
            <br />
            fast with Shade Pro.
          </h2>
          <p className="mt-3 text-gray-400  text-sm tracking-wide  lg:text-base">
            With lost of unique blocks, you can easily build a page without
            coding.Build your next consultancy website within few minutes.
          </p>
          <div className=" mt-3">
            <GetStartedButton />
          </div>
        </div>
        <div className="   mt-6 custom:flex custom:justify-center custom:items-center custom:mt-0 custom:ml-10 ">
          <img src={Img} className="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
