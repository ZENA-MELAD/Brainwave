import React from "react";
import ActionButton from "../../Components/ActionButton/ActionButton";
import Img1 from "../../assets/Images/CaseStudies/Img4.png";
import Img2 from "../../assets/Images/CaseStudies/Img2.png";
import Img3 from "../../assets/Images/CaseStudies/Img.png";
import Img4 from "../../assets/Images/CaseStudies/Img3.png";
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
      <div className="mt-10 relative">
        <div className=" flex flex-col gap-8 md:flex md:flex-row md:justify-start md:items-start md:gap-10 mb-8">
          <div className="">
            <img src={Img1} className="max-w-full h-auto object-cover mb-4" />
            <h3 className="capitalize font-questrial text-center text-slate-500 md:text-left ">
              graphic design
            </h3>
            <p className="capitalize font-questrial font-black text-center md:text-left">
              aure branding design
            </p>
          </div>
          <div className="">
            <img src={Img2} className="max-w-full h-auto object-cover mb-4" />
            <h3 className="capitalize font-questrial text-center text-slate-500 md:text-left ">
              graphic design
            </h3>
            <p className="capitalize font-questrial font-black text-center md:text-left">
              AB.S snack packaging
            </p>
          </div>
        </div>
        <div className=" flex flex-col gap-8 md:flex md:flex-row md:justify-start md:items-start md:gap-8">
          <div className="">
            <img src={Img3} className="max-w-full h-auto object-cover mb-4" />
            <h3 className="capitalize font-questrial text-center text-slate-500 md:text-left ">
              web development
            </h3>
            <p className="capitalize font-questrial font-black text-center md:text-left">
              gradient website development
            </p>
          </div>
          <div className=" md:absolute md:top-72 right-0">
            <img src={Img4} className="max-w-full h-auto object-cover mb-4" />
            <h3 className="capitalize font-questrial text-center text-slate-500 md:text-left ">
              content writing
            </h3>
            <p className="capitalize font-questrial font-black text-center md:text-left">
              magazine content writing
            </p>
          </div>
        </div>
      </div>
      <ActionButton
        label="see all works"
        color="text-indigo-800"
        hover="hover:text-indigo-900"
      />
    </div>
  );
};

export default CaseStudies;
