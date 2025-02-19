import React from "react";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <div>
      <header>
        <nav className="navbar">
          <ul>
            <h1 className="">CERVELANDIA</h1>
            <li>
              <a href="">NUESTRAS CERVEZAS</a>
            </li>
            <li>
              <a href="">CONTACTO</a>
            </li>
            <li>
              <a href="">PARA EVENTOS</a>
            </li>
            <CartWidget />
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
