import React, { useState } from 'react';
import Random from 'random';

const generateDieRoll = () => {
  return Random.int(1, 6);
};

// Function that uses the rollers and puts the results into the states.
const generateDiceRoll = (setDieOne, setDieTwo) => {
  setDieOne(generateDieRoll());
  setDieTwo(generateDieRoll());
};

const DiceRoller = () => {
  const [dieOne, setDieOne] = useState(1);
  const [dieTwo, setDieTwo] = useState(1);

  return (
    <div>
      <button onClick={() => generateDiceRoll(setDieOne, setDieTwo)}>
        Roll
      </button>
      <h3>Total: {dieOne + dieTwo}</h3>
      <h4>
        Dice Rolls: {dieOne} | {dieTwo}
      </h4>
    </div>
  );
};

export default DiceRoller;
