// SidebarItem.js
import React from "react";
import { Link, useLocation } from "react-router-dom";

const SidebarItem = ({ title, icon, link }) => {
  const location = useLocation();

  // Check if the current route matches the link prop
  const isSelected = location.pathname === link;

  return (
    <li>
      <Link
        className={`flex  items-center gap-3  relative pl-3 pr-3 py-3  sm:py-3   sm:pl-6 sm:pr-4  duration-700 transition-all ${
          isSelected ? "bg-primary rounded-md text-white " : " text-gray-400"
        }`}
        to={link}
      >
        {isSelected && (
          <span className=" sm:w-1 h-full border-[rgb(99,104,230)] absolute top-0 left-0 border sm:border-[3px]" />
        )}
        <span className="text-lg sm:text-2xl">{icon}</span>
        <span className="text-sm font-medium">{title}</span>
      </Link>
    </li>
  );
};

export default SidebarItem;
