import styled, { css } from 'styled-components';
import Grid from '@material-ui/core/Grid';

export const LeftGrid = styled(Grid)`
  ${({ theme }) => css`
    display: none;

    ${theme.breakpoints.up('sm')} {
      display: flex;
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

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LoginName = styled.p`
  font-size: 26px;
`;

export const LinkButton = styled.button`
  ${({ theme }) => css`
    font-size: 12px;
    margin: 7px 0 20px;
    text-decoration: none;
    border: none;
    background-color: transparent;
    cursor: pointer;
    color: ${theme.palette.primary.main};
    &:hover {
      transform: scale(1.1, 1.1);
    }
  `}
`;
