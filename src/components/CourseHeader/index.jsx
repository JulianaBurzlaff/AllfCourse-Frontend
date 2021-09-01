import React from 'react';
import ProgressBar from '../ProgressBar';
import * as S from './styles';

function CourseHeader({
  title,
  description,
  teacher,
  value,
  subscribersNumber,
  categories = [],
  image,
  progress,
  enrolled,
}) {
  return (
    <S.Container>
      <S.Infos>
        <S.Title>{title}</S.Title>
        <S.Teacher>Professor {teacher}</S.Teacher>
        <S.Description>{description}</S.Description>
        <S.ValuesContainer>
          <S.Values>
            <p>{parseInt(value, 10) ? `R$ ${value}` : 'GRATUITO'}</p>
            <p>{`${subscribersNumber} inscritos`}</p>
          </S.Values>
          <S.Categories>
            <S.CategoryTitle>Categorias:</S.CategoryTitle>
            {categories.map(category => (
              <S.Category>{category.name}</S.Category>
            ))}
          </S.Categories>
        </S.ValuesContainer>

        <S.Progress>
          {enrolled && <ProgressBar progress={progress} />}
        </S.Progress>
      </S.Infos>
      <S.Image src={image} />
    </S.Container>
  );
}

export default CourseHeader;
