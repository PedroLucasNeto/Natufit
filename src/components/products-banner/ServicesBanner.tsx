import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectCreative } from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "./ServicesBanner.scss";
import { Link } from "react-router-dom";
import { companyValues } from "../../utils/companyValues";

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
        {companyValues.map((value, index) => {
          return (
            <SwiperSlide className="banner" key={index}>
              <img src={`${value.image}`} alt="" />
              <div className="text-div">
                <h2>{value.title}</h2>
                <p>{value.description}</p>
                <Link to="/products">{value.button}</Link>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default ServicesBanner;
