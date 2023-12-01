import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { deleteTask, getAllTasks } from "../../store/task/taskAction";
import { useDispatch } from "react-redux";

const Task = ({ task, i }) => {
  const dispatch = useDispatch();

  const handleDelete = async (id) => {
    try {
      const a = await dispatch(deleteTask(id)).unwrap();
      dispatch(getAllTasks());
    } catch (error) {
      //   toast.error("Task deletion failed.");
      console.log(error.message);
    }
  };

  const checkStatus = (status) => {
    return status === "completed" ? (
      <RiVerifiedBadgeFill className="text-green-600 text-lg" />
    ) : (
      <AiOutlineLoading3Quarters className="text-red-600 text-lg" />
    );
  };

  const getColorClass = (taskId) => {
    const colorIndex = taskId % 3; // Change 3 to the number of colors you want to cycle through

    switch (colorIndex) {
      case 0:
        return "bg-blue-500";
      case 1:
        return "bg-pink-500";
      case 2:
        return "bg-green-500";
      // Add more cases as needed
      default:
        return "bg-gray-500"; // Default color if task.id doesn't match any case
    }
  };
  return (
    <li className="w-full  px-5 py-3 flex gap-5 bg-secondary rounded-lg text-white items-center justify-between  drop-shadow-lg border border-gray-950">
      <div className="text-sm flex gap-2 items-center">
        <p
          className={`w-7 h-7 rounded-full font-semibold flex items-center justify-center ${getColorClass(
            task.id
          )}`}
        >
          {task.id}
        </p>
        {task.title}
      </div>

      <div className="flex gap-4 ">
        <aside className="flex gap-2">
          <span className="text-gray-400 text-sm mr-4">
            {checkStatus(task.status)}
          </span>
          <span className="text-[11px] font-sans">{task.date}</span>
        </aside>

        <aside className="flex gap-3 text-lg">
          <FiEdit className="text-blue-600 cursor-pointer hover:opacity-75" />
          <RiDeleteBin6Line
            className="text-red-500 cursor-pointer hover:opacity-75"
            onClick={() => handleDelete(task.id)}
          />
        </aside>
      </div>
    </li>
  );
};

export default Task;
