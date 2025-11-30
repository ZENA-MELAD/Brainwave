import React from "react";
import { FaArrowRight } from "react-icons/fa";
const ActionButton = (props) => {
  return (
    <button
      className={`${props.color} cursor-pointer capitalize mt-7 flex font-medium transition-all ease-in-out duration-200  hover: ${props.hover}`}
    >
      {props.label} <FaArrowRight className="mt-2 ml-2.5 text-xs " />
    </button>
  );
};

export default ActionButton;
