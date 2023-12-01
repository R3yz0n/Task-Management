import React from "react";
import Wrapper from "./components/wrapper/Wrapper";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import { Route, Routes } from "react-router-dom";
import Tasks from "./components/tasks/Tasks";
import AddTask from "./components/add-task/AddTask";

const App = () => {
  return (
    <Wrapper>
      <div className=" h-full w-full rounded-xl ">
        <Navbar />
        <div className="flex h-full">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Tasks />} />
            <Route path="/add" element={<AddTask />} />
            {/* <Route path="/reports" component={Reports} /> */}
          </Routes>
        </div>
      </div>
    </Wrapper>
  );
};

export default App;
