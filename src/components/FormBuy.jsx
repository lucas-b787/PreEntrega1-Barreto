import { useState, useContext } from "react";
import InputCart from "./InputCart";
import { CartContext } from "./CartContext";
import toast from "react-hot-toast";

const FormBuy = () => {
  const valorContext = useContext(CartContext);

  const [ValueName, setValueName] = useState("");
  const [ValueEmail, setValueEmail] = useState("");
  const [ValueAddress, setValueAddress] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(
      `El usuario escribió: ${ValueName} ${ValueEmail} ${ValueAddress}`
    );
  };

  const handleInputValueName = (data) => {
    setValueName(data);
  };
  const handleInputValueEmail = (data) => {
    setValueEmail(data);
  };
  const handleInputValueAddress = (data) => {
    setValueAddress(data);
  };

  const handleBuy = () => {
    valorContext.handleEmpty();
    toast.success("Gracias por su compra!", {
      id: "clipboard",
    });
  };
  const emptyCart = () => {
    valorContext.handleEmpty();
    toast.error("se vacio el carrito!", {
      id: "clipboard",
    });
  };

  return (
    <div>
      <h2>Finalizar Compra</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nombre">Nombre</label>
          <InputCart onInputValue={handleInputValueName} />
        </div>
        <div>
          <label htmlFor="nombre">Email</label>
          <InputCart onInputValue={handleInputValueEmail} />
        </div>
        <div>
          <label htmlFor="nombre">Direccion</label>
          <InputCart onInputValue={handleInputValueAddress} />
        </div>
        <button type="submit" onClick={handleBuy}>
          comprar
        </button>{" "}
        - <button onClick={emptyCart}>eliminar carrito</button>
      </form>
    </div>
  );
};

export default FormBuy;
