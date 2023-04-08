import {
  TbArrowBigUpLine,
  TbBrandInstagram,
  TbBrandWhatsapp,
  TbShoppingCart,
} from "react-icons/tb";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="bottom-left">
        <button
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }>
          <TbArrowBigUpLine />
        </button>
      </div>
      <div className="bottom-center">
        <p>Este site é um projeto </p>{" "}
        <a href="https://codingforfree.tech/" target="_blank">
          Coding For Free
        </a>
      </div>
      <ul className="bottom-right">
        <li>
          <a href="https://www.instagram.com/natufitespeciarias/" target="_blank">
            <TbBrandInstagram />
          </a>
        </li>
        <li>
          <a
            href="https://wa.me/83991531661?text=Olá!%20Tenho%20interesse%20nos%20produtos%20natufit!%20"
            target="_blank">
            <TbBrandWhatsapp />
          </a>
        </li>
        <li>
          <a href="https://natufitespeciarias.com/products">
            <TbShoppingCart />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
