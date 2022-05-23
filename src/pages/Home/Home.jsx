import React from "react";
import Footer from "../../Shared/Footer";
import Analysis from "./Analysis";
import Banner from "./Banner";
import OurClients from "./OurClients";
import Parts from "./Parts";
import Reviews from "./Reviews";

const Home = () => {
  return (
    <div className="bg-base-200">
      <Banner />
      <Parts />
      <Reviews />
      <Analysis />
      <OurClients />
      <Footer />
    </div>
  );
};

export default Home;
