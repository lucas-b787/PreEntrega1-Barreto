import React from "react";

const Detail = (props) => {
  return (
    <div>
      <h2>{props.product.tittle}</h2>
      <img src={props.product.thumbail} alt="" />
      <p>${props.product.price}</p>
    </div>
  );
};

export default Detail;
