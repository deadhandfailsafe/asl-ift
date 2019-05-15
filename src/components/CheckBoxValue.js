import React from 'react';

const CheckBoxValue = ({ title, info, thisCheckValue, thisStateSet }) => {
  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={thisCheckValue}
          onChange={event => thisStateSet(event.target.checked)}
        />
        <strong>{title}</strong>
        {info}
      </label>
    </div>
  );
};

export default CheckBoxValue;
