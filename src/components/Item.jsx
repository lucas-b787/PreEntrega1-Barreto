import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import toast from "react-hot-toast";

const Item = (props) => {
  const addCart = useContext(CartContext);
  const clickAgregar = async () => {
    addCart.agregarProd(props.products);
    toast.success("se agrego correctamente!", {
      id: "clipboard",
    });
  };
  const clickDelete = async () => {
    addCart.handleDelete(props.products);
    toast.error("se elimino el producto!", {
      id: "clipboard",
    });
  };
  return (
    <div>
      <article className="product-carrito">
        <h3>{props.products.title}</h3>
        <img
          src={props.products.thumbnail}
          alt=""
          className="product-carrito_img"
        />
        <p>${props.products.price}</p>
        <p>
          <button onClick={clickAgregar}>Agregar</button> -{" "}
          <button onClick={clickDelete}>Eliminar</button>
        </p>
        <Link to={`/products/${props.products.id}`}>ver detalles</Link>
      </article>
    </div>
  );
};

export default Item;
