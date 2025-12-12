import React from "react";

const LinksNav = () => {
  return (
    <nav aria-label="Footer navigation">
      <div className="grid grid-cols-1 gap-10  sm:grid-cols-2 md:gap-16 lg:text-base lg:grid-cols-4">
        <div className=" flex flex-col gap-4 text-center md:text-left">
          <h3 className="font-questrial text-slate-400 uppercase tracking-wide">company</h3>
          <ul className=" text-slate-300 font-questrial flex flex-col gap-2">
            <li className="transition-all duration-300 hover:text-slate-400">
              <a href="#">About us</a>
            </li>
            <li className="transition-all duration-300 hover:text-slate-400">
              <a href="#">Contact us</a>
            </li>
            <li className="transition-all duration-300 hover:text-slate-400">
              <a href="#">Careers</a>
            </li>
            <li className="transition-all duration-300 hover:text-slate-400">
              <a href="#">Press</a>
            </li>
          </ul>
        </div>
        <div className=" flex flex-col gap-4 text-center md:text-left">
          <h3 className="font-questrial text-slate-400 uppercase tracking-wide">product</h3>
          <ul className="text-slate-300 font-questrial flex flex-col gap-2">
            <li className="transition-all duration-300 hover:text-slate-400" >
              <a href="#">Features</a>
            </li>
            <li className="transition-all duration-300 hover:text-slate-400">
              <a href="#">Pricing</a>
            </li>
            <li className="transition-all duration-300 hover:text-slate-400">
              <a href="#">News</a>
            </li>
            <li className="transition-all duration-300 hover:text-slate-400">
              <a href="#">Help desk</a>
            </li>
            <li className="transition-all duration-300 hover:text-slate-400">
              <a href="#">Support</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 text-center md:text-left">
          <h3 className="font-questrial text-slate-400 uppercase tracking-wide">services</h3>
          <ul className="text-slate-300 font-questrial flex flex-col gap-2">
            <li className="transition-all duration-300 hover:text-slate-400">
              <a href="#">Digital Marketing</a>
            </li>
            <li className="transition-all duration-300 hover:text-slate-400">
              <a href="#">Content Writing</a>
            </li>
            <li className="transition-all duration-300 hover:text-slate-400"> 
              <a href="#">SEO for Business</a>
            </li>
            <li className="transition-all duration-300 hover:text-slate-400">
              <a href="#">UI Design</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 text-center md:text-left">
          <h3 className="font-questrial text-slate-400 uppercase tracking-wide">legal</h3>
          <ul className="text-slate-300 font-questrial flex flex-col gap-2">
            <li className="transition-all duration-300 hover:text-slate-400">
              <a href="#">Privacy Policy</a>
            </li>
            <li className="transition-all duration-300 hover:text-slate-400">
              <a href="#">Terms & Conditions</a>
            </li>
            <li className="transition-all duration-300 hover:text-slate-400">
              <a href="#">Return Policy</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default LinksNav;
