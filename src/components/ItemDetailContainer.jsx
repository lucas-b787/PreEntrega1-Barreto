import React, { useEffect, useState } from "react";
import Detail from "./Detail";
import { useParams } from "react-router-dom";
import { app } from "../firebaseConfig";
import { collection, doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);
  const params = useParams();

  useEffect(() => {
    const db = getFirestore(app);
    const productosCollection = collection(db, "products");
    const miFiltro = doc(productosCollection, params.id);
    const miConsulta = getDoc(miFiltro);

    miConsulta
      .then((respuesta) => {
        setProduct(respuesta.data());
      })
      .catch((error) => {
        console.error("Error al obtener productos:", error);
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
