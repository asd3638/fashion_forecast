import styled, { css } from "styled-components/macro";
import { createGlobalStyle } from "styled-components/macro";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }
  :root {
    --horizontal-space: 5.5rem;
  }
  html {
    font-size: 62.5%;
  }
  body {
    font-family: 'Gothic A1', -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 1.6rem;
    height: 100vh;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
`;

// custom styles
const simpleStyle = css`
  background-color: white;
  border: 2.5px solid black;
  border-radius: ${(props) => (props.roundStyle ? "50%" : "1rem")};
  border-width: ${(props) => (props.buttonStyle ? "2.5px 2.5px 5px" : "")};
`;
export const StyledBase = styled.div`
  ${simpleStyle}
`;

export default GlobalStyle;
