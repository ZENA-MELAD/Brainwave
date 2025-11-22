import React from "react";
import Img1 from "../../assets//Images/OurStory/1.png";
import Img2 from "../../assets//Images/OurStory/2.png";
import Img3 from "../../assets//Images/OurStory/3.png";
import Fill from "../../assets//Images/OurStory/Fill 1.png";
import Store from "../../assets/Data/Store";
const OurStory = () => {
  return (
    <div className="w-full px-3 flex flex-col justify-center items-center mt-16 sm:px-6 xl:px-10">
      <div className=" flex flex-col justify-center items-center sm:items-start sm:w-10/12  xl:w-3/4">
        <h2 className="  text-base  text-customRed font-questrial font-bold uppercase sm:text-sm">
          our story
        </h2>
        <h2 className=" mt-4 font-bold font-questrial text-lg  text-center sm:text-2xl sm:w-3/4 sm:text-left md:w-2/3">
          We know how everthing works and why your business is failing over and
          over again.
        </h2>
      </div>
      <div className="flex flex-col justify-center items-center  sm:flex sm:flex-row sm:justify-between sm:items-center sm:w-10/12 sm:mt-6 xl:w-3/4  ">
        <div className="mt-10 flex justify-center items-center sm:w-2/5 sm:mt-20 xl:w-fit">
          <img src={Img1} alt="img 1" className="w-full object-cover" />
        </div>
        <div className="flex flex-col justify-center items-center sm:w-2/3 xl:w-3/4">
          <div className="flex justify-start items-center mt-6 sm:w-10/12  md:mt-0  ">
            <div className=" relative  top-10  sm:-top-6 md:-top-12 lg:-top-16">
              <img
                src={Fill}
                alt="fill image"
                className=" absolute z-10 -right-6 -top-8"
              />
              <img src={Img2} alt="image 2" className="" />
            </div>
            <div className=" relative top-10 ml-4 sm:ml-7 sm:-top-4 md:-top-6 lg:-top-8">
              <img src={Img3} alt="image 3" />
            </div>
          </div>
          <div className="flex justify-center items-center mt-6  w-full  sm:mt-0   sm:w-10/12">
            <p className=" font-questrial text-slate-600 relative top-10 sm:top-0">
              we share common trends and strategies for improving your rental
              income and making sure you stay in high demand.with lots of unique
              blocks,you can easily build a page without coding .Build your next
              landing page.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1  mt-20 sm:w-10/12 sm:grid sm:grid-cols-3 xl:w-9/12">
        {Store.map((item) => (
          <div
            key={item.id}
            className="flex flex-col justify-center items-center mb-4  sm:mb-0 sm:mr-4 sm:h-48"
          >
            <h3 className="font-questrial uppercase font-black text-4xl">
              {item.num}
            </h3>
            <p className="text-sm text-center font-questrial text-slate-600 mt-3.5">
              {item.des}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default OurStory;
