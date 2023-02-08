import './App.css';

import Contact from './Component/Contact';
import Adresse from './Component/Adresse';

function App() {
  return (
    <div className="App">
      <Contact nom={"Clement"} prenom={"Lalaux"} telephone={"07 61 14 79 26"}>
        <Adresse rue={"Rue parmentier"} ville={"Lille"} codepostal={"59000"}/>
      </Contact>
    </div>
  );
}

export default App;
