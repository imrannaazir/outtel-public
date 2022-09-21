import React from "react";

const Banner = () => {
  return (
    <div
      class="hero min-h-screen"
      style={{
        backgroundImage: `url("https://i.ibb.co/PM9wtdj/outtel-banner-bg.webp")`,
      }}
    >
      <div class="hero-overlay bg-opacity-0"></div>
      <div class="hero-content text-center text-neutral-content">
        <div class="hidden lg:block">
          <img
            src="https://i.ibb.co/Y3FNfBS/outtel-one-img-laptops.webp"
            alt=""
          />
        </div>
        <div class="max-w-md text-base-100 text-2xl text-left">
          <p className="font-[Satisfy] text-yellow-300">
            Biggest Tech Manufacturer
          </p>
          <h1 class="mb-5 text-9xl font-bold uppercase">outtel tech</h1>
          <p class="mb-5">10% offer for next 30 days.</p>
          <button class="btn btn-primary">Buy now</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
