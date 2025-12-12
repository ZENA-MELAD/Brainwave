import React from "react";
import NextProject from "../../Components/NextProject/NextProject";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import LinksNav from "../../Components/LinksNav/LinksNav";
const Footer = () => {
  return (
    <div className=" w-full bg-slate-900 py-16 flex flex-col justify-center items-center">
      <NextProject color="text-slate-400" title="text-white" font="font-medium" />
      <hr className=" h-1 w-10/12 text-gray-800 my-14" />
      <div className="flex flex-col justify-center items-center gap-16 lg:gap-10 lg:flex-row lg:items-start">
        <div className="flex flex-col justify-center items-center gap-6 lg:justify-start  lg:items-start lg:ml-9">
          <h2 className="text-white text-xl tracking-wider font-questrial font-bold">
            Brainwave.io
          </h2>
          <p className="text-slate-400 font-questrial text-center  text-balance max-w-sm lg:text-left">
            With lots of unique blocks,you can easily build a page without
            coding.
            <br /> Build your next landing page.
          </p>
          <div className="flex justify-start items-center gap-6 text-base">
            <a href="#">
              <FaTwitter className="text-green-400" />
            </a>
            <a href="#">
              <FaFacebookSquare className="text-gray-500" />
            </a>
            <a href="#">
              <FaInstagram className="text-gray-500" />
            </a>
            <a href="#">
              <FaLinkedin className="text-gray-500" />
            </a>
          </div>
        </div>
        <LinksNav/>
      </div>
    </div>
  );
};

export default Footer;
