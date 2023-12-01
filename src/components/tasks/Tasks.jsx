import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTasks } from "../../store/task/taskAction";
import TaskHeader from "./TaskHeader";

import Task from "./Task";
import { toast } from "react-toastify";

const Tasks = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.task);

  useEffect(() => {
    dispatch(getAllTasks());
  }, []);
  return (
    <div className="h-auto text-red-90 w-full px-2  md:w-4/5 lg:w-3/5   pt-6 pb-3    overflow-y-auto md:px-8   ">
      <TaskHeader />
      <ul className="flex flex-col gap-4  mt-6 ">
        {items.map((task, i) => (
          <Task key={task.id} task={task} i={i} />
        ))}
      </ul>
    </div>
  );
};

export default Tasks;
