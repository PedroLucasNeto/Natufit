import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectCreative } from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "./ServicesBanner.scss";
import { Link } from "react-router-dom";
import { homeBanners } from "../../utils/homeBanners";

const ServicesBanner = () => {
  return (
    <section className="services-banner">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        speed={1200}
        navigation={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation]}>
        {homeBanners.map((banner, index) => {
          return (
            <SwiperSlide className="banner" key={index}>
              <img src={`${banner.image}`} alt="" />
              <div className="text-div">
                <h2>{banner.title}</h2>
                <p>{banner.description}</p>
                <Link to="/products">{banner.button}</Link>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default ServicesBanner;
