import React from "react";
import Banner from "../../components/banner/Banner";
import ProductsBanner from "../../components/services-banner/ServicesBanner";
import "./Home.scss";
import VideosSection from "../../components/videos-section/VideosSection";

const Home = () => {
  return (
    <div className="home">
      {/* <Banner /> */}
      <ProductsBanner />
      <VideosSection />
    </div>
  );
};

export default Home;
