import styled from 'styled-components/macro';
import GlobalStyle from "./GlobalStyle";
import './App.css';

const DummyText = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10rem;
  text-transform: uppercase;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <DummyText>fastion forecast</DummyText>
    </>
  );
}

export default App;
