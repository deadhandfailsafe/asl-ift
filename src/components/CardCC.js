import React, { useState } from 'react';
import styled from 'styled-components';

import BoxValue from './BoxValue';
import CheckBoxValue from './CheckBoxValue';
import DiceRollerCC from './DiceRollerCC';
import AlertResult from './AlertResult';

const ContainerCC = styled.div`
  background-color: #212121;

  h2 {
    background-color: #ff4252;
    padding-left: 3px;
    padding-bottom: 5px;
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
        <CheckBoxValue
          title="Hand To Hand"
          info=""
          thisCheckValue={handToHand}
          thisStateSet={setHandToHand}
        />
      </form>
      <DiceRollerCC
        atkFirePower={atkFirePower}
        defFirePower={defFirePower}
        closeCombatModifier={closeCombatModifier}
        handToHand={handToHand}
        setCombatRatio={setCombatRatio}
        setCloseCombatResult={setCloseCombatResult}
      />
      {combatRatio !== '' && <AlertResult alertHeader={combatRatio} />}
      {closeCombatResult !== '' && (
        <AlertResult alertHeader={closeCombatResult} />
      )}
    </ContainerCC>
  );
};

export default CardCC;
