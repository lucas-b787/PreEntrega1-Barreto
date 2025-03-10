import React from "react";
import CartWidget from "./CartWidget";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <header>
        <nav className="navbar">
          <ul>
            <Link to="/" className="link-Navbar">
              <h1 className="text-3xl font-bold underline">CERVELANDIA</h1>
            </Link>
            <li>
              <Link to="/nuestras-cervezas" className="link-Navbar">
                NUESTRAS CERVEZAS
              </Link>
            </li>
            <li>
              <NavLink to="/contacto" className="link-Navbar">
                CONTACTO
              </NavLink>
            </li>
            <li>
              <NavLink to="/para-evento" className="link-Navbar">
                PARA EVENTOS
              </NavLink>
            </li>
            <Link to="/carrito" className="link-Navbar">
              <CartWidget />
            </Link>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
