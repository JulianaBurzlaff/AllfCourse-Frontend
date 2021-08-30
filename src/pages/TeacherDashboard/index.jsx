import React from 'react';
// import Grid from '@material-ui/core/Grid';
// import { useHistory } from 'react-router-dom';
import Header from '../../components/Header';
import CourseUnderReviewBanner from '../../components/CourseUnderReviewBanner';
import Container from '../../components/Container';
import Section from '../../components/Section';
import logo from '../../assets/logo.svg';
import avatar from '../../assets/avatar.svg';
import * as S from './styles';

function TeacherDasboard() {
  return (
    <Container
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
      width="100vw"
    >
      <Header width="80px" height="100vh" logo={logo} avatar={avatar} />
      <Container
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
        width="calc(100vw - 80px)"
        margin="0 0 0 80px"
      >
        <Container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          width="90%"
          margin="50px 0 0 0"
        >
          <S.Text size="20px" weight="normal" color="primary">
            Bem vindo!
          </S.Text>
        </Container>
        <Section title="CURSOS EM ESPERA">
          <CourseUnderReviewBanner />
        </Section>
        <Section title="MEUS CURSOS" />
        <Section title="CURSOS INATIVOS" />
      </Container>
    </Container>
  );
}

export default TeacherDasboard;
