import React from "react";
import Footer from "../../Shared/Footer";
import Analysis from "./Analysis";
import Banner from "./Banner";
import Newsletter from "./Newsletter";
import OurClients from "./OurClients";
import Parts from "./Parts";
import Reviews from "./Reviews";

const Home = () => {
  return (
    <div className="bg-base-200 mt-16">
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
