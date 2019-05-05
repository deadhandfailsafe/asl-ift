import React, { useState } from 'react';
import Random from 'random';

// Simple function to generate a 1d6 die roll.
const generateDieRoll = () => {
  return Random.int(1, 6);
};

// Function that uses the die roller and puts the results into the states for 2d6.
const generateDiceRoll = (setDieOne, setDieTwo) => {
  setDieOne(generateDieRoll());
  setDieTwo(generateDieRoll());
};

const DiceRoller = ({ modifier }) => {
  // Start die states at 0 so people can't cheat with a starting snake eyes pretend roll
  const [dieOne, setDieOne] = useState(0);
  const [dieTwo, setDieTwo] = useState(0);

  return (
    <div>
      <button onClick={() => generateDiceRoll(setDieOne, setDieTwo)}>
        Roll
      </button>
      <h4>
        Dice Rolls: {dieOne} | {dieTwo}
      </h4>
      <h3>Total: {dieOne + dieTwo + Number(modifier)}</h3>
    </div>
  );
};

export default DiceRoller;
