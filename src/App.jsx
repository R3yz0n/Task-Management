import React, { useState } from "react";
import Wrapper from "./components/wrapper/Wrapper";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import { Route, Routes } from "react-router-dom";
import Tasks from "./components/tasks/Tasks";
import AddTask from "./components/add-task/AddTask";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Statusbar from "./components/status-bar/Statusbar";
import EditTask from "./components/update-task/EditTask";
import ErrorPage from "./components/ErrorPage";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    console.log(1);
    setIsOpen(!isOpen);
  };
  return (
    <Wrapper>
      {/* toast container is used for notification */}
      <ToastContainer />

      <main className=" h-full w-full rounded-xl  ">
        <Navbar isOpen={isOpen} toggleMenu={toggleMenu} />
        <section className="flex h-[90%] relative ">
          <Sidebar isOpen={isOpen} />
          <Routes>
            <Route path="/" element={<Tasks />} />
            <Route path="/add-task" element={<AddTask />} />
            <Route path="/edit-task/:id" element={<EditTask />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
          <Statusbar />
        </section>
      </main>
    </Wrapper>
  );
};

export default App;
