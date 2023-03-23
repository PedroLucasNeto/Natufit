import React, { useState } from "react";
import ProductCard from "../product-card/ProductCard";
import "./ProductSection.scss";
import { products } from "../../utils/products";

const ProductSection = () => {
  const [productsPerPage, setProductsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(0);

  const pages = Math.ceil(products.length / productsPerPage);
  const startIndex = currentPage * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = products.slice(startIndex, endIndex);

  return (
    <section className="products-section">
      <h1>Temperos e Chás</h1>
      <div className="search-box">
        <input type="text" placeholder="Ex: Pimenta do reino" />
      </div>
      <div className="products-wrapper">
        {currentProducts.map((product, index) => {
          const name = product.name;
          const description = product.description;
          const price = product.price;
          const picture = product.picture;
          const object = { name, description, price, picture };
          return <ProductCard key={index} product={object} />;
        })}
      </div>
      <div className="pagination-container">
        {Array.from(Array(pages), (item, index) => {
          return (
            <button
              className="pagination"
              key={index}
              onClick={() => setCurrentPage(index)}
            >
              {index + 1}
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default ProductSection;
