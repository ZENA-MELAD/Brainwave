import React from "react";
import Data from "../../assets/Data/DataCaseStudies";
import ActionButton from "../../Components/ActionButton/ActionButton";
const CaseStudies = () => {
  return (
    <div className="w-full mx-auto flex flex-col justify-center items-center py-10">
      <h2 className="font-questrial text-customRed uppercase text-sm font-bold tracking-wider">
        case studies
      </h2>
      <h2 className="font-questrial font-bold mt-6 text-center  text-lg sm:text-2xl">
        Our works describe why we are <br />
        the best in the business
      </h2>
      <div className="mt-10 columns-1 md:columns-2 md:gap-12 ">
        {Data.map((item) => (
          <div key={item.id} className=" break-inside-avoid w-full  mb-8 ">
            <img
              src={item.image}
              alt=""
              className="max-w-full h-auto object-cover mb-4"
            />
            <h3 className="capitalize font-questrial text-center text-slate-500 md:text-left ">
              {item.title}
            </h3>
            <p className="capitalize font-questrial font-black text-center md:text-left">{item.des}</p>
          </div>
        ))}
      </div>
      <ActionButton label="see all works" color="text-indigo-800" hover="hover:text-indigo-900"/>
    </div>
  );
};

export default CaseStudies;
