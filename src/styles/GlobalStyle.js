import { createGlobalStyle } from 'styled-components';
import createTheme from '../theme';

export default createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  *::-webkit-scrollbar {
    width: 4px;
    height: 4px;
  }

  *::-webkit-scrollbar-thumb {
      background-color: ${createTheme.palette.primary.dark};
  }

  body{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: normal;
    overflow-x: hidden;
    background: ${createTheme.palette.primary.contrastText};
  }

  #root{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

`;
