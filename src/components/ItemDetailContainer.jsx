import React, { useEffect, useState } from "react";
import Detail from "./Detail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);
  const params = useParams();
  const url = "https://dummyjson.com/products";

  useEffect(() => {
    fetch(`${url}/${params.id}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setProduct(res);
      });
  }, [params.id]);

  return (
    <div>
      {product ? (
        <Detail key={product.id} product={product} />
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};
export default ItemDetailContainer;
