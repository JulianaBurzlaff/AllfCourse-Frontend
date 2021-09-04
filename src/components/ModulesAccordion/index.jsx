import React from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useHistory } from 'react-router-dom';
import * as S from './styles';

function ModulesAccordion({ courseModule, courseId, canClick }) {
  const history = useHistory();

  const openClass = classId => {
    history.push(
      `/dashboard/student/course/${courseId}/module/${courseModule.id}/class/${classId}`,
    );
  };

  return (
    <S.Container>
      <S.ModuleAccordion>
        <S.ModuleAccordionSummary expandIcon={<ExpandMoreIcon />}>
          <S.ModuleInfo> MÓDULO {courseModule.module_order}</S.ModuleInfo>
          {courseModule.name}
        </S.ModuleAccordionSummary>
        <S.ModuleAccordionDetails>
          <S.Description>{courseModule.description}</S.Description>
          {courseModule.classes.map((courseClass, i) => (
            <S.Class
              key={i}
              onClick={canClick ? () => openClass(courseClass.id) : undefined}
            >
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
