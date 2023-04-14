import React from "react";
import { TbBrandWhatsapp } from "react-icons/tb";
import "./Contact.scss";
import ContactCard from "../../components/contact-card/ContactCard";
import { contactTypes } from "../../utils/contactTypes";

const Contact = () => {
  return (
    <section className="contact-container">
      <div className="contact-info">
        <h2>Faça seu pedido agora mesmo!</h2>
        <div className="contact-wrapper">
          {contactTypes.map((contact, index) => {
            return <ContactCard key={index} contactType={contact} />;
          })}
        </div>
      </div>
      {/* <div className="contact-mock">
        Whatsapp MOCKUP
        <img src="" alt="" />
      </div> */}
    </section>
  );
};

export default Contact;
