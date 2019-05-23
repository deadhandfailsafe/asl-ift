import React, { useState } from 'react';

import BoxValue from './BoxValue';
import CheckBoxValue from './CheckBoxValue';
import DiceRollerCC from './DiceRollerCC';

const CardCC = () => {
  const [atkFirePower, setAtkFirePower] = useState(0);
  const [defFirePower, setDefFirePower] = useState(0);
  const [closeCombatModifier, setCloseCombatModifier] = useState(0);
  const [handToHand, setHandToHand] = useState(false);

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
      />
    </div>
  );
};

export default CardCC;
