import React from "react";
import Card from "../../Components/Card/Card";
import Img from "../../assets/Images/ServicesSec/Group 101.png";
import Img2 from "../../assets/Images/ServicesSec/Oval.png";
import { FaStar } from "react-icons/fa6";
const Services = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center px-2.5 mt-20">
      <h2 className=" uppercase text-customRed font-bold text-sm font-questrial tracking-wider">
        our services
      </h2>
      <h2 className=" text-xl mt-6 text-center font-bold font-questrial md:text-2xl">
        We provide great services for our <br /> customers based on needs
      </h2>
      <div className="w-full mt-10 relative ">
        <Card />
        <div className=" relative z-10 ">
          <img src={Img} className=" absolute -bottom-3 right-2 sm:right-0  md:right-4 lg:right-22  xl:right-36 " />
        </div>
        </div>
        <div className=" w-full mt-10  flex flex-col justify-center items-center  sm:flex sm:flex-row sm:justify-center sm:items-center sm:mt-16">
          <div className="flex justify-center items-center sm:mr-4">
            <img src={Img2} className="w-20" />
          </div>
          <div className=" flex flex-col justify-center items-center p-4  sm:items-start sm:w-1/2 lg:w-2/5">
            <div className="flex mb-5">
              {Array.from({ length: 5 }, (_, i) => (
                <FaStar key={i} className="text-amber-300 mr-1.5 text-sm" />
              ))}
            </div>
            <p className=" font-questrial font-bold text-lg ">
              "OMG!I cant believe that i have got a brand new landing page after
              getting Albino.It was super easy to edit and publish."
            </p>
            <div className="mt-6 flex">
              <h2 className="font-questrial font-bold capitalize">
                {" "}
                franklin hicks
              </h2>
              <h2 className="font-questrial text-gray-500 font-medium capitalize">
                web developer
              </h2>
            </div>
          </div>
        </div>
      <hr className= " mt-6 w-2/3 sm:mt-10 sm:w-3/5 h-1 text-gray-200"/>
    </div>
  );
};

export default Services;
