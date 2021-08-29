import styled, { css } from 'styled-components';
import Grid from '@material-ui/core/Grid';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  min-height: 100vh;
  overflow: hidden;
`;

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

export const Subtitle = styled.p`
  font-size: 40px;
  margin: 60px 20px 20px;
  text-align: center;
  max-width: 400px;
`;

export const Logo = styled.img`
  width: 70%;
  max-width: 300px;
`;

export const RightGrid = styled(Grid)`
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  ${({ theme }) => css`
    ${theme.breakpoints.up('sm')} {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: ${theme.palette.text.primary};
    }
  `}
`;
