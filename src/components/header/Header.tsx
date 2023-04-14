import { useState } from "react";
import { NavLink } from "react-router-dom";
import ToggleButton from "../toggle-button/ToggleButton";
import "./Header.scss";
import Navbar from "../navbar/Navbar";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="header-container">
        <NavLink to="/" end>
          <img src="/assets/logo.png" alt="" />
        </NavLink>
        <ul className="header-nav">
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
        </ul>
        <ToggleButton isActive={isOpen} onToggle={setIsOpen} />
        <Navbar isOpen={isOpen} handleClick={setIsOpen} />
      </div>
    </>
  );
};

export default Header;
