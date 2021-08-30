import React from 'react';
import Container from '../Container';
import * as S from './styles';

function CourseBanner({
  title,
  description,
  teacher,
  value,
  subscribersNumber,
  inactive = false,
}) {
  return (
    <S.BannerContainer>
      <S.ImageContainer />
      <Container
        direction="column"
        justifyContent="center"
        alignItems="center"
        width="100%"
      >
        <S.CourseDescription>
          <h3>{title}</h3>
          <p>{description}</p>
        </S.CourseDescription>
        <S.Container>
          <S.TeacherContainer>
            <h3>{teacher}</h3>
          </S.TeacherContainer>
          <S.ValuesContainer inactive={inactive}>
            <h3>{parseInt(value, 10) ? `R$ ${value}` : 'GRATUITO'}</h3>
            <p>{`${subscribersNumber} inscritos`}</p>
          </S.ValuesContainer>
        </S.Container>
      </Container>
    </S.BannerContainer>
  );
}

export default CourseBanner;
