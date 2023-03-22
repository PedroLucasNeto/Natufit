import "./InfoContainer.scss";
import { TbStar, TbShoppingCartPlus, TbShieldCheck } from "react-icons/tb";

const InfoContainer = () => {
  return (
    <section className="card-section">
      <h2>Conheça nossa marca :</h2>
      <div className="card-container">
        <div className="card">
          <h2>Variedade</h2>
          <TbShoppingCartPlus />
          <p>
            Ampla variedade de produtos de alta qualidade, cuidadosamente
            selecionados e processados para garantir que cada tempero tenha um
            sabor e aroma autênticos.
          </p>
          <button>Conheça!</button>
        </div>
        <div className="card">
          <h2>Cuidado</h2>
          <TbShieldCheck />
          <p>
            Utilizamos apenas ingredientes naturais, sem adição de conservantes
            ou corantes artificiais, o que contribui para torná-los ainda mais
            saudáveis e saborosos.
          </p>
          <button>Conheça!</button>
        </div>
        <div className="card">
          <h2>Qualidade</h2>
          <TbStar />
          <p>
            Nossos clientes podem escolher entre temperos tradicionais, como
            sal, pimenta e alho, ou combinações mais exóticas de especiarias
            para dar um toque especial em qualquer prato.
          </p>
          <button>Conheça!</button>
        </div>
      </div>
    </section>
  );
};

export default InfoContainer;
