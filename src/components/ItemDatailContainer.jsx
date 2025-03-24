import React, { useEffect, useState } from "react";
import Detail from "./Detail";
import { useParams } from "react-router-dom";

const ItemDatailContainer = () => {
  const [respuesta, setRespuesta] = useState([]);
  const params = useParams();
  const url = "https://dummyjson.com";

  useEffect(() => {
    fetch(`${url}/products/${params.id}`)
      .then((res) => res.json())
      .then(console.log)
      .then((res) => {
        setRespuesta(res.product);
      });
  }, [params.id]);

  return (
    <div>
      {respuesta.map((product) => {
        return <Detail key={product.id} product={product} />;
      })}
    </div>
  );
};

export default ItemDatailContainer;
