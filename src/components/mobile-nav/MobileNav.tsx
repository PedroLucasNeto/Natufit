import { NavLink } from "react-router-dom";
import "./MobileNav.scss";

interface MobileNavProps {
  isOpened: boolean;
  openCloseNav: (isOpened: boolean) => void;
}

const MobileNav = ({ isOpened, openCloseNav }: MobileNavProps) => {
  return (
    <>
      <div className={`mobile-nav ${isOpened ? "opened" : ""}`}>
        <ul className="nav-list">
          <li>
            <NavLink to="/" onClick={() => openCloseNav(!isOpened)} end>
              Início
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" onClick={() => openCloseNav(!isOpened)}>
              Produtos
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={() => openCloseNav(!isOpened)}>
              Contato
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MobileNav;
