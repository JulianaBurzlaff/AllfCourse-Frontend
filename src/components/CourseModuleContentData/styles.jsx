import styled, { css } from 'styled-components';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';

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
