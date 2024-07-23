import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HolaMundo } from './componentes/HolaMundo';
import { ComponenteClase } from './componentes/ComponenteClase';
import { CicloVida } from './componentes/CicloVida';

function App() {
  return (
    <>
        <HolaMundo nombre='Juanito' apellido='Perez' edad={50}></HolaMundo>
        <br />
        <ComponenteClase nombre='Panchito'></ComponenteClase>
        <br />
        <CicloVida name='Pepito'></CicloVida>      
    </>
  );
}

export default App;
