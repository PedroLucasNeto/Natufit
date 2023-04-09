import React from "react";
import { TbBrandWhatsapp } from "react-icons/tb";
import "./Contact.scss";

const Contact = () => {
  return (
    <section className="contact-container">
      <div className="contact-info">
        <h2>Faça seu pedido agora mesmo!</h2>
        <div className="contact-wrapper">
          <div className="contact-detail">
            <h3>Para sua cozinha</h3>
            <button>
              <TbBrandWhatsapp />
              Pessoa Física
            </button>
          </div>
          <div className="contact-detail">
            <h3>Para suas prateleiras</h3>
            <p>Entre em contato com nossos representantes através do número </p>
            <p>+55 11 96421-0040</p>
            <p>ou</p>
            {/* <p>clique no botão abaixo para abrir o whatsapp web</p> */}
            <button className="contact-whatsapp">
              <TbBrandWhatsapp />
              Pessoa Jurídica
            </button>
          </div>
        </div>
      </div>
      <div className="contact-mock">
        Whatsapp MOCKUP
        <img src="" alt="" />
      </div>
    </section>
  );
};

export default Contact;
