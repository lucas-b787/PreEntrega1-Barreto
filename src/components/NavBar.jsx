import CartWidget from "./CartWidget";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <header>
        <nav className="navbar">
          <ul>
            <NavLink viewTransition to="/" className="link-Navbar">
              <h1 className="text-3xl font-bold underline">de tuto</h1>
            </NavLink>
            <li>
              <NavLink
                viewTransition
                to="/category/groceries"
                className="link-Navbar"
              >
                ALIMENTOS
              </NavLink>
            </li>
            <li>
              <NavLink
                viewTransition
                to="/category/fragrances"
                className="link-Navbar"
              >
                PERFUMERIA
              </NavLink>
            </li>
            <li>
              <NavLink
                viewTransition
                to="/category/furniture"
                className="link-Navbar"
              >
                HOGAR
              </NavLink>
            </li>
            <Link viewTransition to="/carrito" className="link-Navbar">
              <CartWidget />
            </Link>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
