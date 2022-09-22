import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick/lib/slider";
import axios from "axios";
import Heading from "./Heading";

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
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div className="px-16 bg-base-100 my-16">
      <Heading>OUR CLIENTS</Heading>

      <div>
        <Slider {...settings} className="flex">
          {logos.map((logo) => (
            <div key={logo} className="">
              <img className=" w-[150px]" src={logo} alt="" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default OurClients;
