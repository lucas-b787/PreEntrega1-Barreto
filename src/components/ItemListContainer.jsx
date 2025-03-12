import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
  const [responce, setResponce] = useState([]);
  const params = useParams();
  const url = "https://dummyjson.com/products";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setResponce(res);
      });
  }, []);

  return <div></div>;
};
export default ItemListContainer;
