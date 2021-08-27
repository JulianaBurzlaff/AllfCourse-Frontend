import styled, { css } from 'styled-components';
import Grid from '@material-ui/core/Grid';

export const LeftGrid = styled(Grid)`
  ${({ theme }) => css`
    display: none;

    ${theme.breakpoints.up('sm')} {
      display: flex;
      justify-content: center;
      background-color: ${theme.palette.primary.main};
      height: 100vh;
      color: ${theme.palette.primary.contrastText};
    }
  `}
`;

export const Phrase = styled.p`
  font-size: 40px;
  margin: 30px 20px 20px;
  text-align: center;
`;

export const Logo = styled.img`
  width: 300px;
  height: 400px;
`;

export const RightGrid = styled(Grid)`
  ${({ theme }) => css`
    ${theme.breakpoints.up('sm')} {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
      color: ${theme.palette.text.primary};
    }
  `}
`;
