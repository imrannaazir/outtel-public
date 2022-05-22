import React from "react";
import Footer from "../../Shared/Footer";
import Analysis from "./Analysis";
import Banner from "./Banner";
import Parts from "./Parts";

const Home = () => {
  return (
    <div>
      <Banner />
      <Parts />
      <Analysis />
      <Footer />
    </div>
  );
};

export default Home;
