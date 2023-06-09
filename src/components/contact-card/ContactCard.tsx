import { TbBrandWhatsapp } from "react-icons/tb";
import "./ContactCard.scss";
import { ContactType } from "../../types/ContactType";

interface ContactCardProps {
  contactType: ContactType;
}

const ContactCard = ({ contactType }: ContactCardProps) => {
  const { title, whatsappLink, buttonText, description, phone } = contactType;
  return (
    <div className="contact-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <span>{phone}</span>
      <p>ou</p>
      {/* <p>clique no botão abaixo para abrir o whatsapp web</p> */}
      <a href={`${whatsappLink}`} target="_blank">
        <TbBrandWhatsapp />
        {buttonText}
      </a>
    </div>
  );
};

export default ContactCard;
