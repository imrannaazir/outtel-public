import React from "react";

const OfferBanner = () => {
  return (
    <div className="relative">
      <img
        className="min-w-full"
        src="https://i.ibb.co/9w920QF/offer.webp"
        alt=""
      />
      <p className="absolute text-5xl font-bold top-[30%] left-[25%] text-yellow-200 uppercase -rotate-12">
        Computer <br /> Processor
      </p>
    </div>
  );
};

export default OfferBanner;
