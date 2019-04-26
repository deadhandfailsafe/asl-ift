import React from 'react';
import './App.css';

import CardIFT from './components/CardIFT.js';
// import CardCC from '../components/CardCC';

function App() {
  return (
    <div className="container">
      <CardIFT className="card-ift" />
      {/* <CardCC className="card-cc" /> */}
    </div>
  );
}

export default App;
