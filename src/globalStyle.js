import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    background-color: #282c34;
    width: 100vw;
    height: 100%;
    color: white;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    /* font-size: calc(10px + 2vmin); */
    --main: #4eb5f1;
    --main-hover: #4095c6;
    --shadow: #42445a;
  }
`;

export default GlobalStyle;
