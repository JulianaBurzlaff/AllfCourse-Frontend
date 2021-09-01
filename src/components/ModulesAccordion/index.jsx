import React from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import * as S from './styles';

function ModulesAccordion({ moduleName, className }) {
  return (
    <S.Container>
      <S.ModuleAccordion>
        <S.ModuleAccordionSummary expandIcon={<ExpandMoreIcon />}>
          {moduleName}
        </S.ModuleAccordionSummary>
        <S.ModuleAccordionDetails>{className}</S.ModuleAccordionDetails>
      </S.ModuleAccordion>
    </S.Container>
  );
}

export default ModulesAccordion;
