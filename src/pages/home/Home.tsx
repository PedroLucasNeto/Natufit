import React from "react";
import Banner from "../../components/banner/Banner";
import InfoContainer from "../../components/info-container/InfoContainer";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <Banner />
      <InfoContainer />
    </div>
  );
};

export default Home;
