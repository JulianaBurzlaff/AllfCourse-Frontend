import React from 'react';
import Container from '../Container';
import * as S from './styles';

function CourseClassContentData({ classData }) {
  return (
    <>
      <S.Class>
        <S.ClassInfo>AULA {classData.order}</S.ClassInfo>
        <Container
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          width="100%"
        >
          <S.Title fontSize="14px" weight="500">
            {classData.name}
          </S.Title>
          <S.Text fontSize="14px" color="primary" margin="10px 0 0 20px">
            {classData.description}
          </S.Text>
          <S.Text
            fontSize="14px"
            color="primary"
            weight="600"
            margin="10px 0 0 20px"
          >
            URL:
            <S.Span
              fontSize="14px"
              color="primary"
              weight="400"
              margin="0 0 0 10px"
            >
              {classData.link}
            </S.Span>
          </S.Text>
        </Container>
      </S.Class>
    </>
  );
}

export default CourseClassContentData;
