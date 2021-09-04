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
  heightPB,
  fontSize,
}) {
  return (
    <S.Container>
      <S.Infos>
        <S.Title>{title}</S.Title>
        <S.Teacher>Professor(a) {teacher}</S.Teacher>
        <S.Description>{description}</S.Description>
        <S.ValuesContainer>
          <S.Values>
            <h3>
              <span>Valor:</span>
              {parseInt(value, 10) ? `R$ ${value}` : 'GRATUITO'}
            </h3>
            <p>{`${subscribersNumber} inscritos`}</p>
          </S.Values>
          <S.Categories>
            <S.CategoryTitle>Categorias:</S.CategoryTitle>
            <S.CategoriesTags>
              {categories.map((category, i) => (
                <S.Category key={i}>{category.name}</S.Category>
              ))}
            </S.CategoriesTags>
          </S.Categories>
        </S.ValuesContainer>

        <S.Progress>
          {enrolled && (
            <ProgressBar
              progress={progress}
              heightPB={heightPB}
              fontSize={fontSize}
            />
          )}
        </S.Progress>
      </S.Infos>
      <S.Image src={image} />
    </S.Container>
  );
}

export default CourseHeader;
