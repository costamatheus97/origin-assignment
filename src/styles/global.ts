import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #f4f8fa;
    font-family: 'Work Sans', sans-serif;

  }

  button {
    cursor: pointer;
  }
`;
