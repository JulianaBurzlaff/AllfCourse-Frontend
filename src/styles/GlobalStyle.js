import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  body{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: normal;
    overflow-x: hidden;
  }

  #root{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

`;
