import React from 'react';
import Header from '../Header';
import Container from '../Container';
import logoIcon from '../../assets/logo-icon.svg';
import { useUser } from '../../providers/UserProvider';

function DashboardTemplate({ children }) {
  const { photo } = useUser();

  const avatar = photo;
  return (
    <Container
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
      width="100vw"
    >
      <Header width="80px" height="100vh" logo={logoIcon} avatar={avatar} />
      <Container
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
        width="calc(100vw - 80px)"
        margin="0 0 0 80px"
      >
        {children}
      </Container>
    </Container>
  );
}

export default DashboardTemplate;
