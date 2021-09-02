import React from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import * as S from './styles';

function ModulesAccordion({ courseModule }) {
  return (
    <S.Container>
      <S.ModuleAccordion>
        <S.ModuleAccordionSummary expandIcon={<ExpandMoreIcon />}>
          <S.ModuleInfo> MÓDULO {courseModule.module_order}</S.ModuleInfo>
          {courseModule.name}
        </S.ModuleAccordionSummary>
        <S.ModuleAccordionDetails>
          {courseModule.classes.map(courseClass => (
            <S.Class>
              <S.ClassInfo> AULA {courseClass.class_order}</S.ClassInfo>
              {courseClass.name}
            </S.Class>
          ))}
        </S.ModuleAccordionDetails>
      </S.ModuleAccordion>
    </S.Container>
  );
}

export default ModulesAccordion;
