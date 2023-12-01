import React from "react";
import { MdTask } from "react-icons/md";
import { IoPeople } from "react-icons/io5";
import { MdAddComment } from "react-icons/md";
import { FaBell } from "react-icons/fa";

const Sidebar = () => {
  return (
    <section className="bg-secondary w-72 rounded-bl-2xl    max-h-full h-[92%] py-5 pl-4 pr-3  ">
      <div className="w-full text-white flex flex-col gap-5">
        <p className="flex items-center gap-3">
          <MdTask />
          My Tasks
        </p>
        <p className="flex items-center gap-3">
          <MdTask />
          Activities
        </p>
        <p className="flex items-center gap-3">
          <MdTask />
          Reports
        </p>
      </div>
    </section>
  );
};

export default Sidebar;
