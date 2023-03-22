import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <>
      <div className="header_container">
        <NavLink to="/" end>
          <img src="public/assets/logo.png" alt="" />
        </NavLink>
        <ul className="header_nav">
          <li>
            <NavLink to="/" end>
              Início
            </NavLink>
          </li>
          <li>
            <NavLink to="/products">Produtos</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contato</NavLink>
          </li>
          <li></li>
        </ul>
      </div>
    </>
  );
};

export default Header;
