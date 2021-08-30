import React from 'react';
import Header from '../Header';
import Container from '../Container';
import logo from '../../assets/logo.svg';
import avatar from '../../assets/avatar.svg';

function DashboardTemplate({ children }) {
  return (
    <Container
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
      width="100vw"
    >
      <Header width="80px" height="100vh" logo={logo} avatar={avatar} />
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
