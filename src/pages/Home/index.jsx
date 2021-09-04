import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { TextField, InputAdornment } from '@material-ui/core';
import jwt from 'jsonwebtoken';
import { useUser } from '../../providers/UserProvider';
import AuthTemplate from '../../components/AuthTemplate';
import Button from '../../components/Button';
import * as S from './styles';

const schema = yup.object().shape({
  email: yup.string().email('Email inválido').required('E-mail obrigatório'),
  password: yup
    .string()
    .required('Senha obrigatória')
    .min(6, 'Senha deve conter ao menos 6 digitos'),
});

function Home() {
  const { cookies, login, signIn, loading, userError } = useUser();
  const history = useHistory();
  const [passwordError, setPasswordError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  useEffect(() => {
    (async () => {
      if (cookies.length > 0) {
        console.log(cookies);
        if (cookies.auth) {
          const userData = await jwt.decode(cookies.auth);
          login(userData);
        }
      }
    })();
  }, [cookies, login]);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (errors) {
      if (errors.email || errors.email?.message) {
        setEmailError(true);
      } else {
        setEmailError(false);
      }
      if (errors.password || errors.password?.message) {
        setPasswordError(true);
      } else {
        setPasswordError(false);
      }
    }
  }, [
    setEmailError,
    setPasswordError,
    errors,
    errors.password?.message,
    errors.email?.message,
  ]);

  return (
    <AuthTemplate subtitle="Sua plataforma de cursos online">
      <S.LoginName>Login</S.LoginName>
      <S.Form>
        <TextField
          id="input-with-icon-adornment"
          variant="outlined"
          fullWidth
          placeholder="e-mail"
          margin="normal"
          {...register('email')}
          helperText={errors.email?.message}
          error={emailError}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <MailOutlineIcon color="disabled" />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          type="password"
          id="input-with-icon-adornment-two"
          variant="outlined"
          fullWidth
          placeholder="senha"
          margin="normal"
          {...register('password')}
          onKeyPress={e => {
            if (e.key === 'Enter') {
              handleSubmit(signIn)();
            }
          }}
          helperText={errors.password?.message}
          error={passwordError}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockOutlinedIcon color="disabled" />
              </InputAdornment>
            ),
          }}
        />
        <S.LinkButton onClick={() => history.push('/password')}>
          Esqueceu sua senha?
        </S.LinkButton>
        <Button onClick={handleSubmit(signIn)} loading={loading} fullWidth>
          Entrar
        </Button>
        <S.LinkButton onClick={() => history.push('/register')}>
          Crie sua conta
        </S.LinkButton>
      </S.Form>
      <S.Return>{loading}</S.Return>
      <S.ErrorReturn>{userError}</S.ErrorReturn>
    </AuthTemplate>
  );
}

export default Home;
