import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Evento from './pages/evento/index.jsx';
import User from './pages/usuario/index.jsx';
import App from './pages/app/App.js';
import Contato from './pages/contato/index.jsx';
import NotFound from './pages/não encontrado/index.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<App />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/Evento" element={<Evento />} />
        <Route path="/usuario" element={<User />} />
        
       {/*esse sempre vai ser o ultimo, pois ele vai pegar qualquer rota que não exista */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
