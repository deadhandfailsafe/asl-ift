import React from 'react';
import './App.css';

import CardIFT from './components/CardIFT';
import CardCC from './components/CardCC';

function App() {
  return (
    <div className="container">
      <h1>Advanced Squad Leader Combat Table Assisstant</h1>
      <CardIFT className="card-ift" />
      <CardCC className="card-cc" />
    </div>
  );
}

export default App;
