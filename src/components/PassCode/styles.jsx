import styled, { css } from 'styled-components';
import Typography from '@material-ui/core/Typography';
import Button from '../Button';

export const Form = styled.form`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;

    ${theme.breakpoints.up('sm')} {
      width: 60%;
      max-width: 400px;
    }
  `}
`;

export const Title = styled(Typography)`
  font-size: 26px;
`;

export const Text = styled(Typography)`
  font-size: 20px;
  width: 400px;
  text-align: center;
  margin: 40px 0 20px;
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

export const SubmitButton = styled(Button)`
  margin-top: 30px;
  ${({ loading }) =>
    loading &&
    `
   pointer-events: none;
  `}
`;

export const Return = styled.span`
  color: #49a7a1;
  height: 15px;
`;

export const ErrorReturn = styled.span`
  color: #c65b58;
  height: 15px;
`;
