import React, { Component } from 'react';
import './App.css';
import CardIFT from '../components/CardIFT.js';
// import CardCC from '../components/CardCC';

class App extends Component {
  constructor() {
    super();
    this.state = {
      diceTotal: 0,
    }
  }

  GenerateDie = () => {
      return Math.floor(Math.random() * 6 + 1);
  }

  GenerateDice = () => {
      let die1 = this.GenerateDie();
      let die2 = this.GenerateDie();
      return [die1, die2, die1+die2];
  }

  GetTotal = () => {
      console.log('hi');
      let diceRolls = this.GenerateDice();
      this.diceTotal = diceRolls[2];
  }

  render() {
    return (
      <CardIFT className='card-ift' />
    );
  }
}

export default App;
