import { Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
    <h1>Olá, Vitor qual será a aula de hoje?</h1>

  <Link to="/contato">Contato</Link>
  <Link to="/evento">Evento</Link>
  <Link to="/usuario">Usuario</Link>
  <Link to="/contador">Contador</Link>
  <Link to="/variestado">Variavel de estado</Link>





    </div>
  );
}

export default App;
