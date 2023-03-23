import ProductSection from "../../components/product-section/ProductSection";
import ProductsBanner from "../../components/products-banner/ProductsBanner";
import "./ProductsPage.scss";

const ProductsPage = () => {
  return (
    <div className="products-page">
      <ProductsBanner />
      <ProductSection />
    </div>
  );
};

export default ProductsPage;
