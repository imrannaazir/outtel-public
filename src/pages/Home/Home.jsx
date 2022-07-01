import React from "react";
import Footer from "../../Shared/Footer";
import Analysis from "./Analysis";
import Banner from "./Banner";
import Newsletter from "./Newsletter";
import OurClients from "./OurClients";
import Parts from "./Parts";
import Reviews from "./Reviews";
import Navbar from "../../Shared/Navbar";

const Home = () => {
  return (
    <div className="">
      <Navbar />
      <Banner />
      <Parts />
      <Reviews />
      <Analysis />
      <OurClients />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
