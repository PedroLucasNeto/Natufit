import { useState } from "react";
import ProductCard from "../product-card/ProductCard";
import "./ProductSection.scss";
import { products } from "../../utils/products";
import { TbSearch, TbZoomExclamation } from "react-icons/tb";
import { motion } from "framer-motion";
import Pagination from "../shared/pagination/Pagination";
import { Product } from "../../types/Product";

const ProductSection = () => {
  const [searchInput, setSearch] = useState("");
  const lowerSearch = searchInput.toLowerCase();

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(lowerSearch)
  );

  const [productsPerPage, setProductsPerPage] = useState(9);
  const [currentPage, setCurrentPage] = useState(0);

  const pages = Math.ceil(filteredProducts.length / productsPerPage);
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
      <div className="banner-container">
        <h1>Digite sua busca</h1>
        <div className="search-box">
          <input
            type="text"
            value={searchInput}
            placeholder="Ex: Pimenta do reino"
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(0);
            }}
          />
          <button className="search-button">
            <TbSearch />
          </button>
        </div>
      </div>
      <motion.div
        className="products-wrapper"
        variants={container}
        initial="hidden"
        animate="visible">
        {currentProducts.length === 0 ? (
          <div className="no-products">
            <TbZoomExclamation />
            <h2>
              Desculpe não foi possível encontrar temperos com esse nome no nosso banco de
              dados.
              <br /> Por favor confira a busca e tente novamente!
            </h2>
          </div>
        ) : (
          currentProducts.map((product, index) => {
            const name = product.name;
            const description = product.description;
            const price = product.price;
            const picture = product.picture;
            const object = { name, description, price, picture };
            return (
              <motion.div key={index} variants={item}>
                <ProductCard key={index} product={object} />
              </motion.div>
            );
          })
        )}
      </motion.div>
      <Pagination
        pages={pages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </section>
  );
};

export default ProductSection;
