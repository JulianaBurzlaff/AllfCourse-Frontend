import React from 'react';

import LinearProgress from '@material-ui/core/LinearProgress';
import * as S from './styles';

function ProgressBar({ progress }) {
  return (
    <S.Container>
      <S.PGBar>
        <LinearProgress
          variant="determinate"
          value={progress}
          color="primary"
        />
      </S.PGBar>
      <S.Value>{progress}%</S.Value>
    </S.Container>
  );
}

export default ProgressBar;
