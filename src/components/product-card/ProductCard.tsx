import { useState } from "react";
import { Product } from "../../types/Product";
import "./ProductCard.scss";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { name, price, description, picture } = product;
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="product-card">
      <img src={`${picture}`} alt={`picture ${name}`} />
      <h2>{name}</h2>
      <div className="details-div">
        <h3>Detalhes:</h3>
        <div className="product-description">
          <p>{showMore ? description.substring(0, description.length) : description.substring(0, 115) + '...'}</p>
          <button onClick={() => {
            setShowMore(!showMore)
          }}>{showMore ? 'Ler menos...' : 'Ler mais...'}</button>
        </div>
      </div>
      <div className="price-div">
        <h3>Preço:</h3>
        <p>{`${price.toString()}0`} R$</p>
      </div>
    </div>
  );
};

export default ProductCard;
