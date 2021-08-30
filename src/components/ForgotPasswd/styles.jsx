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

export const Separation = styled.div`
  ${({ theme }) => css`
    width: 200px;
    text-align: center;
    position: relative;
    margin-top: 6px;

    &::before {
      content: '';
      position: absolute;
      width: 100%;
      left: 0;
      top: 13px;
      border-top: 1px solid ${theme.palette.divider};
    }
  `}
`;

export const SeparationText = styled(Typography)`
  ${({ theme }) => css`
    font-size: 16px;
    background-color: #fff;
    z-index: 1;
    position: relative;
    padding: 0 6px;
    color: ${theme.palette.grey['500']};
  `}
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
