import React from "react";
import { useEffect, useContext } from "react";
import { CartContext } from "./CartContext";
import toast from "react-hot-toast";

const Detail = (props) => {
  const addCart = useContext(CartContext);
  const clickAgregar = async () => {
    addCart.agregarProd(props.product);
    //toast("se agrego correctamente");
    toast.success("se agrego correctamente!", {
      id: "clipboard",
    });
  };

  const clickDelete = async () => {
    addCart.handleDelete(props.product);
    toast.error("se elimino el producto!", {
      id: "clipboard",
    });
  };

  return (
    <div>
      <h2>
        {props.product.title} - ${props.product.price}
      </h2>
      <img src={props.product.thumbnail} alt="" />
      <p>{props.product.description}</p>
      <p>
        <button onClick={clickAgregar}>Agregar</button> -{" "}
        <button onClick={clickDelete}>Eliminar</button>
      </p>
    </div>
  );
};

export default Detail;
