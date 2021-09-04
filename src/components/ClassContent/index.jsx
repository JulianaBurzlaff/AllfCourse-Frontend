/* eslint-disable camelcase */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useMemo } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useCourse } from '../../providers/CourseProvider';
import Container from '../Container';
import YoutubeEmbed from '../YoutubeEmbed';
import Loader from '../Loader';

import * as S from './styles';

function ClassContent() {
  const [loading, setLoading] = useState(true);
  const { courseId, moduleId, classId } = useParams();
  const history = useHistory();
  const { fetchChosenCourse, chosenCourse = [] } = useCourse();

  console.log(classId);

  useEffect(() => {
    if (courseId) {
      fetchChosenCourse({ courseId }).finally(() => setLoading(false));
    }
  }, [courseId]);

  const module = useMemo(() => {
    return chosenCourse.modules?.find(mod => mod.id === Number(moduleId));
  }, [chosenCourse, moduleId]);

  const classInfo = useMemo(() => {
    return module.classes?.find(cl => cl.id === Number(classId));
  }, [chosenCourse, classId]);

  const classIndex = useMemo(() => {
    const classesIds = module.classes?.map(cl => cl.id);
    return classesIds.indexOf(Number(classId));
  }, [classId, module.classes]);

  const moduleIndex = useMemo(() => {
    const modulesIds = chosenCourse.modules?.map(mod => mod.id);
    return modulesIds.indexOf(Number(moduleId));
  }, [moduleId, chosenCourse.modules]);

  const onNextClassClick = () => {
    const classesIds = module.classes?.map(cl => cl.id);

    if (classIndex === classesIds.length - 1) {
      const nextModule = chosenCourse.modules[moduleIndex + 1];
      const firstClassId = nextModule.classes[0].id;

      history.push(
        `/dashboard/student/course/${courseId}/module/${nextModule.id}/class/${firstClassId}`,
      );
    } else {
      const nextId = classesIds[classIndex + 1];

      history.push(
        `/dashboard/student/course/${courseId}/module/${moduleId}/class/${nextId}`,
      );
    }
  };

  const onPreviousClassClick = () => {
    const classesIds = module.classes?.map(cl => cl.id);
    if (classIndex === 0) {
      const prevModule = chosenCourse.modules[moduleIndex - 1];
      const lastClassId = prevModule.classes[prevModule.classes.length - 1].id;

      history.push(
        `/dashboard/student/course/${courseId}/module/${prevModule.id}/class/${lastClassId}`,
      );
    } else {
      const previousId = classesIds[classIndex - 1];

      history.push(
        `/dashboard/student/course/${courseId}/module/${moduleId}/class/${previousId}`,
      );
    }
  };

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
        padding="2px"
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
              history.push(`/dashboard/student/course/${courseId}/content`);
            }}
          >
            Voltar à página do curso
          </S.BackButton>
        </S.Header>
        <S.Content>
          <S.Class>
            <YoutubeEmbed embedId={classInfo?.video_link} />
            <S.ClassInfo>
              <S.ClassOrder>AULA {classInfo?.class_order}</S.ClassOrder>
              <S.ClassName> {classInfo?.name}</S.ClassName>
            </S.ClassInfo>
          </S.Class>
          <S.RightSide>
            <S.Material>MATERIAL COMPLEMENTAR</S.Material>
            <S.Buttons>
              <S.Previous
                disabled={classIndex === 0 && moduleIndex === 0}
                onClick={onPreviousClassClick}
              >
                Aula Anterior
              </S.Previous>
              <S.Next
                disabled={
                  classIndex === module.classes?.length - 1 &&
                  moduleIndex === chosenCourse.modules?.length - 1
                }
                onClick={onNextClassClick}
              >
                {classIndex === module.classes?.length - 1
                  ? 'Próximo módulo'
                  : 'Próxima aula'}
              </S.Next>
            </S.Buttons>
          </S.RightSide>
        </S.Content>
      </Container>
    </>
  );
}

export default ClassContent;
