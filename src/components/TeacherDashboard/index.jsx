import React, { useState, useEffect, useCallback, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { useUser } from '../../providers/UserProvider';
import { TeacherContext } from '../../providers/TeacherProvider';
import CourseUnderReviewBanner from '../CourseUnderReviewBanner';
import CourseBanner from '../CourseBanner';
import Container from '../Container';
import Loader from '../Loader';
import Section from '../Section';
import ButtonIcon from '../ButtonIcon';
import addWhiteIcon from '../../assets/icons/add-white.svg';
import { api } from '../../services/api';
import * as S from './styles';

function TeacherDashboard() {
  const { user } = useUser();
  const { handleSetEditStatus, cancelEditCourse } = useContext(TeacherContext);
  const history = useHistory();
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [coursesError, setCoursesError] = useState(false);

  const [activeCourses, setActiveCourses] = useState([]);
  const [inactiveCourses, setInactiveCourses] = useState([]);
  const [inReviewOrRejectedCourses, setInReviewOrRejectedCourses] = useState(
    [],
  );

  const getCourses = useCallback(async () => {
    try {
      setLoading(true);

      const response = await api.get('/courses/logged-teacher');

      if (response.status !== 200) {
        setLoading(false);
        setCoursesError(true);
        return;
      }

      setLoading(false);
      setCoursesError(false);

      const coursesData = await response.data;
      setCourses(coursesData);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setCoursesError(true);
    }
  }, []);

  useEffect(() => {
    getCourses();
    setCourses([]);
  }, [getCourses]);

  useEffect(() => {
    const actives = courses.filter(course => {
      return course.status === 'aprovado';
    });

    const inactives = courses.filter(course => {
      return course.status === 'inativo';
    });

    const inReviewOrRejected = courses.filter(course => {
      return course.status === 'em análise' || course.status === 'rejeitado';
    });

    setActiveCourses(actives);
    setInactiveCourses(inactives);
    setInReviewOrRejectedCourses(inReviewOrRejected);
  }, [courses]);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        width="90%"
        margin="50px 0 35px 0"
      >
        <S.Text size="20px" weight="normal" color="primary">
          {`Bem vindo, ${user[0].name}!`}
        </S.Text>
        <ButtonIcon
          icon={addWhiteIcon}
          onClick={() => {
            handleSetEditStatus(0);
            cancelEditCourse();
            history.push('/dashboard/teacher/edit-course');
          }}
        >
          Novo curso
        </ButtonIcon>
      </Container>
      <Section title="CURSOS EM ESPERA" contentDirection="column">
        {inReviewOrRejectedCourses.map((course, i) => {
          return course.status === 'em análise' ||
            course.status === 'rejeitado' ? (
            <CourseUnderReviewBanner
              id={course.id}
              title={course.name}
              key={i}
              description={course.description}
              value={course.value}
              requestDate={course.create_date}
              inReview={course.status === 'em análise'}
              rejected={course.status === 'rejeitado'}
            />
          ) : (
            <></>
          );
        })}
        <S.Text>
          {!loading && !coursesError && inReviewOrRejectedCourses.length === 0
            ? 'Não há curso com análise em espera.'
            : ''}
        </S.Text>
        <S.Return>{loading ? 'Aguarde...' : ''}</S.Return>
        <S.ErrorReturn>
          {coursesError ? 'Erro na requisição dos cursos!' : ''}
        </S.ErrorReturn>
      </Section>
      <Section title="MEUS CURSOS" contentDirection="row" wrap="wrap">
        {activeCourses.map((course, i) => {
          return course.status === 'aprovado' ? (
            <CourseBanner
              id={course.course_id}
              title={course.name}
              description={course.description}
              teacher={user[0].name}
              value={course.value}
              key={i}
              subscribersNumber={course.enrolleds}
            />
          ) : (
            <></>
          );
        })}
        <S.Text>
          {!loading && !coursesError && activeCourses.length === 0
            ? 'Não há curso ativo.'
            : ''}
        </S.Text>
        <S.Return>{loading ? 'Aguarde...' : ''}</S.Return>
        <S.ErrorReturn>
          {coursesError ? 'Erro na requisição dos cursos!' : ''}
        </S.ErrorReturn>
      </Section>
      <Section title="CURSOS INATIVOS" contentDirection="row" wrap="wrap">
        {inactiveCourses.map((course, i) => {
          return course.status === 'inativo' ? (
            <CourseBanner
              id={course.id}
              title={course.name}
              description={course.description}
              teacher={user[0].name}
              value={course.value}
              key={i}
              subscribersNumber={course.subscribes_number}
              inactive
            />
          ) : (
            <></>
          );
        })}
        <S.Text>
          {!loading && !coursesError && inactiveCourses.length === 0
            ? 'Não há curso inativo.'
            : ''}
        </S.Text>
        <S.Return>{loading ? 'Aguarde...' : ''}</S.Return>
        <S.ErrorReturn>
          {coursesError ? 'Erro na requisição dos cursos!' : ''}
        </S.ErrorReturn>
      </Section>
    </>
  );
}

export default TeacherDashboard;
