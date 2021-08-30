import React from 'react';
import * as S from './styles';
import Container from '../Container';

function Section({ children, title }) {
  return (
    <Container
      direction="column"
      justifyContent="flex-start"
      alignItems="center"
      width="100%"
      margin="0 0 50px 0"
    >
      <S.SectionTitle>
        <S.Text fontSize="16px" weight="600" color="secondary">
          {title}
        </S.Text>
      </S.SectionTitle>
      <Container
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
        width="95%"
      >
        {children}
      </Container>
    </Container>
  );
}

export default Section;
