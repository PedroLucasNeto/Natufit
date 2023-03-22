import { Product } from "../../types/Product";
import "./ProductCard.scss";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { name, price, description, picture } = product;

  return (
    <div className="product-card">
      <h2>{name}</h2>
      <div className="price-div">
        <h3>Preço:</h3>
        <p>{`${price.toString()}0`} R$</p>
      </div>
      <div className="details-div">
        <h3>Detalhes:</h3>
        <p>{description}</p>
      </div>
      <img src={`${picture}`} alt={`picture ${name}`} />
    </div>
  );
};

export default ProductCard;
