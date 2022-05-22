import React from "react";
import Footer from "../../Shared/Footer";
import Analysis from "./Analysis";
import Banner from "./Banner";
import Parts from "./Parts";
import Reviews from "./Reviews";

const Home = () => {
  return (
    <div>
      <Banner />
      <Parts />
      <Reviews />
      <Analysis />
      <Footer />
    </div>
  );
};

export default Home;
