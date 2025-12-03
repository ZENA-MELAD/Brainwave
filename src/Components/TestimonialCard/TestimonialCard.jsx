import React from "react";
const TestimonialCard = (props) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center mt-6">
        <div className="max-w-md w-full  px-9 sm:px-6 text-center">
          <h2 className="text-white font-questrial font-medium mb-5 text-center text-base sm:text-lg md:text-xl">
            {`“${props.opinion}”`}
          </h2>
        </div>
        <div className=" flex justify-center items-center mb-4  rounded-full w-20 h-20 lg:w-24 lg:h-24">
          <img
            src={props.image}
            className="w-full object-cover h-full rounded-full"
          />
        </div>
        <h3 className=" capitalize font-questrial text-gray-50 text-center">
          {props.name}
        </h3>
        <h3 className=" capitalize font-questrial text-white text-center opacity-65 tracking-wider">
          {props.profession}
        </h3>
      </div>
    </>
  );
};

export default TestimonialCard;
