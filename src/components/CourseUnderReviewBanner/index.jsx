import React from 'react';
import * as S from './styles';

function CourseUnderReviewBanner({
  title,
  description,
  value,
  requestDate,
  inReview = false,
  rejected = false,
}) {
  return (
    <S.BannerContainer>
      <S.CouseDescription>
        <h3>{title}</h3>
        <p>{description}</p>
      </S.CouseDescription>
      <S.CouseAnalysis>
        <S.Container>
          <h3>Valor</h3>
          <p>{parseInt(value, 10) ? `R$ ${value}` : 'GRATUITO'}</p>
        </S.Container>
        <S.Container>
          <h3>Data do pedido</h3>
          <p>{requestDate}</p>
        </S.Container>
        <S.Container inReview={inReview} rejected={rejected}>
          <h3>Status</h3>
          <p>
            {inReview ? 'Em análise' : null}
            {rejected ? 'Rejeitado' : null}
          </p>
        </S.Container>
      </S.CouseAnalysis>
    </S.BannerContainer>
  );
}

export default CourseUnderReviewBanner;
