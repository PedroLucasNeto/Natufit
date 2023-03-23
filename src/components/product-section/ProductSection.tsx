import React, { useState } from "react";
import ProductCard from "../product-card/ProductCard";
import "./ProductSection.scss";
import { products } from "../../utils/products";
import { TbSearch } from "react-icons/tb";
import { motion } from "framer-motion";

const ProductSection = () => {
  const [productsPerPage, setProductsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(0);

  const [searchInput, setSearch] = useState("");
  const lowerSearch = searchInput.toLowerCase();
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(lowerSearch)
  );

  const pages = Math.ceil(products.length / productsPerPage);
  const startIndex = currentPage * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

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
      <h1>Temperos e Chás</h1>
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
      <motion.div className="products-wrapper" variants={container}
        initial="hidden"
        animate="visible">
        {currentProducts.map((product, index) => {
          const name = product.name;
          const description = product.description;
          const price = product.price;
          const picture = product.picture;
          const object = { name, description, price, picture };
          return <motion.div variants={item} key={index}><ProductCard product={object} /></motion.div>;
        })}
      </motion.div>
      <div className="pagination-container">
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
      </div>
    </section>
  );
};

export default ProductSection;
