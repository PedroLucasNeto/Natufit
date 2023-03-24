import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectCreative } from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "./ProductsBanner.scss";
import { Link } from "react-router-dom";

const ProductsBanner = () => {
  return (
    <section className="products-banner">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        speed={1200}
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
            <div className="text-div">
              <h2>Variedade</h2>
              <p>
                Transforme sua cozinha em uma verdadeira aventura gastronômica
                com nossa variedade de temperos!
              </p>
              <Link to="/products">Conheça nossos produtos!</Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner">
            <div className="text-div">
              <h2>Produtos Naturais</h2>
              <p>
                Descubra o poder da natureza em cada produto! Experimente nossos
                produtos e sinta a diferença no seu paladar.
              </p>
              <Link to="/products">Compre agora!</Link>
            </div>
            <img src="/assets/banners/ingredientes.jpg" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner">
            <img src="/assets/banners/vegetables.jpg" alt="" />
            <div className="text-div">
              <h2 className="text-dark">Atacado </h2>
              <p color="text-dark">
                Economize comprando no atacado! Tenha acesso a preços mais
                baixos e abasteça seu estoque com nossos produtos.
              </p>
              <Link to="/contact">Entre em Contato!</Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default ProductsBanner;
