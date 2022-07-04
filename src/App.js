import NavBar from "./Components/NavBar";
import ItemListContainer from "./Components/ItemListContainer"
import Micomponente from "./Micomponente";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer.js"

function App() {

  const unMensaje = "hola";

  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Welcome to Eishop"/>
      <ItemDetailContainer />
      <Micomponente miProp={unMensaje}/>
    </>
  );
}

export default App;