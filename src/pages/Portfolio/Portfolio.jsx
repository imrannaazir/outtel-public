import React from "react";
import Footer from "../../Shared/Footer";
import CareerObj from "./CareerObj";
import MyDetails from "./MyDetails";
import PortfolioBanner from "./PortfolioBanner";
import Projects from "./Projects";
import Skills from "./Skills";

const Portfolio = () => {
  return (
    <div>
      <PortfolioBanner />
      <MyDetails />
      <CareerObj />
      <Skills />
      <Projects />
    </div>
  );
};

export default Portfolio;
