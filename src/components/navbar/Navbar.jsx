import moment from "moment";
import React from "react";
import { LuClock2 } from "react-icons/lu";
import { CiCalendarDate } from "react-icons/ci";
import { IoAlarm } from "react-icons/io5";

const Navbar = () => {
  const month = moment().format("MMMM");
  const day = moment().format("dddd");
  const time = moment().format("h:mm:a");
  return (
    <div className="rounded-t-2xl mb-[0px] drop-shadow-lg shadow-slate-900  bg-secondary w-full  flex justify-between items-center px-8 py-3  text-white ">
      <section className="text-white text-lg font-semibold flex items-center gap-3">
        <IoAlarm className="text-orange-500 text-3xl" />
        Task Management
      </section>

      <section className="flex gap-5 items-center ">
        <div className="flex items-center gap-1 text-sm font-medium opacity-80">
          <CiCalendarDate className="text-2xl  w-6 opacity-100" />
          <span>{day.substring(0, 3)} , </span>
          <span> {month.substring(0, 3)}</span>
          <span>{new Date().getDate()}</span>
        </div>

        <div className="flex gap-2 items-center text-sm font-medium opacity-80">
          <LuClock2 className="text-lg opaci-100" />
          <span>{time}</span>
        </div>
      </section>
    </div>
  );
};

export default Navbar;
