import { Link } from 'react-router-dom';
import './App.css';
import Componentes from '../Componentes';

function App() {
  return (
    <div className="App">
     
      <Componentes 
      
      
      titulo="Aula de React"
      
      />
   

  <Link to="/contato">Contato</Link>
  <Link to="/evento">Evento</Link>
  <Link to="/usuario">Usuario</Link>
  <Link to="/contador">Contador</Link>
  <Link to="/variestado">Variavel de estado</Link>
  <Link to="/calculo">Calculadora</Link>
  



    </div>
  );
}

export default App;
