import React from "react";
import Analysis from "./Analysis";
import Banner from "./Banner";
import Newsletter from "./Newsletter";
import OurClients from "./OurClients";
import Parts from "./Parts";
import Reviews from "./Reviews";
import Navbar from "../../Shared/Navbar";
import OfferBanner from "./OfferBanner";
import Categories from "./Categories";
import GraphicsCards from "./GraphicsCards";
import Processors from "./Processors";

const Home = () => {
  return (
    <div id="home" className="">
      <Navbar />
      <Banner />
      <Categories />
      <Parts />
      <OfferBanner />
      <Processors />
      <GraphicsCards />
      <Reviews />
      <Analysis />
      <OurClients />
      <Newsletter />
    </div>
  );
};

export default Home;
