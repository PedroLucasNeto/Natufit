import { TbBrandWhatsapp } from "react-icons/tb";
import "./ContactCard.scss";
import { ContactType } from "../../types/ContactType";

interface ContactCardProps {
  contactType: ContactType;
}

const ContactCard = ({ contactType }: ContactCardProps) => {
  const { title, bgImage, buttonText, description, phone } = contactType;
  return (
    <div className="contact-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <p>{phone}</p>
      <p>ou</p>
      {/* <p>clique no botão abaixo para abrir o whatsapp web</p> */}
      <button>
        <TbBrandWhatsapp />
        {buttonText}
      </button>
    </div>
  );
};

export default ContactCard;
