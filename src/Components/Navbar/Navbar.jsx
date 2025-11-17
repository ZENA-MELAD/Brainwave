import React, { useState } from "react";
import { Sling as Hamburger } from "hamburger-react";
import GetStartedButton from "../GetStartedButton/GetStartedButton";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const links = ["demos", "pages", "support", "contact"];

  return (
    <nav className="relative px-3 py-1 md:w-full md:flex md:justify-center md:items-center">
      {/* اللوغو + الهامبرغر */}
      <div className="flex items-center justify-between md:mr-16">
        <h1 className="font-rubik font-bold text-xl md:mx-auto">
          brainwave.io
        </h1>
        <div className="md:hidden z-50">
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
      </div>

      {/* قائمة الروابط + الزر */}
      <div
        className={`
          ${isOpen ? "flex" : "hidden"}
          flex-col items-center
          overflow-hidden transition-all duration-500 ease-in-out
          ${isOpen ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"}
          md:flex md:flex-row md:justify-between md:items-center md:w-2/3 md:max-h-full md:opacity-100 md:mt-0
        `}
      >
        <ul className="flex flex-col items-center md:flex-row md:items-center md:space-x-10  w-full md:w-auto">
          {links.map((item) => (
            <li
              key={item}
              className="capitalize font-medium font-questrial hover:text-indigo-700 py-2 md:py-0 text-center"
            >
              <a href="#">{item}</a>
            </li>
          ))}
        </ul>

        {/* زر Get Started */}
        <div
          className={`
            mt-2
            overflow-hidden transition-all duration-500 ease-in-out
            ${isOpen ? "max-h-20 opacity-100" : "max-h-0 opacity-0"}
            md:max-h-full md:opacity-100 md:mt-0
          `}
        >
          <GetStartedButton />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
