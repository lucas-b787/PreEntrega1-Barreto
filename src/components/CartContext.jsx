import { createContext, useState } from "react";

export const CartContext = createContext();
export const Provider = CartContext;

const CartProvider = (props) => {
  const [cart, setCart] = useState([]);
  const [cantProd, setCantProd] = useState(0);
  const [precioTotal, setPrecioTotal] = useState(0);

  const agregarProd = (product) => {
    const copia = [...cart];
    copia.push(product);
    setCart(copia);
    setCantProd(cantProd + 1);
    setPrecioTotal(precioTotal + product.price);
  };

  const handleDelete = (product) => {
    const copia = [...cart];
    const index = copia.findIndex((item) => item.id === product.id);
    if (index !== -1) {
      copia.splice(index, 1);
      setCart(copia);
      setCantProd(cantProd - 1);
      setPrecioTotal(precioTotal - product.price);
    }
  };

  const handleEmpty = (product) => {
    setCart([]);
    setCantProd(0);
    setPrecioTotal(0);
  };

  const contextValue = {
    cart,
    cantProd,
    precioTotal,
    agregarProd,
    handleDelete,
    handleEmpty,
  };

  return <Provider value={contextValue}>{props.children}</Provider>;
};

export default CartProvider;
