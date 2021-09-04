import styled, { css } from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Modal from '@material-ui/core/Modal';

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

export const TextArea = styled(TextField)`
  font-size: 16px;
  width: 100%;
  min-height: 80px;
`;

export const Title = styled.p`
  ${({ theme, fontSize, weight, color, margin, width }) => css`
    color: ${theme.palette.text[color]};
    font-size: ${fontSize};
    font-weight: ${weight};
    margin: ${margin};
    width: ${width};
    text-align: center;
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

export const Span = styled.span`
  ${({ theme, fontSize, weight, color, margin }) => css`
    color: ${theme.palette.text[color]};
    font-size: ${fontSize};
    font-weight: ${weight};
    margin: ${margin};
  `}
`;

export const Class = styled.button`
  ${({ theme }) => css`
    background-color: ${theme.palette.info.main};
    color: ${theme.palette.info.dark};
    margin-top: 5px;
    width: 100%;
    min-height: 50px;
    border-radius: 5px;
    padding: 15px;
    display: flex;
    border: none;
    text-decoration: none;

    &:hover {
      ${({ editStatus }) =>
        editStatus === 2 &&
        css`
          border: 1px solid ${theme.palette.info.dark};
          cursor: pointer;
        `}
    }

    &:active {
      ${({ editStatus }) =>
        editStatus === 2 &&
        css`
          filter: opacity(0.9);
        `}
    }
  `}
`;

export const ClassInfo = styled.p`
  ${({ theme }) => css`
    font-weight: 700;
    color: ${theme.palette.info.dark};
    margin-right: 40px;
  `}
`;

export const Input = styled(TextField)`
  font-size: 16px;
  width: 100%;
`;
