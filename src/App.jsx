import "./App.css";

import CounterContainer from "./Components/Counter/CounterContainer"
import ItemList from "./Components/ItemList/ItemList";
import { Navbar } from "./Components/Navbar/Navbar";

function App() {
  let saludo = "Hola XXXX puedes comenzar tu compra"
  

  return (
    <div className="App">
      <Navbar color= "red" />
      <ItemList saludo ={saludo} />
      <CounterContainer />  
      
    </div>
  );
}

export default App;
