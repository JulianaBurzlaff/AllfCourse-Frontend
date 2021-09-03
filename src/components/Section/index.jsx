import React from 'react';
import * as S from './styles';
import Container from '../Container';

function Section({
  children,
  title,
  contentDirection,
  wrap,
  alignItems = 'center',
}) {
  return (
    <Container
      direction="column"
      justifyContent="flex-start"
      alignItems={alignItems}
      width="100%"
      margin="0 0 10px 0"
    >
      <S.SectionTitle>
        <S.Text fontSize="16px" weight="600" color="secondary">
          {title}
        </S.Text>
      </S.SectionTitle>
      <Container
        direction={contentDirection}
        justifyContent="center"
        alignItems="center"
        wrap={wrap}
        width="85%"
        margin="0 0 10px 0"
      >
        {children}
      </Container>
    </Container>
  );
}

export default Section;
