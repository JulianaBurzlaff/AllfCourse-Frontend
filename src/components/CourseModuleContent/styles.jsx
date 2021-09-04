import styled, { css } from 'styled-components';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import TextField from '@material-ui/core/TextField';
import Modal from '@material-ui/core/Modal';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  width: 100%;
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
    color: ${theme.palette.primary[color]};
    font-size: ${fontSize};
    font-weight: ${weight};
    margin: ${margin};
    width: ${width};
    text-align: flex-start;
  `}
`;

export const Input = styled(TextField)`
  font-size: 16px;
  width: 100%;
`;

export const ModuleAccordion = styled(Accordion)`
  ${({ theme }) => css`
    background-color: ${theme.palette.primary.light};
    width: 98%;
    margin-bottom: 10px;
  `}
`;

export const ModuleAccordionSummary = styled(AccordionSummary)`
  ${({ theme }) => css`
    width: 100%;
    color: ${theme.palette.primary.dark};
  `}
`;

export const ModuleInfo = styled.div`
  ${({ theme }) => css`
    font-weight: 600;
    color: ${theme.palette.primary.dark};
    margin-right: 40px;
  `}
`;

export const ModuleAccordionDetails = styled(AccordionDetails)`
  ${({ theme }) => css`
    background-color: ${theme.palette.text.secondary};
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 3px;
  `}
`;

export const Description = styled.div`
  ${({ theme }) => css`
    font-size: 14px;
    color: ${theme.palette.text.primary};
    margin: 10px;
  `}
`;

export const WarningModalContent = styled.div`
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
