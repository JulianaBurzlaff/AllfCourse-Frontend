import React, { useContext } from 'react';
import { TeacherContext } from '../../providers/TeacherProvider';
import Container from '../Container';
import Banner from '../../assets/logo.svg';
import * as S from './styles';

function CourseHeaderData() {
  const { modulesNumber, courseHeader, courseCategories } =
    useContext(TeacherContext);

  return (
    <Container
      direction="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      width="90%"
      margin="50px 0 35px 0"
    >
      <Container
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        width="100%"
        margin="0 0 50px 0"
      >
        <Container
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          width="63%"
        >
          <Container
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            width="100%"
          >
            <S.Text>{courseHeader.courseName}</S.Text>
            <S.Text>{courseHeader.description}</S.Text>
          </Container>
          <Container
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
            width="100%"
            margin="10px 0 0 0"
          >
            <Container
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"
              width="30%"
            >
              <Container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                width="100%"
              >
                <S.Text fontSize="14px" weight="500" margin="0 10px 0 0">
                  Número de módulos:
                </S.Text>
                <S.Text>{modulesNumber}</S.Text>
              </Container>
              <Container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                width="100%"
              >
                <S.Text fontSize="14px" weight="500" margin="0 10px 0 0">
                  Valor:
                </S.Text>
                <S.Text>GRATUITO</S.Text>
              </Container>
            </Container>
            <Container
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"
              width="70%"
            >
              <S.Text fontSize="14px" weight="500" margin="2.5px 0 6px 0">
                Categorias:
              </S.Text>
              <Container
                direction="row"
                justifyContent="flex-start"
                alignItems="flex-start"
                width="100%"
                wrap="wrap"
                margin="0 0 20px 0"
              >
                {courseCategories.map(category => {
                  return <S.Flag key={Math.random()}>{category}</S.Flag>;
                })}
              </Container>
            </Container>
          </Container>
        </Container>
        <Container
          direction="column"
          justifyContent="center"
          alignItems="center"
          width="37%"
          height="200px"
          overflowX="hidden"
          overflowY="hidden"
        >
          <S.Image src={Banner} alt="banner" />
        </Container>
      </Container>
    </Container>
  );
}

export default CourseHeaderData;
