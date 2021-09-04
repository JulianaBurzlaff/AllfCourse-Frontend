import React from 'react';
// import Grid from '@material-ui/core/Grid';
import * as S from './styles';
import logo from '../../assets/logo2.svg';

function AuthLayout({ children, sizeLeft = 6, subtitle }) {
  return (
    <S.Container>
      <S.LeftGrid
        container
        item
        sm={sizeLeft}
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <S.Logo src={logo} alt="AllfCourse Logo" />
        {subtitle && <S.Subtitle>{subtitle}</S.Subtitle>}
      </S.LeftGrid>
      <S.RightGrid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        item
        sm={12 - sizeLeft}
      >
        {children}
      </S.RightGrid>
    </S.Container>
  );
}

export default AuthLayout;
