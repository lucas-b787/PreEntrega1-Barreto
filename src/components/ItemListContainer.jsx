import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Item from "./Item";

const ItemListContainer = () => {
  const [response, setResponse] = useState([]);
  const params = useParams();
  const category = "categories";
  const url = "https://dummyjson.com/products";
  console.log(`${url}/${category}`);

  useEffect(() => {
    fetch(params.id === undefined ? url : `${params.id}.json`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res.products);
        setResponse(res.products);
      });
  }, [params.id]);

  return (
    <div className="ItemList-grid">
      {response.map((products) => {
        return <Item key={products.id} products={products} />;
      })}
    </div>
  );
};
export default ItemListContainer;
