import React, { useState } from 'react';
import styled from 'styled-components';

import BoxValue from './BoxValue';
import CheckBoxValue from './CheckBoxValue';
import DiceRollerIFT from './DiceRollerIFT';
import AlertResult from './AlertResult';

const ContainerIFT = styled.div`
  background-color: #212121;

  h2 {
    background-color: #ff6942;
    padding-left: 3px;
    padding-bottom: 5px;
  }
`;

const CardIFT = () => {
  const [firePower, setFirePower] = useState(1);
  const [combatModifier, setCombatModifier] = useState(0);
  const [rateOfFire, setRateOfFire] = useState(0);
  const [rofMaintained, setRofMaintained] = useState(false);
  const [noCowering, setNoCowering] = useState(false);
  const [doubleCowering, setDoubleCowering] = useState(false);
  const [isCowering, setCowering] = useState(false);
  const [combatResult, setCombatResult] = useState('');

  return (
    <ContainerIFT>
      <h2>Infantry Fire Table</h2>
      <form>
        <BoxValue
          title="FirePower"
          thisNumberValue={firePower}
          thisStateSet={setFirePower}
        />
        <BoxValue
          title="Modifier"
          thisNumberValue={combatModifier}
          thisStateSet={setCombatModifier}
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
      <DiceRollerIFT
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
    </ContainerIFT>
  );
};

export default CardIFT;
