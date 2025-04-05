import React from "react";
import { useContext } from "react";
import { CartContext } from "./CartContext";

const Cart = () => {
  const valorContext = useContext(CartContext);
  console.log(valorContext);

  return (
    <div>
      <h2>Tu pedido</h2>
      <p>Cantidad productos: {valorContext.cantProd}</p>
      <ul>
        {valorContext.cart.map((item) => {
          return (
            <li key={item}>
              <p>
                {item.title} ${item.price}
              </p>
            </li>
          );
        })}
      </ul>
      <p>Total: ${valorContext.precioTotal}</p>
    </div>
  );
};

export default Cart;
