import React from "react";
import Img1 from "../../assets/Images/CaseStudies/Img4.png";
import Img2 from "../../assets/Images/CaseStudies/Img2.png";
import Img3 from "../../assets/Images/CaseStudies/Img.png";
import Img4 from "../../assets/Images/CaseStudies/Img3.png";
const CaseStudiesCard = (props) => {
  return (
    <>
        <div className={`${props.position}`}>
          <img src={props.image} className="max-w-full h-auto object-cover mb-4" />
          <h3 className="capitalize font-questrial text-center text-slate-500 md:text-left ">
           {props.title}
          </h3>
          <p className="capitalize font-questrial font-black text-center md:text-left">
          {props.des}
          </p>
        </div>
       
    
     
    </>
  );
};

export default CaseStudiesCard;
