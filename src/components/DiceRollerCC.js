import React, { useState } from 'react';
import Random from 'random';

// Simple function to generate a 1d6 die roll.
const generateDieRoll = () => {
  return Random.int(1, 6);
};

const rollTheDice = props => {
  // This was originally just setDieOne(generateDieRoll()) etc., however this allows for better splitting of needs.
  let dieOne = generateDieRoll();
  let dieTwo = generateDieRoll();
  // Set die states.
  props.setDieOne(dieOne);
  props.setDieTwo(dieTwo);
  let resultTotal = dieOne + dieTwo + Number(props.closeCombatModifier);
  props.setDiceTotal(resultTotal);
};

const DiceRollerCC = ({ atkFirePower, defFirePower, closeCombatModifier }) => {
  const [dieOne, setDieOne] = useState(0);
  const [dieTwo, setDieTwo] = useState(0);
  const [diceTotal, setDiceTotal] = useState(0);

  return (
    <div>
      <button
        onClick={() =>
          rollTheDice({
            setDieOne,
            setDieTwo,
            setDiceTotal,
            atkFirePower,
            defFirePower,
            closeCombatModifier
          })
        }>
        Roll
      </button>
      <h4>
        Dice Rolls: {dieOne} | {dieTwo}
      </h4>
      <h3>Total: {diceTotal}</h3>
    </div>
  );
};

export default DiceRollerCC;