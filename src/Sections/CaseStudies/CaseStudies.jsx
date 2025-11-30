import React from "react";
import ActionButton from "../../Components/ActionButton/ActionButton";
import Img1 from "../../assets/Images/CaseStudies/Img4.png";
import Img2 from "../../assets/Images/CaseStudies/Img2.png";
import Img3 from "../../assets/Images/CaseStudies/Img.png";
import Img4 from "../../assets/Images/CaseStudies/Img3.png";
import CaseStudiesCard from "../../Components/CaseStudiesCard/CaseStudiesCard";
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
        <div className=" flex flex-col gap-8 md:flex md:flex-row md:justify-start md:items-start md:gap-8 mb-8">
          <CaseStudiesCard
            image={Img1}
            title="graphic design"
            des=" aure branding design"
          />
          <CaseStudiesCard
            image={Img2}
            title="graphic design"
            des=" AB.S snack packaging"
          />
        </div>
        <div className=" flex flex-col gap-8 md:flex md:flex-row md:justify-start md:items-start md:gap-8">
          <CaseStudiesCard
            image={Img3}
            title="web development"
            des="gradient website development"
          />
          <CaseStudiesCard
            image={Img4}
            title="content writing"
            des="magazine content writing"
            position="md:absolute md:top-72 md:right-0"
          />
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
