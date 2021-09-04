/* eslint-disable camelcase */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useUser } from '../../providers/UserProvider';
import { useCourse } from '../../providers/CourseProvider';
import { useStudent } from '../../providers/StudentProvider';
import CourseHeader from '../CourseHeader';
import Container from '../Container';
import Loader from '../Loader';
import Section from '../Section';
import ModulesAccordion from '../ModulesAccordion';
import image from '../../assets/logo.svg';

import * as S from './styles';

function CourseDetail() {
  const [loading, setLoading] = useState(true);
  const { enrollStudent } = useStudent();
  const { id } = useParams();
  const { user } = useUser();
  const { fetchChosenCourse, chosenCourse = [] } = useCourse();
  const history = useHistory();

  const enrollUser = async courseid => {
    const studentId = user[0].id.toString();
    const courseId = courseid.toString();
    try {
      await enrollStudent({
        studentId,
        courseId,
      });

      history.push('/dashboard/student');
    } catch (error) {
      //
    }
  };

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
        <S.SubmitButton
          width="200px"
          onClick={() => enrollUser(chosenCourse.course_id)}
        >
          Matricular-se
        </S.SubmitButton>
        <Section title="CONTEÚDO" contentDirection="column" alignItems="left" />
        <S.Content>
          {chosenCourse.modules.map((mod, i) => (
            <ModulesAccordion courseModule={mod} key={i} />
          ))}
        </S.Content>
        <S.SubmitButton
          width="200px"
          onClick={() => enrollUser(chosenCourse.course_id)}
        >
          Matricular-se
        </S.SubmitButton>
      </Container>
    </>
  );
}

export default CourseDetail;
