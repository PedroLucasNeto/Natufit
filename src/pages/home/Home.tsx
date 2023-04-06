import React from "react";
import Banner from "../../components/banner/Banner";
import InfoContainer from "../../components/info-container/InfoContainer";
import ProductsBanner from "../../components/products-banner/ServicesBanner";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      {/* <Banner /> */}
      {/* <InfoContainer /> */}
      <ProductsBanner />
    </div>
  );
};

export default Home;
