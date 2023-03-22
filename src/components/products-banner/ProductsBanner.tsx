import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectCreative } from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "./ProductsBanner.scss";

const ProductsBanner = () => {
  return (
    <section className="products-banner">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        navigation={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation]}
      >
        <SwiperSlide>
          <div className="banner">
            <img src="/assets/banners/seasoning.jpg" alt="" />
            <h2>Muitas Opções</h2>
            <p>
              Transforme sua cozinha em uma verdadeira aventura gastronômica com
              nossa variedade de temperos!
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner">
            <img src="/assets/banners/ingredientes.jpg" alt="" />
            <h2>Produtos Naturais</h2>
            <p>
              Descubra o poder da natureza em cada produto! Experimente nossos
              produtos naturais e sinta a diferença no seu paladar.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner">
            <img src="/assets/banners/market.jpg" alt="" />
            <h2>Atacado </h2>
            <p>
              Economize comprando no atacado! Tenha acesso a preços mais baixos
              e abasteça seu estoque com nossos produtos.
            </p>
          </div>
        </SwiperSlide>
        ...
      </Swiper>
    </section>
  );
};

export default ProductsBanner;
