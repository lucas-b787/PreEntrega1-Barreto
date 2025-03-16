import React from "react";
import { Link } from "react-router-dom";

const Item = (props) => {
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
        <Link to={`/producto/${props.products.id}`}>ver detalles</Link>
      </article>
    </div>
  );
};

export default Item;
