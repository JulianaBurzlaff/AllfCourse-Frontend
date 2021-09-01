/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
// import Grid from '@material-ui/core/Grid';
import { useHistory } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import { useUser } from '../../providers/UserProvider';
import { useCourse } from '../../providers/CourseProvider';
import CourseHeader from '../CourseHeader';
import Container from '../Container';
import Section from '../Section';
import ModulesAccordion from '../ModulesAccordion';
import image from '../../assets/logo.svg';

import * as S from './styles';

function CourseDetail() {
  const { user } = useUser();
  const { chosenCourse } = useCourse();
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();

  function enrollUser() {
    console.log(user.id);
    console.log(chosenCourse.id);
    // fazer post de matricula
    enqueueSnackbar('Matrícula efetuada com sucesso', {
      variant: 'success',
    });
    history.push('/dashboard/student');
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
          description="Descrição"
          teacher="Diego Souza"
          value={0}
          subscribersNumber={1}
          categories="Categorias"
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
