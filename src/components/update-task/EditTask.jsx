import React, { useEffect, useState } from "react";
import { MdAddToPhotos } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  createTask,
  getTaskById,
  updateTask,
} from "../../store/task/taskAction";
import moment from "moment";
import { useParams } from "react-router-dom";

const EditTask = () => {
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");
  const [status, setStatus] = useState("pending");
  const { itemById } = useSelector((state) => state.task);
  const dispatch = useDispatch();
  const params = useParams();

  const handleChange = (e) => {
    setStatus(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.length) {
      setError("Title cannot be empty");
      return;
    }

    const updatedTask = {
      title: title,
      status: status,
      date: itemById.date,
    };
    const values = {
      updatedTask: updatedTask,
      taskId: itemById.id,
    };

    // Dispatch the action to update the task
    dispatch(updateTask(values));
    setTitle("");
  };

  const fetchTaskById = async () => {
    try {
      // Dispatch the action to get the task by ID
      await dispatch(getTaskById(params));
    } catch (err) {
      console.error("Error fetching task by ID:", err);
    }
  };

  useEffect(() => {
    fetchTaskById();
  }, []); // Ensure the effect runs only once on mount

  useEffect(() => {
    if (itemById) {
      // Update the form fields when itemById changes
      setTitle(itemById.title);
      setStatus(itemById.status);
    }
  }, [itemById]);

  return (
    <div className="h-auto text-red-90 w-full px-2 md:w-4/5 lg:w-3/5 pt-6 pb-3 overflow-hidden md:pl-8  ">
      <header className="items-center text-white flex justify-between mx-auto w-[95%]">
        <h4 className="text-2xl font-semibold flex items-center gap-4 ">
          <MdAddToPhotos className="text-xl sm:text-2xl" />
          Edit Task
        </h4>
      </header>

      <section className=" flex md:h-full mt-14 md:mt-0 md:items-center   justify-between  ">
        <form
          className="w-full  lg:w-3/4     border-gray-700 border px-8 pb-7 pt-5 -mt-2 rounded-2xl  mx-auto"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-xl text-opacity-70 pl-1 tracking-wider font-medium text-white"
            >
              Title
            </label>
            <textarea
              id="title"
              name="title"
              rows="10"
              className="mt-1 p-2 w-full text-sm rounded-md bg-gray-800 text-white"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            ></textarea>
          </div>

          <div className="mb-4">
            <label
              htmlFor="status"
              className="block tracking-wider text-xl text-opacity-70 pl-1 font-medium text-white"
            >
              Status
            </label>
            <select
              id="status"
              name="status"
              className="mt-1 p-2 w-full rounded-md bg-gray-800 text-white"
              value={status}
              onChange={handleChange}
            >
              <option value="pending">Pending</option>
              <option value="completed">Completed</option>
            </select>
          </div>
          {error.length > 0 && (
            <p className="w-full text-red-300 h-8 text-sm -mt-2 px-1">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Update Task
          </button>
        </form>
      </section>
    </div>
  );
};

export default EditTask;
