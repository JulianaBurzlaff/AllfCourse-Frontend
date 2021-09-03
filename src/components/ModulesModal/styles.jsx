import styled, { css } from 'styled-components';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';

export const ModalContainer = styled(Modal)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ModalContent = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    background-color: ${theme.palette.primary.contrastText};
    border: none;
    height: 80vh;
    border-radius: 5px;
    padding: 20px;
    overflow-x: hidden;
    overflow-y: auto;
  `}
`;

export const Title = styled.p`
  ${({ theme, fontSize, weight, color, margin, width }) => css`
    color: ${theme.palette.primary[color]};
    font-size: ${fontSize};
    font-weight: ${weight};
    margin: ${margin};
    width: ${width};
    text-align: flex-start;
  `}
`;

export const Text = styled.p`
  ${({ theme, fontSize, weight, color, margin }) => css`
    color: ${theme.palette.text[color]};
    font-size: ${fontSize};
    font-weight: ${weight};
    margin: ${margin};
  `}
`;

export const Input = styled(TextField)`
  font-size: 16px;
  width: 100%;
`;

export const TextArea = styled(TextField)`
  font-size: 16px;
  width: 100%;
  min-height: 80px;
`;

export const Return = styled.p`
  color: #49a7a1;
`;

export const ErrorReturn = styled.p`
  color: #c65b58;
`;
