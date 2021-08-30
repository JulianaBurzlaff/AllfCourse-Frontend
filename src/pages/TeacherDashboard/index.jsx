import React from 'react';
import DashboardTemplate from '../../components/DashboardTemplate';
import CourseUnderReviewBanner from '../../components/CourseUnderReviewBanner';
import CourseBanner from '../../components/CourseBanner';
import Container from '../../components/Container';
import Section from '../../components/Section';
import * as S from './styles';

function TeacherDasboard() {
  return (
    <DashboardTemplate>
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
      <Section title="CURSOS EM ESPERA" contentDirection="column">
        <CourseUnderReviewBanner
          title="CURSO 1"
          description="Descrição"
          value={0}
          requestDate="00/00/0000"
          inReview
        />
        <CourseUnderReviewBanner
          title="CURSO 2"
          description="Descrição"
          value={0}
          requestDate="00/00/0000"
          rejected
        />
      </Section>
      <Section title="MEUS CURSOS" contentDirection="row" wrap="wrap">
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
      <Section title="CURSOS INATIVOS" contentDirection="row" wrap="wrap">
        <CourseBanner
          title="CURSO 2"
          description="Descrição"
          teacher="Nome do professor"
          value={0}
          subscribersNumber="152"
          inactive
        />
      </Section>
    </DashboardTemplate>
  );
}

export default TeacherDasboard;
