/* eslint-disable camelcase */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useMemo } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useCourse } from '../../providers/CourseProvider';
import Container from '../Container';
import Loader from '../Loader';

import * as S from './styles';

function ClassConten() {
  const [loading, setLoading] = useState(true);
  const { courseId, moduleId, classId } = useParams();
  const history = useHistory();
  const { fetchChosenCourse, chosenCourse = [] } = useCourse();

  useEffect(() => {
    console.log(classId);
    fetchChosenCourse({ courseId }).finally(() => setLoading(false));
  }, []);

  const module = useMemo(() => {
    return chosenCourse.modules?.find(mod => mod.id === Number(moduleId));
  }, [chosenCourse]);

  const classInfo = useMemo(() => {
    return module.classes?.find(cl => cl.id === Number(classId));
  }, [chosenCourse]);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Container
        direction="column"
        justifyContent="space-between"
        alignItems="left"
        width="90%"
        margin="50px 0 0 0"
      >
        <S.Header>
          <S.Info>
            <S.Title>{chosenCourse.name}</S.Title>
            <S.Module>
              <S.ModuleInfo>MÓDULO {module?.module_order}</S.ModuleInfo>
              {module?.name}
            </S.Module>
          </S.Info>
          <S.BackButton
            onClick={() => {
              history.goBack();
            }}
          >
            Voltar à página do curso
          </S.BackButton>
        </S.Header>
        <S.Content>
          <S.Class>
            <S.Video>Video</S.Video>
            <S.ClassInfo>
              <S.ClassOrder>AULA {classInfo?.class_order}</S.ClassOrder>
              <S.ClassName> {classInfo?.name}</S.ClassName>
            </S.ClassInfo>
          </S.Class>
          <S.RightSide>
            <S.Material>MATERIAL COMPLEMENTAR</S.Material>
            <S.Buttons>
              <S.Previous>Aula Anterior</S.Previous>
              <S.Next>Próxima aula</S.Next>
            </S.Buttons>
          </S.RightSide>
        </S.Content>
      </Container>
    </>
  );
}

export default ClassConten;
