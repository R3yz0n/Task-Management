import moment from "moment";
import React from "react";
import { LuClock2 } from "react-icons/lu";
import { CiCalendarDate } from "react-icons/ci";
import { IoAlarm } from "react-icons/io5";
import AnimatedMenuButton from "./AnimatedMenuButton";

const Navbar = ({ toggleMenu, isOpen }) => {
  const month = moment().format("MMMM");
  const day = moment().format("dddd");
  const time = moment().format("h:mm:a");
  return (
    <header className="rounded-t-2xl mb-[3px]  drop-shadow-lg shadow-slate-900  bg-secondary w-full  flex justify-between items-center px-5 sm:px-8 py-2 sm:py-3  text-white  ">
      <section
        className="text-white text-base sm:text-xl sm:tracking-wider font-medium flex  items-center gap-3 -ml-3 sm:-ml-0"
        onClick={toggleMenu}
      >
        <IoAlarm className="text-orange-500 text-4xl hidden md:block " />
        <AnimatedMenuButton toggleMenu={toggleMenu} isOpen={isOpen} />
        Task Management
      </section>

      <section className="flex gap-5 items-center ">
        <div className="flex items-center gap-1 text-sm font-medium opacity-80">
          <CiCalendarDate className="text-2xl  w-6 opacity-100" />
          <span>{day.substring(0, 3)} , </span>
          <span> {month.substring(0, 3)}</span>
          <span>{new Date().getDate()}</span>
        </div>

        <div className="sm:flex gap-2 items-center text-sm font-medium opacity-80 hidden">
          <LuClock2 className="text-lg opaci-100" />
          <span>{time}</span>
        </div>
      </section>
    </header>
  );
};

export default Navbar;
