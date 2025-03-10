import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
  const [resultado, setResultado] = useState([]);
  const params = useParams();
  const url = "https://api.catalog.beer"; //https://catalog.beer/api-docs#beer-object
  const apiKey =
    "curl --location --request GET 'https://api.catalog.beer/brewer'";
  (" --header Accept: application/json");
  (" --header Authorization: Basic 7152aca7-5df0-4e1b-985f-ce204fb63775");

  const options = useEffect(() => {
    fetch(url, apiKey)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setResultado(res);
        console.log(res);
      })
      .catch();
    console.log("hubo un error");
  });

  return <div></div>;
};
export default ItemListContainer;
