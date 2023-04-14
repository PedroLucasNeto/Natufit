import { Link } from "react-router-dom";
import "./AdvertisingProducts.scss";

const AdvertisingProducts = () => {
  return (
    <>
      <section className="ad-section">
        <div className="ad-titles">
          <h1>Conheça nossos Produtos</h1>
          <p>
            Não perca mais tempo sem experimentar nossos temperos. Peça agora e transforme
            suas receitas em obras de arte culinárias.
          </p>
        </div>
        <Link
          to="/products/"
          role="button"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }>
          Saiba Mais!
        </Link>
      </section>
    </>
  );
};

export default AdvertisingProducts;
