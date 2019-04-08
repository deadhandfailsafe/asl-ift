import React from 'react';

const BoxValue = ({ title }) => {
    return(
        <div>
            <label>{ title }</label>
            <input type='number' placeholder='0'/>
        </div>
    );
}

export default BoxValue;