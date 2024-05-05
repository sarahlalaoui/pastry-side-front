import "./Nav.css";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="container">
          
    <header>
      <Nav>
    <h2>patisserie le mistral</h2>
      <ul className="list">
        <li className="navl">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="navl">
          <NavLink to="/About">About us</NavLink>
        </li>
        <li className="navl">
          <NavLink to="/Our prodduct">our product</NavLink>
        </li>
        <li className="navl">
          <NavLink to="/Contact">Contact</NavLink>
        </li>
      </ul>
      </Nav>
    </header>
  </div>
);
};

export default Nav;
