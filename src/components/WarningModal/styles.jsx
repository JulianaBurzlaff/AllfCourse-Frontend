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
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    background-color: ${theme.palette.primary.contrastText};
    border: none;
    min-height: 30vh;
    border-radius: 5px;
    padding: 20px;
    overflow-x: hidden;
    overflow-y: auto;
  `}
`;

export const Icon = styled.img`
  width: 50px;
`;

export const Text = styled.p`
  ${({ theme }) => css`
    color: ${theme.palette.text.primary};
    font-size: 16px;
    font-weight: normal;
    text-align: center;
    width: 80%;
    margin: 10px;
  `}
`;
