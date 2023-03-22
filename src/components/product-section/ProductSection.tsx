import React from "react";
import ProductCard from "../product-card/ProductCard";
import "./ProductSection";
import { products } from "../../utils/products";

const ProductSection = () => {
  return (
    <section className="products-section">
      <div className="products-wrapper">
        {products.map((product, index) => {
          const name = product.name;
          const description = product.description;
          const price = product.price;
          const picture = product.picture;
          const object = { name, description, price, picture };
          return <ProductCard key={index} product={object} />;
        })}
      </div>
    </section>
  );
};

export default ProductSection;
