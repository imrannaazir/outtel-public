import React from "react";
import Skills from "../../Shared/Skills";
import CareerObj from "./CareerObj";
import MyDetails from "./MyDetails";
import PortfolioBanner from "./PortfolioBanner";

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
