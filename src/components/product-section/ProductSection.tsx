import { useState } from "react";
import ProductCard from "../product-card/ProductCard";
import "./ProductSection.scss";
import { products } from "../../utils/products";
import { TbSearch } from "react-icons/tb";
import { motion } from "framer-motion";
// import Banner from "../banner/Banner";

import { Swiper, SwiperSlide, } from 'swiper/react';
import { Navigation, Pagination, Grid } from 'swiper'

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/grid'


const ProductSection = () => {
  // const [productsPerPage, setProductsPerPage] = useState(5);
  // const [currentPage, setCurrentPage] = useState(0);
  // const pages = Math.ceil(products.length / productsPerPage);
  // const startIndex = currentPage * productsPerPage;
  // const endIndex = startIndex + productsPerPage;
  // const currentProducts = filteredProducts.slice(startIndex, endIndex);

  const [searchInput, setSearch] = useState("");
  const lowerSearch = searchInput.toLowerCase();
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(lowerSearch)
  );

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 1,
        staggerChildren: 0.4,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section className="products-section">
      <div className="banner-container">
        <h1>Digite sua busca</h1>
        <div className="search-box">
          <input
            type="text"
            value={searchInput}
            placeholder="Ex: Pimenta do reino"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <button className="search-button">
            <TbSearch />
          </button>
        </div>
      </div>

      <Swiper
        slidesPerView={1}
        breakpoints={{
          360: {
            width: 360,
            slidesPerView: 1,
            grid: {
              rows: 1,
              fill: "row",
            }
          },
          768: {
            width: 768,
            slidesPerView: 3,
            grid: {
              rows: 2,
              fill: "row",
            }
          },
          992: {
            width: 992,
            slidesPerView: 3,
            grid: {
              rows: 2,
              fill: "row",
            }
          },
          1200: {
            width: 1200,
            slidesPerView: 3,
            grid: {
              rows: 2,
              fill: "row",
            }
          },
        }}
        spaceBetween={1}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Grid, Pagination, Navigation]}
        className="products-wrapper"

      >
        {filteredProducts.map((product, index) => {
          const name = product.name;
          const description = product.description;
          const price = product.price;
          const picture = product.picture;
          const object = { name, description, price, picture };
          return (<SwiperSlide className="product-slide" key={index}>
            <ProductCard product={object} />
          </SwiperSlide>)
        })}
      </Swiper>


      {/* <div className="pagination-container">
        {Array.from(Array(pages), (item, index) => {
          return (
            <button
              className="pagination"
              key={index}
              onClick={() => setCurrentPage(index)}
            >
              <span className={currentPage === index ? "active" : ""}>
                {index + 1}
              </span>
            </button>
          );
        })}
      </div> */}
    </section >
  );
};

export default ProductSection;
