import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick/lib/slider";
import axios from "axios";

const OurClients = () => {
  const [logos, setLogos] = useState([]);
  useEffect(() => {
    (async function () {
      const { data } = await axios.get("logo.json");
      setLogos(data);
    })();
  }, []);

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 7000,
    autoplaySpeed: 0,
    cssEase: "linear",
  };
  return (
    <div className="w-[80%] mx-auto bg-base-200 mt-20">
      <p className="text-center text-xl ">OUR CLIENTS</p>

      <div>
        <Slider {...settings} className="flex">
          {logos.map((logo) => (
            <div key={logo} className="">
              <img src={logo} alt="" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default OurClients;
