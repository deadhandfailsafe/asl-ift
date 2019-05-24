import React from 'react';
import styled from 'styled-components';

const Alert = styled.div`
  text-align: center;
  font-size: 2em;
  color: #fcfcfc;
  background-color: #42548d;

  h4 {
    margin-top: 0.5em;
    margin-bottom: 0;
  }
`;

const AlertResult = ({ alertHeader }) => {
  return (
    <Alert>
      <h4>{alertHeader}</h4>
    </Alert>
  );
};

export default AlertResult;
