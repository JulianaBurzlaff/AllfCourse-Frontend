import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import AuthTemplate from '../../components/AuthTemplate';
import ForgotPasswd from '../../components/ForgotPasswd';
import PassCode from '../../components/PassCode';
import PasswdRecover from '../../components/PasswdRecover';

function Password() {
  const [screen, setScreen] = useState('forgot-password');
  const history = useHistory();

  const onForgotPasswordSuccess = () => {
    setScreen('code');
  };

  const onCodeSuccess = () => {
    setScreen('confirmation');
  };

  const onPasswordRecoverSuccess = () => {
    history.push('/login');
  };

  return (
    <AuthTemplate sizeLeft={4}>
      {screen === 'forgot-password' && (
        <ForgotPasswd onSuccess={onForgotPasswordSuccess} />
      )}
      {screen === 'code' && <PassCode onSuccess={onCodeSuccess} />}
      {screen === 'confirmation' && (
        <PasswdRecover onSuccess={onPasswordRecoverSuccess} />
      )}
    </AuthTemplate>
  );
}

export default Password;
