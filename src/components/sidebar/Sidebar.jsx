import React from "react";
import { MdTask } from "react-icons/md";
import { IoPeople } from "react-icons/io5";
import { MdAddComment } from "react-icons/md";
import { FaBell } from "react-icons/fa";
import SidebarItem from "./SidebarItem";

const Sidebar = ({ isOpen }) => {
  return (
    <section
      className={`${
        isOpen ? "ml-0 duration-700" : "-ml-56 md:ml-0 fixed md:static  "
      } bg-secondary  transition-all  md:static w-40 md:w-60 rounded-bl-2xl    max-h-full h-full py-7    md:flex flex-col `}
    >
      <ul className="w-full text-white flex flex-col gap-4  ">
        <SidebarItem title="My Tasks" link="/" icon={<MdTask />} />

        <SidebarItem
          title="Add Task"
          link="/add-task"
          icon={<MdAddComment />}
        />
        <SidebarItem title="Meetings" link="/meeting" icon={<IoPeople />} />
        <SidebarItem title="Activity" link="activity" icon={<FaBell />} />
      </ul>

      <div className=" w-full   h-full  relative hidden md:block">
        <aside className="absolute bottom-0 flex items-center gap-3 justify-center  w-full ">
          <img src="sagar.jpg" className="rounded-full h-10 w-10 " alt="" />
          <h4 className=" ">
            <p className="text-white font-semibold text-[12px]">
              Sagar Thapa Chhetri{" "}
            </p>
            <p className="text-gray-300 text-xs">React Developer</p>
          </h4>
        </aside>
      </div>
    </section>
  );
};

export default Sidebar;
