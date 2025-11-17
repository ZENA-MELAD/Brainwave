import React from "react";
import { FaArrowRight } from "react-icons/fa";
const LearnMore = () => {
  return (
    <button className="cursor-pointer capitalize mt-7 flex text-gray-50 transition-all ease-in-out duration-200 hover:text-gray-400">
      learn more <FaArrowRight className="mt-2 ml-2.5 text-xs " />
    </button>
  );
};

export default LearnMore;
