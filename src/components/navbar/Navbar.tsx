import "./Navbar.scss";
import { NavLink } from "react-router-dom";

interface NavbarProps {
  isOpen: boolean;
  handleClick: (isOpen: boolean) => void;
}
const Navbar = ({ isOpen, handleClick }: NavbarProps) => {
  return (
    <ul className={`navbar ${isOpen ? "opened" : ""}`}>
      <li>
        <NavLink to="/" onClick={() => handleClick(!isOpen)}>
          Início
        </NavLink>
      </li>
      <li>
        <NavLink to="/products" onClick={() => handleClick(!isOpen)}>
          Produtos
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact" onClick={() => handleClick(!isOpen)}>
          Contato
        </NavLink>
      </li>
    </ul>
  );
};

export default Navbar;
