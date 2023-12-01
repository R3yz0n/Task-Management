import React from "react";

const TaskHeader = () => {
  return (
    <header className="items-center text-white flex justify-between  mx-auto w-[95%] ">
      <h4 className="sm:text-lg font-semibold"> My Tasks</h4>
      <section className="flex gap-5 ">
        <div className="relative hidden md:flex items-center w-72 h-9 rounded-3xl focus-within:shadow-lg bg-secondary  overflow-hidden border-gray-800 border-[1px] ">
          <input
            className="peer h-full w-full outline-none text-sm text-gray-700 pr-2 bg-secondary px-5 "
            type="text"
            id="search"
            placeholder="Search something.."
          />
          <div className="grid place-items-center h-full w-12 text-gray-300 -ml-5 pr-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
        <button className="bg-[rgb(100,105,245)] text-sm sm:text-base rounded-3xl pl-3 pr-4 sm:pl-4 sm:pr-6 flex items-center gap-2">
          <span className="font-semibold text-xl sm:text-2xl">+</span>
          <span>Task</span>
        </button>
      </section>
    </header>
  );
};

export default TaskHeader;
