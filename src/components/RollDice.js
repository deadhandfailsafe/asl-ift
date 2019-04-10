import React from 'react';

const RollDice = ({ onRoll, diceTotal, dieRolls }) => {
    return(
        <div>
            <button onClick={ onRoll }>Roll</button>
            <h3>Total: { diceTotal }</h3>
            <h4>Dice Rolls: { dieRolls[0] } | { dieRolls[1] }</h4>
        </div>
    );
}

export default RollDice;