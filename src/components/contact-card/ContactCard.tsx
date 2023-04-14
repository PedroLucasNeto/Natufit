import { TbBrandWhatsapp } from "react-icons/tb";
import "./ContactCard.scss";

const ContactCard = () => {
  return (
    <div className="contact-card">
      <h3>Para suas prateleiras</h3>
      <p>Entre em contato com nossos representantes através do número </p>
      <p>+55 11 96421-0040</p>
      <p>ou</p>
      {/* <p>clique no botão abaixo para abrir o whatsapp web</p> */}
      <button>
        <TbBrandWhatsapp />
        Pessoa Jurídica
      </button>
    </div>
  );
};

export default ContactCard;
