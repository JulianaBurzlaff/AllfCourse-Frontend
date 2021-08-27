import React from 'react';
import Grid from '@material-ui/core/Grid';
import * as S from './styles';
import logo from '../../assets/logo.svg';

function AuthLayout({ children, sizeLeft = 6, subtitle }) {
  return (
    <Grid container>
      <S.LeftGrid
        container
        item
        sm={sizeLeft}
        direction="column"
        alignContent="center"
        alignItems="center"
      >
        <S.Logo src={logo} alt="AllfCourse Logo" />
        {subtitle && <S.Phrase>{subtitle}</S.Phrase>}
      </S.LeftGrid>
      <S.RightGrid
        container
        direction="column"
        alignContent="center"
        alignItems="center"
        item
        sm={12 - sizeLeft}
      >
        {children}
      </S.RightGrid>
    </Grid>
  );
}

export default AuthLayout;
