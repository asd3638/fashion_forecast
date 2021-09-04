import { createGlobalStyle } from "styled-components/macro";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Gothic+A1:wght@100;400;700&display=swap');
  ${reset}

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
  }
  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default GlobalStyle;
