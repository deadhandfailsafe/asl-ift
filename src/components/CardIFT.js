import React, { useState } from 'react';

import BoxValue from './BoxValue';
import CheckBoxValue from './CheckBoxValue';
import DiceRoller from './DiceRoller';
import AlertResult from './AlertResult';

const CardIFT = () => {
  const [firePower, setFirePower] = useState(1);
  const [combatModifier, setModifier] = useState(0);
  const [rateOfFire, setRateOfFire] = useState(0);
  const [rofMaintained, setRofMaintained] = useState(false);
  const [noCowering, setNoCowering] = useState(false);
  const [doubleCowering, setDoubleCowering] = useState(false);
  const [isCowering, setCowering] = useState(false);
  const [combatResult, setCombatResult] = useState('');

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
          thisCheckValue={noCowering}
          thisStateSet={setNoCowering}
        />
        <CheckBoxValue
          title="Double Cowering: "
          info="Fire is from Inexperienced Personnel"
          thisCheckValue={doubleCowering}
          thisStateSet={setDoubleCowering}
        />
      </form>
      <DiceRoller
        firePower={firePower}
        modifier={combatModifier}
        rateOfFire={rateOfFire}
        setROF={setRofMaintained}
        setCowering={setCowering}
        setCombatResult={setCombatResult}
        doubleCowering={doubleCowering}
        noCowering={noCowering}
      />
      {rofMaintained === true && (
        <AlertResult alertHeader="Rate of Fire Maintained!" />
      )}
      {isCowering === true &&
        noCowering === false &&
        doubleCowering === false && (
          <AlertResult alertHeader="The Fire Group Cowers!" />
        )}
      {isCowering === true &&
        doubleCowering === true &&
        noCowering === false && (
          <AlertResult alertHeader="The Fire Group Double Cowers!" />
        )}
      {combatResult !== '' && <AlertResult alertHeader={combatResult} />}
    </div>
  );
};

export default CardIFT;
