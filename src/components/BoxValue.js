import React from 'react';

const BoxValue = ({ title, boxValue, onBoxChange }) => {
    return(
        <div>
            <label>{ title }</label>
            <input type='number' placeholder='0' value={ boxValue } onChange={ onBoxChange } />
        </div>
    );
}

export default BoxValue;