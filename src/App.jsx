import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer saludo="Bienvenido a Cervelandia" />
    </>
  );
}

export default App;
