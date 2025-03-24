import { Route, Routes } from "react-router-dom";
import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import Carrito from "./components/Carrito";
import ItemDatailContainer from "./components/ItemDatailContainer";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />}></Route>
        <Route path="/category/:id" element={<ItemListContainer />}></Route>
        <Route path="/products/:id" element={<ItemDatailContainer />}></Route>
        <Route path="/carrito" element={<Carrito />}></Route>
      </Routes>
    </>
  );
}

export default App;
