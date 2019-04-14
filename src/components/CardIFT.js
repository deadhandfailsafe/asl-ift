import React, { Component } from "react";
import Random from "random";

import BoxValue from "./BoxValue";
import CheckBoxValue from "./CheckBoxValue";
import RollDice from "./RollDice";

const initialState = {
  diceTotal: 0,
  dieRolls: [0, 0],
  firePower: 0,
  modifier: 0,
  rateOfFire: 0
};

class CardIFT extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  generateDie = () => {
    return Random.int(1, 6);
  };

  generateDice = () => {
    let die1 = this.generateDie();
    let die2 = this.generateDie();
    return [die1, die2, die1 + die2];
  };

  onRoll = () => {
    let diceRoll = this.generateDice();
    this.setState({ diceTotal: diceRoll[2] });
    this.setState({ dieRolls: [diceRoll[0], diceRoll[1]] });
  };

  onBoxChange = event => {
    this.setState({});
  };

  render() {
    return (
      <div>
        <h2>Infantry Fire Table</h2>
        <form>
          <BoxValue
            title="Firepower"
            value={this.state.firePower}
            onBoxChange={this.onBoxChange}
          />
          <BoxValue
            title="Modifier"
            value={this.state.modifier}
            onBoxChange={this.onBoxChange}
          />
          <BoxValue
            title="ROF"
            value={this.state.rateOfFire}
            onBoxChange={this.onBoxChange}
          />
          <CheckBoxValue
            title="No Cowering: "
            info="Fire is from a SMC(or led FG), berserk/Fanatic unit, Fire Lane, IFE, Canister, Aircraft, British Elite/First Line unit, Finns, Sniper, ordnance, OBA, any form of vehicular fire, CC, or DC."
          />
          <CheckBoxValue
            title="Double Cowering: "
            info="Fire is from Inexperienced Personnel"
          />
        </form>
        <RollDice
          onRoll={this.onRoll}
          diceTotal={this.state.diceTotal}
          dieRolls={this.state.dieRolls}
        />
      </div>
    );
  }
}

export default CardIFT;
