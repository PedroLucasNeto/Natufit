import { useState } from "react";
import { Product } from "../../types/Product";
import "./ProductCard.scss";
import { TbCurrencyReal } from "react-icons/tb";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { name, price, description, picture } = product;
  const [showMore, setShowMore] = useState(false);
  const [moreInfo, setMoreInfo] = useState(false);

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={`${picture}`} alt={`picture ${name}`} />
      </div>
      <div className="details-div">
        <div className="product-info">
          <h2>{name}</h2>
          <div className="price-div">
            <TbCurrencyReal />
            <p>{`${price.toString()}0`}</p>
          </div>
        </div>
        <button
          className="open-close"
          onClick={() => {
            setMoreInfo(!moreInfo);
          }}>
          {moreInfo ? "Menos Detalhes..." : "Mais Detalhes..."}
        </button>
        {moreInfo ? (
          <>
            <div className="product-description">
              <p>
                {showMore
                  ? description.substring(0, description.length)
                  : description.substring(0, 115) + "..."}
              </p>
              <button
                className="open-close"
                onClick={() => {
                  setShowMore(!showMore);
                }}>
                {showMore ? "Ler menos..." : "Ler mais..."}
              </button>
            </div>
          </>
        ) : (
          " "
        )}
      </div>

      <a
        href="https://wa.me/83991531661?text=Olá!%20Tenho%20interesse%20nos%20produtos%20natufit!%20"
        target="_blank">
        Compre Agora
      </a>
    </div>
  );
};

export default ProductCard;
