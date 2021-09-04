import React from 'react';
import Container from '../Container';
import ProgressBar from '../ProgressBar';
import Image from '../../assets/logo.svg';
import * as S from './styles';

function CourseBanner({
  title,
  description,
  teacher,
  value,
  subscribersNumber,
  inactive = false,
  student = false,
  progress,
  onClick,
  id,
}) {
  return (
    <S.BannerContainer onClick={onClick} inactive={inactive}>
      <S.ImageContainer src={Image} />
      <Container
        direction="column"
        justifyContent="center"
        alignItems="center"
        width="100%"
        key={id}
        height="200px"
      >
        <S.CourseDescription inactive={inactive}>
          <h3>{title}</h3>
          <p>{description}</p>
        </S.CourseDescription>
        <S.Container>
          <S.TeacherContainer inactive={inactive}>
            <h3>{teacher}</h3>
          </S.TeacherContainer>
          <S.ValuesContainer inactive={inactive}>
            <h3>{parseInt(value, 10) ? `R$ ${value}` : 'GRATUITO'}</h3>
            <p>{`${subscribersNumber} inscritos`}</p>
          </S.ValuesContainer>
        </S.Container>
        <S.Progress>
          {student && <ProgressBar progress={progress} />}
        </S.Progress>
      </Container>
    </S.BannerContainer>
  );
}

export default CourseBanner;
