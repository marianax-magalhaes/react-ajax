import React from 'react';
import './App.css';

import Usuarios from './components/Usuarios'


function App() {

  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/usuarios">Usuários Cadastrados</a></li>
            <li><a href="/adicionar">Adicionar Usuário</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <Usuarios />
      </main>
    </div>
  );

}

export default App;

 