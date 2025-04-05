import { Route, Routes } from "react-router-dom";
import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import Carrito from "./components/Cart";
import ItemDetailContainer from "./components/ItemDetailContainer";
import CartProvider from "./components/CartContext";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <CartProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />}></Route>
        <Route path="/category/:id" element={<ItemListContainer />}></Route>
        <Route path="/products/:id" element={<ItemDetailContainer />}></Route>
        <Route path="/carrito" element={<Carrito />}></Route>
      </Routes>
      <Toaster />
    </CartProvider>
  );
}

export default App;
