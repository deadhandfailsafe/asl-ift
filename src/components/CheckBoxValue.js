import React from 'react';
import styled from 'styled-components';

const CheckBox = styled.div`
  padding-bottom: 5px;
`;

const CheckBoxValue = ({ title, info, thisCheckValue, thisStateSet }) => {
  return (
    <CheckBox>
      <label>
        <input
          type="checkbox"
          checked={thisCheckValue}
          onChange={event => thisStateSet(event.target.checked)}
        />
        <strong>{title}</strong>
        {info}
      </label>
    </CheckBox>
  );
};

export default CheckBoxValue;
