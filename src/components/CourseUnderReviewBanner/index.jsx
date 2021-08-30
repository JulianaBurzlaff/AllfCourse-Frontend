import React from 'react';
import * as S from './styles';

function CourseUnderReviewBanner() {
  return (
    <S.BannerContainer>
      <S.CouseDescription>
        <h3>CURSO 1</h3>
        <p>Descrição</p>
      </S.CouseDescription>
      <S.CouseAnalysis>
        <S.Container>
          <h3>Valor</h3>
          <p>R$ 100,00</p>
        </S.Container>
        <S.Container>
          <h3>Data do pedido</h3>
          <p>00/00/0000</p>
        </S.Container>
        <S.Container inReview>
          <h3>Status</h3>
          <p>Em análise</p>
        </S.Container>
      </S.CouseAnalysis>
    </S.BannerContainer>
  );
}

export default CourseUnderReviewBanner;
