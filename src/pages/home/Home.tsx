import React from "react";
import ServicesBanner from "../../components/services-banner/ServicesBanner";
import "./Home.scss";
import VideosSection from "../../components/videos-section/VideosSection";
import CompanyValues from "../../components/company-values/CompanyValues";

const Home = () => {
  return (
    <div className="home">
      <ServicesBanner />
      <CompanyValues />
      <VideosSection />
    </div>
  );
};

export default Home;
