import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Item from "./Item";
import {
  collection,
  getDocs,
  query,
  where,
  getFirestore,
} from "firebase/firestore";
import { app } from "../firebaseConfig";

const ItemListContainer = () => {
  const [response, setResponse] = useState([]);
  const params = useParams();

  useEffect(() => {
    const db = getFirestore(app);
    const productsCollection = collection(db, "products");

    let miConsulta;

    if (params.id === undefined) {
      miConsulta = getDocs(productsCollection);
    } else {
      const miFiltro = query(
        productsCollection,
        where("category", "==", params.id)
      );
      miConsulta = getDocs(miFiltro);
    }

    miConsulta
      .then((respuesta) => {
        setResponse(
          respuesta.docs.map((doc) => {
            const productoData = doc.data();
            productoData.id = doc.id;
            return productoData;
          })
        );
      })
      .catch((error) => {
        console.error("Error al obtener productos:", error);
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
