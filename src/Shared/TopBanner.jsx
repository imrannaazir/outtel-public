import React from "react";

const TopBanner = ({ img, pageName }) => {
  return (
    <div
      style={{ backgroundImage: `url(${img})` }}
      className="hero bg-cover min-h-[300px] gap-10 "
    >
      <div className=""></div>
      <div className="hero-content text-center text-base-100  lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">{pageName}</h1>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
