import React from 'react';

import AuthTemplate from '../../components/AuthTemplate';
import ForgotPasswd from '../../components/ForgotPasswd';
// import * as S from './styles';

function Password() {
  return (
    <AuthTemplate sizeLeft={4}>
      <ForgotPasswd />
    </AuthTemplate>
  );
}

export default Password;
