import React, { useState } from 'react';
import styled from 'styled-components';
import Random from 'random';

import dataCC from '../data/dataCC.json';

const Roller = styled.div`
  text-align: center;

  span {
    color: #ff4252;
  }
`;

const RollButton = styled.button`
  width: 8em;
  height: 2em;
  background-color: #d43346;
  color: #802343;
  border: 3px solid #802343;
  border-radius: 2px;
  font-size: 2em;
`;

// Simple function to generate a 1d6 die roll.
const generateDieRoll = () => {
  return Random.int(1, 6);
};

// Function to determine the CC Odds and get the related To Kill Number.
const getToKillNumber = ratioFP => {
  for (let i in dataCC) {
    if (ratioFP === 10) {
      return 12;
    } else if (ratioFP > 10) {
      return 13;
    } else if (ratioFP >= dataCC[i].Min && ratioFP < dataCC[i].Max) {
      return Number(i);
    }
  }
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

  // Find CC Ratio and set various states
  let ratioFP = props.atkFirePower / props.defFirePower;
  let toKillNumber = getToKillNumber(ratioFP);
  if (props.handToHand === true) {
    toKillNumber += 2;
  }
  props.setCombatRatio(
    `The Odds are ${
      dataCC[toKillNumber].Ratio
    } | The To Kill Number is ${toKillNumber}`
  );

  // Determine results
  if (resultTotal < toKillNumber) {
    props.setCloseCombatResult('Defending Units Eliminated');
  } else if (resultTotal === toKillNumber) {
    props.setCloseCombatResult('Defending Units Partial Kill');
  } else {
    props.setCloseCombatResult('No Result');
  }
};

const DiceRollerCC = ({
  atkFirePower,
  defFirePower,
  closeCombatModifier,
  handToHand,
  setCombatRatio,
  setCloseCombatResult
}) => {
  const [dieOne, setDieOne] = useState(0);
  const [dieTwo, setDieTwo] = useState(0);
  const [diceTotal, setDiceTotal] = useState(0);

  return (
    <Roller>
      <RollButton
        onClick={() =>
          rollTheDice({
            setDieOne,
            setDieTwo,
            setDiceTotal,
            atkFirePower,
            defFirePower,
            closeCombatModifier,
            handToHand,
            setCombatRatio,
            setCloseCombatResult
          })
        }>
        Roll
      </RollButton>
      <h4>
        Dice Rolls: <span>{dieOne}</span> | {dieTwo}
      </h4>
      <h3>Total: {diceTotal}</h3>
    </Roller>
  );
};

export default DiceRollerCC;
