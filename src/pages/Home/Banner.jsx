import React from "react";

const Banner = () => {
  return (
    <div className="w-full relative h-screen">
      <img
        className="w-full"
        src="https://i.ibb.co/HH2NDjg/banner.jpg"
        alt=""
      />
      <div className="absolute lg:w-[50%] top-[30%] right-0 flex flex-col items-center">
        <div>
          <p className="text-lg">Welcome to</p>
          <p className="text-4xl font-bold">
            {" "}
            World's Biggest Tech Manufacturer
            <br />
            <span className="text-primary font-extrabold">OutTel Tech</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
