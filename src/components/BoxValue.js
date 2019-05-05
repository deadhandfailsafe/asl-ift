import React from 'react';

const BoxValue = ({ title, thisNumberValue, thisStateSet }) => {
  return (
    <div>
      <label>{title}</label>
      <input
        type="number"
        placeholder="0"
        value={thisNumberValue}
        onChange={event => thisStateSet(event.target.value)}
      />
    </div>
  );
};

export default BoxValue;
