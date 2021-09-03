import React, { useEffect } from 'react';
// import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import { useUser } from '../../providers/UserProvider';
import Container from '../Container';
import HeaderIcons from '../HeaderIcons';
import * as S from './styles';

function Header({ color = 'primary', width, height, logo, avatar }) {
  const { user, photo, setPhoto, logout } = useUser();

  useEffect(() => {
    setPhoto(`http://localhost:3001/avatars/userphoto-${user[0].id}.jpg`);
  }, [user, photo, setPhoto]);

  return (
    <S.Header width={width} height={height} color={color}>
      <Container
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
        width="100%"
        margin="20px 0 0 0"
      >
        <S.Logo src={logo} alt="alt" />
        <HeaderIcons />
      </Container>
      <S.Avatar>
        <Avatar
          src={avatar}
          onClick={() => {
            logout();
          }}
        />
      </S.Avatar>
    </S.Header>
  );
}

export default Header;
