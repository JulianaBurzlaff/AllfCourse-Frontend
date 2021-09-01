import styled, { css } from 'styled-components';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
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

export const ModuleAccordionDetails = styled(AccordionDetails)`
  ${({ theme }) => css`
    background-color: ${theme.palette.info.main};
    color: ${theme.palette.info.dark};
  `}
`;
