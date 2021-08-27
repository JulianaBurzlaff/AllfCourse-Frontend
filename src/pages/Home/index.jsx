import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import IconButton from '@material-ui/core/IconButton';
import { TextField, InputAdornment } from '@material-ui/core';
import { useUser } from '../../providers/UserProvider';
import AuthTemplate from '../../components/AuthTemplate';
import Button from '../../components/Button';
import * as S from './styles';

const schema = yup.object().shape({
  email: yup.string().email('Email inválido').required('E-mail obrigatório'),
  password: yup.string().required('Senha obrigatória').min(6),
});

function Home() {
  const { login } = useUser();
  const history = useHistory();
  const [, setLoading] = useState(false);
  const [, setUserError] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const signIn = async ({ email, password }) => {
    try {
      setUserError(false);
      setLoading(true);
      const data = await fetch('http://localhost:3001/login', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Basic ${btoa(`${email}:${password}`)}`,
        },
      });

      if (data.status !== 200) {
        setLoading(false);
        setUserError(true);
        setTimeout(() => {
          setUserError(false);
        }, 2500);
        return;
      }

      const userData = await data.json();
      login(userData);
      setLoading(false);
    } catch (error) {
      console.log('error:', error);
    }
  };

  function forgotPass() {
    history.push('/password');
  }

  return (
    <AuthTemplate subtitle="Sua plataforma de cursos online">
      <S.LoginName>Login</S.LoginName>
      <S.Form onSubmit={handleSubmit(signIn)}>
        <TextField
          id="input-with-icon-adornment"
          variant="outlined"
          placeholder="e-mail"
          margin="normal"
          {...register('email')}
          helperText={errors.email?.message}
          InputProps={{
            startAdornment: (
              <InputAdornment>
                <IconButton>
                  <MailOutlineIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <TextField
          type="password"
          id="input-with-icon-adornment"
          variant="outlined"
          placeholder="senha"
          margin="normal"
          {...register('password')}
          helperText={errors.password?.message}
          InputProps={{
            startAdornment: (
              <InputAdornment>
                <IconButton>
                  <LockOutlinedIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <S.LinkButton onClick={forgotPass}>Esqueceu sua senha?</S.LinkButton>
        <Button width="200px" type="submit">
          Entrar
        </Button>
        <S.LinkButton>Crie sua conta</S.LinkButton>
      </S.Form>
    </AuthTemplate>
  );
}

export default Home;
