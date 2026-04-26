import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: border-box;
  }
  
  html, body {
    height: 100%;
    font-family: 'Netflix Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #141414;
    color: #ffffff;
    margin: 0;
    font-size: 16px;
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }
`;
