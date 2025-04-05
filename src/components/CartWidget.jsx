import React from "react";
import { useContext } from "react";
import { CartContext } from "./CartContext";

const CartWidget = () => {
  const valorContext = useContext(CartContext);
  return (
    <div>
      <button className="botonCarrito">
        <img src="/img/shopping-cart.svg" alt="carrito" className="Carrito" />
        {valorContext.cantProd}
      </button>
    </div>
  );
};

export default CartWidget;
