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
const rollTheDice = props => {
  // This was originally just setDieOne(generateDieRoll()) etc., however this allows for better splitting of needs.
  let dieOne = generateDieRoll();
  let dieTwo = generateDieRoll();
  // Set die states.
  props.setDieOne(dieOne);
  props.setDieTwo(dieTwo);
  let resultTotal = dieOne + dieTwo + Number(props.modifier);
  props.setDiceTotal(resultTotal);
  // Adjust result total to properly read the table if higher/lower than set values. This is how the game rules work anyways.
  if (resultTotal > 15) {
    resultTotal = 15;
  } else if (resultTotal < 0) {
    resultTotal = 0;
  }
  // Do ROF/Cowering checks and set their states respectively.
  props.setROF(checkROF(dieOne, props.rateOfFire));
  let cowerCheck = checkCowering(dieOne, dieTwo);
  props.setCowering(cowerCheck);
  // Determine the correct FP column to use and then set the result accordingly with dice roll.
  let currentFPColumn = determineFPColumn(props.firePower);
  // FP Can't be 0
  if (currentFPColumn !== 0) {
    // Adjust FP column further based on whether the unit cowers or not
    if (
      cowerCheck === true &&
      props.doubleCowering === false &&
      props.noCowering === false
    ) {
      // If a cower goes off the table it's no result.
      if (currentFPColumn === 1) {
        currentFPColumn = 0;
        props.setCombatResult('No Result Due To Cowering.');
      } else {
        let columnIndex = dataIFT['keymap'].indexOf(currentFPColumn);
        currentFPColumn = dataIFT['keymap'][columnIndex - 1];
      }
    } else if (
      cowerCheck === true &&
      props.doubleCowering === true &&
      props.noCowering === false
    ) {
      // If a cower goes off the table it's no result.
      if (currentFPColumn === 1 || currentFPColumn === 2) {
        currentFPColumn = 0;
        props.setCombatResult('No Result Due To Cowering.');
      } else {
        let columnIndex = dataIFT['keymap'].indexOf(currentFPColumn);
        currentFPColumn = dataIFT['keymap'][columnIndex - 2];
      }
    }
    // If a cower goes off this has already been set to No Result.
    if (currentFPColumn !== 0) {
      props.setCombatResult(dataIFT[currentFPColumn][resultTotal]);
    }
  }
};

const DiceRollerIFT = ({
  firePower,
  modifier,
  rateOfFire,
  setROF,
  setCowering,
  setCombatResult,
  noCowering,
  doubleCowering
}) => {
  // Start die states at 0 so people can't cheat with a starting snake eyes pretend roll.
  const [dieOne, setDieOne] = useState(0);
  const [dieTwo, setDieTwo] = useState(0);
  const [diceTotal, setDiceTotal] = useState(0);

  return (
    <div>
      <button
        onClick={() =>
          rollTheDice({
            diceTotal,
            setDieOne,
            setDieTwo,
            setDiceTotal,
            firePower,
            modifier,
            rateOfFire,
            setROF,
            setCowering,
            setCombatResult,
            noCowering,
            doubleCowering
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

export default DiceRollerIFT;
