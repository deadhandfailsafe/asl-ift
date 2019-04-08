import React from 'react';

const CheckBoxValue = ({ title, info }) => {
    return(
        <div>
            <label>
                <input type="checkbox" /><strong>{ title }</strong>{ info }
            </label>
        </div>
    );
}

export default CheckBoxValue;