import React from 'react';
// import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import * as S from './styles';

function Header({ color = 'primary', width, height, logo, avatar }) {
  return (
    <S.Header width={width} height={height} color={color}>
      <S.Logo src={logo} alt="alt" />
      <S.Avatar>
        <Avatar src={avatar} alt="avatar" />
      </S.Avatar>
    </S.Header>
  );
}

export default Header;
