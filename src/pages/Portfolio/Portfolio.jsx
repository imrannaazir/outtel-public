import React from "react";
import CareerObj from "./CareerObj";
import MyDetails from "./MyDetails";
import PortfolioBanner from "./PortfolioBanner";
import Skills from "./Skills";

const Portfolio = () => {
  return (
    <div>
      <PortfolioBanner />
      <MyDetails />
      <CareerObj />
      <Skills />
    </div>
  );
};

export default Portfolio;
