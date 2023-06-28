import './App.css';
import { Navbar } from './components/Navbar/Navbar'
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
      </header>

      <ItemListContainer welcome="Bienvenido a nuestra tienda virtual ELECTROKEVIN"/>

    </div>
  );
}

export default App;
