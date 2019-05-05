import React, { useState } from 'react';

import BoxValue from './BoxValue';
import CheckBoxValue from './CheckBoxValue';
import DiceRoller from './DiceRoller';

const CardIFT = () => {
  const [firePower, setFirePower] = useState(0);
  const [combatModifier, setModifier] = useState(0);
  const [rateOfFire, setRateOfFire] = useState(0);

  return (
    <div>
      <h2>Infantry Fire Table</h2>
      <form>
        <BoxValue
          title="Firepower"
          thisNumberValue={firePower}
          thisStateSet={setFirePower}
        />
        <BoxValue
          title="Modifier"
          thisNumberValue={combatModifier}
          thisStateSet={setModifier}
        />
        <BoxValue
          title="ROF"
          thisNumberValue={rateOfFire}
          thisStateSet={setRateOfFire}
        />
        <CheckBoxValue
          title="No Cowering: "
          info="Fire is from a SMC(or led FG), berserk/Fanatic unit, Fire Lane, IFE, Canister, Aircraft, British Elite/First Line unit, Finns, Sniper, ordnance, OBA, any form of vehicular fire, CC, or DC."
        />
        <CheckBoxValue
          title="Double Cowering: "
          info="Fire is from Inexperienced Personnel"
        />
      </form>
      <DiceRoller modifier={combatModifier} />
    </div>
  );
};

export default CardIFT;
