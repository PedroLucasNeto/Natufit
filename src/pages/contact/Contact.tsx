import React from "react";
import { TbBrandWhatsapp } from "react-icons/tb";
import "./Contact.scss";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-info">
        <h2 className="titulo">Faça já seu pedido!</h2>
        <div className="contact-wrapper">
          <div className="contact-company">
            <h3>Comprar com CNPJ</h3>
            <p>Entre em contato com nossos revendedores através do número </p>
            <p>+55 11 96421-0040</p>
            <p>ou</p>
            <button className="contact-whatsapp">
              <TbBrandWhatsapp /> Clique Aqui
            </button>
          </div>
          <div className="contact-person">
            <h3>Comprar como Pessoa Física</h3>
          </div>
        </div>
      </div>
      <div className="contact-mock">
        Whatsapp Image
        <img src="" alt="" />
      </div>
    </div>
  );
};

export default Contact;
