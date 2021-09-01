/* eslint-disable camelcase */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
// import Grid from '@material-ui/core/Grid';
import { useParams, useHistory } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import { useUser } from '../../providers/UserProvider';
import { useCourse } from '../../providers/CourseProvider';
import CourseHeader from '../CourseHeader';
import Container from '../Container';
import Loader from '../Loader';
import Section from '../Section';
import ModulesAccordion from '../ModulesAccordion';
import image from '../../assets/logo.svg';

import * as S from './styles';

function CourseDetail() {
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const { user } = useUser();
  const { fetchChosenCourse, chosenCourse = [] } = useCourse();
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();

  function enrollUser() {
    console.log(user[0].id);
    console.log(chosenCourse.id);
    // fazer post de matricula
    enqueueSnackbar('Matrícula efetuada com sucesso', {
      variant: 'success',
    });
    history.push('/dashboard/student');
  }

  useEffect(() => {
    fetchChosenCourse({ id }).finally(() => setLoading(false));
  }, []);

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
        <CourseHeader
          title={chosenCourse.name}
          description={chosenCourse.description}
          teacher={chosenCourse.teacher_name}
          value={chosenCourse.value}
          subscribersNumber={chosenCourse.enrolleds}
          categories={chosenCourse.categories}
          image={image}
        />
        <S.SubmitButton width="200px" onClick={enrollUser}>
          Matricular-se
        </S.SubmitButton>
        <Section title="CONTEÚDO" contentDirection="column" alignItems="left" />
        <S.Content>
          <ModulesAccordion moduleName="Modulo1" className="aula 1" />
        </S.Content>
        <S.SubmitButton width="200px" onClick={enrollUser}>
          Matricular-se
        </S.SubmitButton>
      </Container>
    </>
  );
}

export default CourseDetail;
