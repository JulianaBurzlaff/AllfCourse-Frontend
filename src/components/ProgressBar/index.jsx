import React from 'react';

import * as S from './styles';

function ProgressBar({ progress, heightpb, fontSize = '12px' }) {
  return (
    <S.Container>
      <S.PGBar>
        <S.ProgressBar
          variant="determinate"
          value={progress}
          color="primary"
          heightpb={heightpb}
        />
      </S.PGBar>
      <S.Value fontSize={fontSize}>{progress}%</S.Value>
    </S.Container>
  );
}

export default ProgressBar;
