import React from "react";

const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url("https://i.ibb.co/PM9wtdj/outtel-banner-bg.webp")`,
      }}
    >
      <div className="hero-overlay bg-opacity-0"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="hidden lg:block">
          <img
            src="https://i.ibb.co/Y3FNfBS/outtel-one-img-laptops.webp"
            alt=""
          />
        </div>
        <div className="max-w-md text-base-100 text-2xl text-left">
          <p className="font-[Satisfy] text-yellow-300">
            Biggest Tech Manufacturer
          </p>
          <h1 className="mb-5 md:text-6xl  lg:text-9xl font-bold uppercase font-[Satisfy]">
            outtel tech
          </h1>
          <p className="mb-5">10% offer for next 30 days.</p>
          <button className="btn btn-primary">Buy now</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
