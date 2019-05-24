import React from 'react';
import styled from 'styled-components';

import CardIFT from './components/CardIFT';
import CardCC from './components/CardCC';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div {
    max-width: 800px;
  }
  h1 {
    text-align: center;
  }
`;

function App() {
  return (
    <Container>
      <h1>Advanced Squad Leader Combat Table Assistant</h1>
      <div>
        <CardIFT className="card-ift" />
        <CardCC className="card-cc" />
      </div>
    </Container>
  );
}

export default App;
