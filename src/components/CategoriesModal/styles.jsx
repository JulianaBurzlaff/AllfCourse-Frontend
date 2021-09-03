import styled, { css } from 'styled-components';
import Modal from '@material-ui/core/Modal';

export const ModalContainer = styled(Modal)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ModalContent = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.palette.primary.contrastText};
    border: none;
    border-radius: 5px;
  `}
`;

export const CloseModalButton = styled.button`
  width: 15px;
  background: none;
  border: none;
  > img {
    width: 90%;
  }

  &:active {
    filter: brightness(0.9);
  }

  &:hover {
    cursor: pointer;
    transform: scale(1.01, 1.01);
  }
`;

export const Title = styled.p`
  ${({ theme, fontSize, weight, color, margin, width }) => css`
    color: ${theme.palette.primary[color]};
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

export const FlagToSelect = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin: 5px;
  font-size: 14px;
  padding: 10px;

  &:active {
    filter: brightness(0.9);
  }

  &:hover {
    cursor: pointer;
    transform: scale(1.1, 1.1);
  }

  ${({ theme, selected }) =>
    selected &&
    css`
      background: ${theme.palette.primary.dark};
      color: ${theme.palette.text.secondary};
      border-style: none;
    `}

  ${({ theme, selected }) =>
    !selected &&
    css`
      background: ${theme.palette.primary.contrastText};
      color: ${theme.palette.text.primary};
      border: solid 1px ${theme.palette.text.primary};
    `}
`;

export const Return = styled.p`
  color: #49a7a1;
`;

export const ErrorReturn = styled.p`
  color: #c65b58;
`;
