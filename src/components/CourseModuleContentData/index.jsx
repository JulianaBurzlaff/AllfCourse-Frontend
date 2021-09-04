import React, { useCallback } from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Container from '../Container';
import CourseClassBannerData from '../CourseClassBannerData';
import * as S from './styles';

function CourseModuleContentData({ module, classes, position }) {
  const classesToTheModule = useCallback(() => {
    const filterClasses = classes.filter(classData => {
      return classData.position === parseInt(position, 10);
    });

    return filterClasses;
  }, [classes, position]);

  return (
    <S.Container>
      <S.ModuleAccordion>
        <S.ModuleAccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            width="100%"
            background="none"
            wrap="wrap"
          >
            <S.ModuleInfo>MÓDULO {module.order}</S.ModuleInfo>
            <S.Text>{module.name}</S.Text>
          </Container>
        </S.ModuleAccordionSummary>
        <S.ModuleAccordionDetails>
          <S.Description>{module.description}</S.Description>
          <CourseClassBannerData
            classes={classesToTheModule()}
            position={position}
          />
        </S.ModuleAccordionDetails>
      </S.ModuleAccordion>
    </S.Container>
  );
}

export default CourseModuleContentData;
