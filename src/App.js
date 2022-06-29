import NavBar from "./Components/NavBar";
import ItemListContainer from "./Components/ItemListContainer"
import Micomponente from "./Micomponente";

function App() {

  const unMensaje = "hola";

  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Welcome to Eishop"/>
      <Micomponente miProp={unMensaje}/>
    </>
  );
}

export default App;