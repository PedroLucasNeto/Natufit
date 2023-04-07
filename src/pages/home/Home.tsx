import React from "react";
import Banner from "../../components/banner/Banner";
import ProductsBanner from "../../components/services-banner/ServicesBanner";
import "./Home.scss";
import CardsSection from "../../components/cards-section/CardsSection";

const Home = () => {
  return (
    <div className="home">
      {/* <Banner /> */}
      <ProductsBanner />
      <CardsSection />
    </div>
  );
};

export default Home;
