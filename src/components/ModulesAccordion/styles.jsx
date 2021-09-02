import styled, { css } from 'styled-components';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  margin-top: 20px;
`;

export const ModuleAccordion = styled(Accordion)`
  ${({ theme }) => css`
    background-color: ${theme.palette.primary.light};
    width: 85%;
    margin-left: 10px;
  `}
`;

export const ModuleAccordionSummary = styled(AccordionSummary)`
  ${({ theme }) => css`
    color: ${theme.palette.primary.dark};
  `}
`;

export const ModuleInfo = styled.div`
  ${({ theme }) => css`
    color: ${theme.palette.primary.dark};
    margin-right: 40px;
  `}
`;

export const ModuleAccordionDetails = styled(AccordionDetails)`
  ${({ theme }) => css`
    background-color: ${theme.palette.text.secondary};
    display: flex;
    flex-direction: column;
    margin-top: 3px;
  `}
`;

export const Description = styled.div`
  ${({ theme }) => css`
    color: ${theme.palette.text.primary};
    margin: 10px;
  `}
`;

export const Class = styled.button`
  ${({ theme }) => css`
    background-color: ${theme.palette.info.main};
    color: ${theme.palette.info.dark};
    margin-top: 5px;
    height: 50px;
    border-radius: 5px;
    padding: 15px;
    display: flex;
    border: none;
    text-decoration: none;

    &:hover {
      border: 1px solid ${theme.palette.info.dark};
      cursor: pointer;
    }
  `}
`;

export const ClassInfo = styled.div`
  ${({ theme }) => css`
    color: ${theme.palette.info.dark};
    margin-right: 40px;
  `}
`;
