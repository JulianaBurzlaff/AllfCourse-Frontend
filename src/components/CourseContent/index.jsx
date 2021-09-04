/* eslint-disable camelcase */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCourse } from '../../providers/CourseProvider';
import CourseHeader from '../CourseHeader';
import Container from '../Container';
import Loader from '../Loader';
import Section from '../Section';
import ModulesAccordion from '../ModulesAccordion';
import image from '../../assets/logo.svg';

import * as S from './styles';

function CourseContent() {
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const { fetchChosenCourse, chosenCourse = {} } = useCourse();

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
          progress={0}
          enrolled
          heightPB="10px"
          fontSize="16px"
        />

        <Section title="CONTEÚDO" contentDirection="column" alignItems="left" />
        <S.Content>
          {chosenCourse?.modules?.map((mod, i) => (
            <ModulesAccordion
              courseModule={mod}
              key={i}
              courseId={chosenCourse.course_id}
              canClick
            />
          ))}
        </S.Content>
      </Container>
    </>
  );
}

export default CourseContent;
