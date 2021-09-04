import styled from "styled-components/macro";
import GlobalStyle from "./global-styles";

const DummyText = styled.h1`
  display: flex;
  justify-content: center;
  font-size: 5rem;
  font-weight: 700;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <DummyText>Fashion Forcast</DummyText>
    </>
  );
}

export default App;
