import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useUser } from '../../providers/UserProvider';
import { useCourse } from '../../providers/CourseProvider';
import CourseBanner from '../CourseBanner';
import Container from '../Container';
import Section from '../Section';
import Loader from '../Loader';
import * as S from './styles';

function StudentDasboard() {
  const { user } = useUser();
  const history = useHistory();
  const {
    approvedCourses = [],
    fetchCourses,
    loggedStudentCourses = [],
    loading,
    setLoading,
  } = useCourse();

  useEffect(() => {
    (async () => {
      setLoading(true);

      await fetchCourses();

      setLoading(false);
    })();
  }, [fetchCourses, setLoading]);

  function onCourseBannerClick(id) {
    history.push(`/dashboard/student/course/${id}`);
  }

  function onMyCourseBannerClick(id) {
    history.push(`/dashboard/student/course/${id}/content`);
  }

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
        margin="50px 0 0 0"
      >
        <S.Text size="20px" weight="normal" color="primary">
          Bem vindo, {user[0].socialName ? user[0].socialName : user[0].name}!
        </S.Text>
      </Container>
      <Section title="CURSOS EM ANDAMENTO" contentDirection="row" wrap="wrap">
        {loggedStudentCourses.length > 0
          ? loggedStudentCourses.map((course, i) => (
              <CourseBanner
                title={course.course_name}
                description={course.course_description}
                teacher={course.teacher_name}
                value={course.value}
                key={i}
                subscribersNumber={course.total_enrolleds}
                student
                progress={course.finished ? 100 : 0}
                onClick={() => onMyCourseBannerClick(course.course_id)}
              />
            ))
          : 'Nenhum curso em andamento no momento'}
      </Section>
      <Section title="TODOS OS CURSOS" contentDirection="row" wrap="wrap">
        {approvedCourses.map((course, i) => (
          <CourseBanner
            title={course.course_name}
            description={course.course_description}
            teacher={course.teacher_name}
            value={course.value}
            key={i}
            subscribersNumber={course.total_enrolleds}
            onClick={() => onCourseBannerClick(course.course_id)}
          />
        ))}
      </Section>
    </>
  );
}

export default StudentDasboard;
