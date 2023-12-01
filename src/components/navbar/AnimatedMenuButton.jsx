import React from "react";

const AnimatedMenuButton = (props) => {
  const { useState } = React;

  const genericHamburgerLine = `h-1   border-gray-300 border   w-7 sm:w-10 my-[3px] rounded-full bg-gray-300 transition ease transform duration-300`;

  return (
    <button
      className={`md:hidden flex flex-col h-12 w-14     rounded justify-center items-center group ${props.style}  `}
      // onClick={() => setIsOpen(!isOpen)}
      onClick={props.toggleMenu}
    >
      <div
        className={`${genericHamburgerLine} ${
          props.isOpen
            ? "rotate-[45deg]     translate-y-3 opacity-70 group-hover:opacity-75"
            : "opacity-70 h-[3px] group-hover:opacity-75"
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          props.isOpen
            ? "opacity-0"
            : "opacity-70 h-[3px] group-hover:opacity-75"
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          props.isOpen
            ? "-rotate-[45deg]   -translate-y-3 opacity-70 group-hover:opacity-75"
            : "opacity-70 h-[3px] group-hover:opacity-75"
        }`}
      />
    </button>
  );
};

export default AnimatedMenuButton;
