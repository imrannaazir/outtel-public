import React from "react";
import Category from "./Category";
import Heading from "./Heading";
// import AOS from "aos";
// import "aos/dist/aos.css";

const Categories = () => {
  const categories = [
    {
      name: "New Arrivals",
      img: "https://i.ibb.co/J2tWfTJ/new-arrivals.png",
      id: "new_arrivals",
    },
    {
      name: "Processors",
      img: "https://i.ibb.co/VgNyFXx/processor.png",
      id: "processors",
    },
    {
      name: "Graphics Card",
      img: "https://i.ibb.co/ng0GxPM/graphics-card.png",
      id: "graphics_cards",
    },
  ];

  //aos
  // useEffect(() => {
  //   AOS.init({
  //     duration: 1000,
  //   });
  // }, []);
  return (
    <div
      //  data-aos="zoom-in"
      className="mt-16"
    >
      <Heading>Categories</Heading>
      <div className="flex justify-center flex-wrap gap-6">
        {categories.map((category, i) => (
          <Category key={i} category={category} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
