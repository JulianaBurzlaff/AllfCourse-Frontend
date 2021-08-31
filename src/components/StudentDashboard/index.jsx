import React from 'react';
// import Grid from '@material-ui/core/Grid';
// import { useHistory } from 'react-router-dom';

import CourseBanner from '../CourseBanner';
import Container from '../Container';
import Section from '../Section';
import * as S from './styles';

function StudentDasboard() {
  return (
    <>
      <Container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        width="90%"
        margin="50px 0 0 0"
      >
        <S.Text size="20px" weight="normal" color="primary">
          Bem vindo, ALUNO!
        </S.Text>
      </Container>
      <Section title="CURSOS EM ANDAMENTO" contentDirection="column">
        <CourseBanner
          title="CURSO 2"
          description="Descrição"
          teacher="Nome do professor"
          value={0}
          subscribersNumber="152"
          student
          progress={20}
        />
      </Section>
      <Section title="TODOS OS CURSOS" contentDirection="row" wrap="wrap">
        <CourseBanner
          title="CURSO 2"
          description="Descrição"
          teacher="Nome do professor"
          value={0}
          subscribersNumber="152"
        />
        <CourseBanner
          title="CURSO 2"
          description="Descrição"
          teacher="Nome do professor"
          value={0}
          subscribersNumber="152"
        />
        <CourseBanner
          title="CURSO 2"
          description="Descrição"
          teacher="Nome do professor"
          value={0}
          subscribersNumber="152"
        />
      </Section>
    </>
  );
}

export default StudentDasboard;
