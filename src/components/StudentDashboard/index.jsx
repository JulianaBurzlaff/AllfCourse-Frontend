/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
// import Grid from '@material-ui/core/Grid';
// import { useHistory } from 'react-router-dom';
import { useUser } from '../../providers/UserProvider';
import { useCourse } from '../../providers/CourseProvider';
import CourseBanner from '../CourseBanner';
import Container from '../Container';
import Section from '../Section';
import * as S from './styles';

function StudentDasboard() {
  const { user } = useUser();
  const { approvedCourses = [], fetchApprovedCourses } = useCourse();

  useEffect(() => {
    fetchApprovedCourses();
    console.log(user);
  }, []);

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
        {approvedCourses.map(course => (
          <CourseBanner
            title={course.course_name}
            description={course.course_description}
            teacher={course.teacher_name}
            value={course.value}
            subscribersNumber={course.total_enrolleds}
          />
        ))}
      </Section>
    </>
  );
}

export default StudentDasboard;
