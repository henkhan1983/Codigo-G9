// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import { useState } from "react"; // me permite poder manejar el valor de una constante
import "./App.css";
import imagenLogo from "./logo.svg";
//?components
import Header from "./components/header";

const App = () => {
  const [numero, setNumero] = useState(0);

  const sumarUnidad = () => setNumero(numero + 1);

  const restarUnidad = () => setNumero(numero - 1);
  
  return(
    <div>
      <Header nombre="Pepito" />
     <h1>Hola Mundo</h1>
     <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum beatae explicabo dolorem eius, quis iusto ipsum numquam reprehenderit enim nemo dolore fugit deserunt nam laboriosam alias ducimus pariatur aliquid aut..
      </p>
      <h1>{numero}</h1>
      <button onClick={sumarUnidad}>Sumar</button>
      <button onClick={restarUnidad}>Restar</button>
      <img src={imagenLogo} alt="" />
      <div>
        <h2>Henry De la cruz</h2>
      </div>
    </div>
  );
}

export default App;