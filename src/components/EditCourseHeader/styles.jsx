import styled, { css } from 'styled-components';
// import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import Chip from '@material-ui/core/Chip';
import Modal from '@material-ui/core/Modal';

export const CatOption = styled(Chip)`
  margin-right: 5px;
`;

export const FlagsInput = styled(TextField)`
  font-size: 16px;
  width: 100%;
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
    text-align: center;
  `}
`;

export const Input = styled.div`
  font-size: 16px;
  width: 95%;
`;

export const Flag = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: ${theme.palette.secondary.dark};
    border-radius: 5px;
    margin: 5px;
  `}
`;

export const FlagLabel = styled.p`
  ${({ theme }) => css`
    color: ${theme.palette.text.secondary};
    font-size: 14px;
    margin: 2px 5px;
  `}
`;

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
