import React, { useState } from 'react';
import Random from 'random';

// Simple function to generate a 1d6 die roll.
const generateDieRoll = () => {
  return Random.int(1, 6);
};

// Function that uses the die roller and puts the results into the states for 2d6.
const generateTotalRoll = (
  setDieOne,
  setDieTwo,
  setDiceTotal,
  modifier,
  currentRateOfFire,
  rofCheck
) => {
  // This was originally just setDieOne(generateDieRoll()) etc., however this allows for better splitting of needs
  let dieOne = generateDieRoll();
  let dieTwo = generateDieRoll();
  setDieOne(dieOne);
  setDieTwo(dieTwo);
  setDiceTotal(dieOne + dieTwo + Number(modifier));
  // Do a ROF Check
  if (currentRateOfFire === 0 || dieOne > currentRateOfFire) {
    rofCheck(false);
  } else if (dieOne <= currentRateOfFire) {
    rofCheck(true);
  } else {
    alert('Rate of Fire ERROR');
  }
};

const DiceRoller = ({ modifier, currentRateOfFire, rofCheck }) => {
  // Start die states at 0 so people can't cheat with a starting snake eyes pretend roll
  const [dieOne, setDieOne] = useState(0);
  const [dieTwo, setDieTwo] = useState(0);
  const [diceTotal, setDiceTotal] = useState(0);

  return (
    <div>
      <button
        onClick={() =>
          generateTotalRoll(
            setDieOne,
            setDieTwo,
            setDiceTotal,
            modifier,
            currentRateOfFire,
            rofCheck
          )
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

export default DiceRoller;
