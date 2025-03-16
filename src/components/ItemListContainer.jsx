import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Item from "./Item";

const ItemListContainer = () => {
  const [response, setResponse] = useState([]);
  const params = useParams();
  const url = "https://dummyjson.com/products";

  useEffect(() => {
    fetch(params.category === undefined ? url : `/${url.category}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res.products);
        setResponse(res.products);
      });
  }, [params.category]);

  return (
    <div className="ItemList-grid">
      {response.map((products) => {
        return <Item key={products.id} products={products} />;
      })}
    </div>
  );
};
export default ItemListContainer;
