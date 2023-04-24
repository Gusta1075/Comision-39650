import "./App.css";
import FetchingData from "./Components/FechingData/FechingData";
import ItemListContainer from "./Components/ItemList/ItemListContainer";



import { Navbar } from "./Components/Navbar/Navbar";

function App() {
 

  return (
    <div className="App">
      <Navbar />
      <ItemListContainer />
      <FetchingData />
    </div>
  );
}

export default App;