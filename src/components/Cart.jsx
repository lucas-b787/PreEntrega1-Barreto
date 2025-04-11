import { useContext } from "react";
import { CartContext } from "./CartContext";
import toast from "react-hot-toast";
import FormBuy from "./FormBuy";

const Cart = () => {
  const valorContext = useContext(CartContext);

  const uniqueItems = valorContext.cart.reduce((acc, item) => {
    const existing = acc.find((i) => i.id === item.id);
    if (existing) {
      existing.cantidad += 1;
    } else {
      acc.push({ ...item, cantidad: 1 });
    }
    return acc;
  }, []);

  const clickAgregar = (product) => {
    valorContext.agregarProd(product);
    toast.success("se agrego correctamente!", {
      id: "clipboard",
    });
  };
  const clickDelete = (product) => {
    valorContext.handleDelete(product);
    toast.error("se elimino el producto!", {
      id: "clipboard",
    });
  };

  return (
    <div>
      <h2>Tu pedido</h2>
      <p>Cantidad productos: {valorContext.cantProd}</p>
      <ul>
        {uniqueItems.map((item, indice) => {
          return (
            <li key={indice}>
              <p>
                {item.title} x{item.cantidad} - ${item.price.toFixed(2)} c/u = $
                {(item.price * item.cantidad).toFixed(2)}{" "}
                <button onClick={() => clickAgregar(item)}>Agregar</button> -{" "}
                <button onClick={() => clickDelete(item)}>Eliminar</button>
              </p>
            </li>
          );
        })}
      </ul>
      <p>Total: ${valorContext.precioTotal.toFixed(2)}</p>

      <FormBuy />
    </div>
  );
};

export default Cart;
