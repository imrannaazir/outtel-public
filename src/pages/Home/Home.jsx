import React from "react";
import Footer from "../../Shared/Footer";
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
    <div className="">
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
      <Footer />
    </div>
  );
};

export default Home;
