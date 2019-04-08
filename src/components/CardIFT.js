import React from 'react';
import BoxValue from './BoxValue';
import CheckBoxValue from './CheckBoxValue';
import RollDice from './RollDice';

const CardIFT = () => {
    return(
        <div>
            <h2>Infantry Fire Table</h2>
            <form>
                <BoxValue title='Firepower' />
                <BoxValue title='Modifier' />
                <BoxValue title='ROF' />
                <CheckBoxValue title='No Cowering: ' info='Fire is from a SMC(or led FG), berserk/Fanatic unit, Fire Lane, IFE, Canister, Aircraft, British Elite/First Line unit, Finns, Sniper, ordnance, OBA, any form of vehicular fire, CC, or DC.' />
                <CheckBoxValue title='Double Cowering: ' info='Fire is from Inexperienced Personnel' />
                <CheckBoxValue title='Check for SAN' info='' />
                <BoxValue title='Allies SAN' />
                <BoxValue title='Axis SAN' />
            </form>
            <RollDice />
        </div>
    );
}

export default CardIFT;