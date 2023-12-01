import React from "react";
import { useSelector } from "react-redux";
import { FaRegClock } from "react-icons/fa";

const Statusbar = () => {
  const { items } = useSelector((state) => state.task);

  //filtering completed Tasks
  const getCompletedTasks = () => {
    const completedTasks = items.filter((item) => {
      return item.status === "completed";
    });
    return completedTasks.length;
  };

  //filtering pending Tasks
  const getPendingTasks = () => {
    const completedTasks = items.filter((item) => {
      return item.status === "pending";
    });
    return completedTasks.length;
  };
  return (
    <section className="hidden h-full  bg-secondary w-3/12 py-8 px-4 lg:flex flex-col justify-between rounded-br-3xl">
      <aside className="bg-primary w-full p-4 rounded-lg text-white ">
        <p className="font-bold">Status</p>
        <hr className="w-1/3 mb-3" />

        <p className="flex items-center gap-2">
          <span className=" w-3 rounded-full bg-gray-600 h-3" />
          <span className="text-sm opacity-70 ">Total Tasks : </span>
          <span className="text-[13px]">{items?.length}</span>
        </p>

        <p className="flex items-center gap-2">
          <span className=" w-3 rounded-full bg-green-600 h-3" />
          <span className="text-sm opacity-70">Completed Tasks : </span>
          <span className="text-[13px]">{getCompletedTasks()}</span>
        </p>

        <p className="flex items-center gap-2">
          <span className="b w-3 rounded-full bg-red-600 h-3" />
          <span className="text-sm opacity-70">Pending Tasks : </span>
          <span className="text-[13px]">{getPendingTasks()}</span>
        </p>
      </aside>

      <aside className="  flex flex-col gap-5 pl-8 pr-2 py-6 rounded-2xl bg-primary  ">
        <div className="bg-[rgb(133,171,250)] px-3 py-2.5 rounded-xl flex gap-2 flex-col">
          <p className="text-sm leading-5">
            {" "}
            Create screens for own fitness plan.
          </p>
          <p className="flex gap-3 items-center text-xs text-gray-900">
            <FaRegClock />
            10:30am-12:00am
          </p>
        </div>

        <div className="bg-[rgb(92,194,152)] px-3 py-2.5 rounded-xl flex gap-2 flex-col">
          <p className="text-sm leading-5">
            {" "}
            Create screens for own fitness plan.
          </p>
          <p className="flex gap-3 items-center text-xs text-gray-900">
            <FaRegClock />
            10:30am-12:00am
          </p>
        </div>

        <div className="bg-[rgb(239,136,215)] px-3 py-2.5 rounded-xl flex gap-2 flex-col">
          <p className="text-sm leading-5">
            {" "}
            Create screens for own fitness plan.
          </p>
          <p className="flex gap-3 items-center text-xs text-gray-900">
            <FaRegClock />
            10:30am-12:00am
          </p>
        </div>
      </aside>
    </section>
  );
};

export default Statusbar;
