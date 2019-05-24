import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  display: flex;
  flex-flow: column;
  width: 10em;

  label {
    padding-bottom: 0.5em;
  }
  input {
    font-size: 2em;
  }
`;

const BoxValue = ({ title, thisNumberValue, thisStateSet }) => {
  return (
    <Box>
      <label>{title}</label>
      <input
        type="number"
        placeholder="0"
        value={thisNumberValue}
        onChange={event => thisStateSet(event.target.value)}
      />
    </Box>
  );
};

export default BoxValue;
