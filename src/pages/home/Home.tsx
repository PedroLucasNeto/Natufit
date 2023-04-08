import ServicesBanner from "../../components/services-banner/ServicesBanner";
import "./Home.scss";
import VideosSection from "../../components/videos-section/VideosSection";
import CompanyValues from "../../components/company-values/CompanyValues";
import AdvertisingProducts from "../../components/advertising-products/AdvertisingProducts";

const Home = () => {
  return (
    <div className="home">
      <ServicesBanner />
      <CompanyValues />
      <VideosSection />
      <AdvertisingProducts />
    </div>
  );
};

export default Home;
