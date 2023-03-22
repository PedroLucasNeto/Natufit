import React from "react";
import { Product } from "../../types/Product";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { name, price, description, picture } = product;

  return (
    <div>
      <h1>{name}</h1>
      <p>{price.toString()}</p>
      <p>{description}</p>
      <img src={`${picture}`} alt={`picture ${name}`} />
    </div>
  );
};

export default ProductCard;
