import { useState } from "react";
import { NavLink } from "react-router-dom";
import MobileNav from "../mobile-nav/MobileNav";
import ToggleButton from "../toggle-button/ToggleButton";
import "./Header.scss";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="header-container" >
        <NavLink to="/" end>
          <img src="/assets/logo.png" alt="" />
        </NavLink>
        <MobileNav isOpened={isOpen} openCloseNav={setIsOpen} />
        <ToggleButton isActive={isOpen} onToggle={setIsOpen} />
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
      </div>
    </>
  );
};

export default Header;
