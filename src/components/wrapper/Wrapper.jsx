import React from "react";

const Wrapper = ({ children }) => {
  return (
    <section className="bg-primary p-7 w-screen h-screen">{children}</section>
  );
};

export default Wrapper;
