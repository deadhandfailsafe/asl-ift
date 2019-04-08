import React from 'react';

const RollDice = ({ GetTotal, diceTotal }) => {
    return(
        <div>
            <button onClick={GetTotal}>Roll</button>
            <h3>Total: {diceTotal}</h3>
            <h4>Dice Rolls: </h4>
        </div>
    );
}

export default RollDice;