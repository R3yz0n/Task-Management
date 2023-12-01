import React from "react";

const Wrapper = ({ children }) => {
  return (
    // wrapper for Layout
    <section className="bg-primary pt-6 pb-4 px-2 md:px-4 w-screen max-h-full h-screen ">
      {children}
    </section>
  );
};

export default Wrapper;
