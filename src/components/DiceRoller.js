import React, { useState } from 'react';
import Random from 'random';

import dataIFT from '../data/dataIFT.json';

// Simple function to generate a 1d6 die roll.
const generateDieRoll = () => {
  return Random.int(1, 6);
};

// Do a ROF Check - If die one is less than or equal to the unit ROF, ROF is maintained.
const checkROF = (dieOne, rateOfFire) => {
  if (rateOfFire === 0 || dieOne > rateOfFire) {
    return false;
  } else if (dieOne <= rateOfFire) {
    return true;
  } else {
    alert('Rate of Fire ERROR');
    return false;
  }
};

// Do a Cowering Check - If die one is equal to die two the unit cowers in most cases.
const checkCowering = (dieOne, dieTwo) => {
  if (dieOne === dieTwo) {
    return true;
  } else {
    return false;
  }
};

// Determines IFT Table FP Column - ASL uses the column that your FP is >= to, ex. if you have 5 FP it's a 4 FP result.
const determineFPColumn = firePower => {
  let fpColumn = 0;
  for (let i in dataIFT) {
    if (firePower >= Number(i)) {
      fpColumn = Number(i);
    }
  }
  return fpColumn;
};

// Function that uses the die roller and puts the results into the states for 2d6.
const generateTotalRoll = (
  setDieOne,
  setDieTwo,
  setDiceTotal,
  firePower,
  modifier,
  rateOfFire,
  setROF,
  setCowering,
  setCombatResult
) => {
  // This was originally just setDieOne(generateDieRoll()) etc., however this allows for better splitting of needs.
  let dieOne = generateDieRoll();
  let dieTwo = generateDieRoll();
  // Set die states.
  setDieOne(dieOne);
  setDieTwo(dieTwo);
  setDiceTotal(dieOne + dieTwo + Number(modifier));
  // Do ROF/Cowering checks and set their states respectively.
  setROF(checkROF(dieOne, rateOfFire));
  setCowering(checkCowering(dieOne, dieTwo));
  // DO FP
  console.log(determineFPColumn(firePower));
};

const DiceRoller = ({
  firePower,
  modifier,
  rateOfFire,
  setROF,
  setCowering,
  setCombatResult
}) => {
  // Start die states at 0 so people can't cheat with a starting snake eyes pretend roll.
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
            firePower,
            modifier,
            rateOfFire,
            setROF,
            setCowering,
            setCombatResult
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
