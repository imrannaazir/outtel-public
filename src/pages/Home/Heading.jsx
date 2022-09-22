import React from "react";

const Heading = ({ children }) => {
  return (
    <div className="flex flex-col justify-center items-center my-6 space-y-4">
      <p className="text-4xl uppercase text-center ">{children}</p>
      <div className="h-[2px] w-8  bg-primary rounded-full" />
    </div>
  );
};

export default Heading;
