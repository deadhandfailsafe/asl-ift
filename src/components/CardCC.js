import React, { useState } from 'react';

import BoxValue from './BoxValue';
import CheckBoxValue from './CheckBoxValue';
import DiceRollerCC from './DiceRollerCC';
import AlertResult from './AlertResult';

const CardCC = () => {
  const [atkFirePower, setAtkFirePower] = useState(0);
  const [defFirePower, setDefFirePower] = useState(0);
  const [closeCombatModifier, setCloseCombatModifier] = useState(0);
  const [handToHand, setHandToHand] = useState(false);
  const [combatRatio, setCombatRatio] = useState('');
  const [closeCombatResult, setCloseCombatResult] = useState('');

  return (
    <div>
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
    </div>
  );
};

export default CardCC;
