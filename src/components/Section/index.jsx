import React from 'react';
import * as S from './styles';
import Container from '../Container';

function Section({ children, title, contentDirection, wrap }) {
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
        direction={contentDirection}
        justifyContent="flex-satart"
        alignItems="center"
        wrap={wrap}
        width="85%"
      >
        {children}
      </Container>
    </Container>
  );
}

export default Section;
