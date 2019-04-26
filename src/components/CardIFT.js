import React from 'react';

import BoxValue from './BoxValue';
import CheckBoxValue from './CheckBoxValue';
import DiceRoller from './DiceRoller';

// Initial State variables - Old leftovers from this.state which is being cleaned out.
const initialState = {
  firePower: 0,
  modifier: 0,
  rateOfFire: 0
};

const CardIFT = () => {
  return (
    <div>
      <h2>Infantry Fire Table</h2>
      <form>
        <BoxValue title="Firepower" value={initialState.firePower} />
        <BoxValue title="Modifier" value={initialState.modifier} />
        <BoxValue title="ROF" value={initialState.rateOfFire} />
        <CheckBoxValue
          title="No Cowering: "
          info="Fire is from a SMC(or led FG), berserk/Fanatic unit, Fire Lane, IFE, Canister, Aircraft, British Elite/First Line unit, Finns, Sniper, ordnance, OBA, any form of vehicular fire, CC, or DC."
        />
        <CheckBoxValue
          title="Double Cowering: "
          info="Fire is from Inexperienced Personnel"
        />
      </form>
      <DiceRoller />
    </div>
  );
};

export default CardIFT;
