import React, { useState } from 'react';
import styled from 'styled-components';

import BoxValue from './BoxValue';
import CheckBoxValue from './CheckBoxValue';
import DiceRollerCC from './DiceRollerCC';
import AlertResult from './AlertResult';

const ContainerCC = styled.div`
  background-color: #212121;
  padding-bottom: 0.5em;

  h2 {
    background-color: #ff4252;
    padding-left: 3px;
    padding-bottom: 3px;
  }
  form {
    padding-left: 1em;
    padding-right: 1em;
    padding-bottom: 1em;
  }
  .div-boxes {
    display: flex;
    flex-flow: wrap;
    justify-content: space-evenly;
    padding-bottom: 1em;
  }
  .div-roller {
    display: flex;
    justify-content: center;
  }
`;

const CardCC = () => {
  const [atkFirePower, setAtkFirePower] = useState(1);
  const [defFirePower, setDefFirePower] = useState(0);
  const [closeCombatModifier, setCloseCombatModifier] = useState(0);
  const [handToHand, setHandToHand] = useState(false);
  const [combatRatio, setCombatRatio] = useState('');
  const [closeCombatResult, setCloseCombatResult] = useState('');

  return (
    <ContainerCC>
      <h2>Close Combat Table</h2>
      <form>
        <div className="div-boxes">
          <BoxValue
            title="Attacker's FirePower"
            thisNumberValue={atkFirePower}
            thisStateSet={setAtkFirePower}
          />
          <BoxValue
            title="Defender's FirePower"
            thisNumberValue={defFirePower}
            thisStateSet={setDefFirePower}
          />
          <BoxValue
            title="Modifier"
            thisNumberValue={closeCombatModifier}
            thisStateSet={setCloseCombatModifier}
          />
        </div>
        <CheckBoxValue
          title="Hand To Hand"
          info=""
          thisCheckValue={handToHand}
          thisStateSet={setHandToHand}
        />
      </form>
      <div className="div-roller">
        <DiceRollerCC
          atkFirePower={atkFirePower}
          defFirePower={defFirePower}
          closeCombatModifier={closeCombatModifier}
          handToHand={handToHand}
          setCombatRatio={setCombatRatio}
          setCloseCombatResult={setCloseCombatResult}
        />
      </div>
      {combatRatio !== '' && <AlertResult alertHeader={combatRatio} />}
      {closeCombatResult !== '' && (
        <AlertResult alertHeader={closeCombatResult} />
      )}
    </ContainerCC>
  );
};

export default CardCC;
