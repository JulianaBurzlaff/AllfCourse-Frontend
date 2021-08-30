import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
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
      const response = await fetch('http://localhost:3001/login', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Basic ${btoa(`${email}:${password}`)}`,
        },
      });

      if (response.status !== 200) {
        setLoading(false);
        setUserError(true);
        setTimeout(() => {
          setUserError(false);
        }, 2500);
        return;
      }

      const userData = await response.json();
      login(userData);
      setLoading(false);
    } catch (error) {
      console.log('error:', error);
    }
  };

  return (
    <AuthTemplate subtitle="Sua plataforma de cursos online">
      <S.LoginName>Login</S.LoginName>
      <S.Form onSubmit={handleSubmit(signIn)}>
        <TextField
          id="input-with-icon-adornment"
          variant="outlined"
          fullWidth="true"
          placeholder="e-mail"
          margin="normal"
          {...register('email')}
          helperText={errors.email?.message}
          error={errors.email}
          InputProps={{
            startAdornment: (
              <InputAdornment>
                <MailOutlineIcon color="disabled" />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          type="password"
          id="input-with-icon-adornment"
          variant="outlined"
          fullWidth="true"
          placeholder="senha"
          margin="normal"
          {...register('password')}
          helperText={errors.password?.message}
          error={errors.password}
          InputProps={{
            startAdornment: (
              <InputAdornment>
                <LockOutlinedIcon color="disabled" />
              </InputAdornment>
            ),
          }}
        />
        <S.LinkButton onClick={() => history.push('/password')}>
          Esqueceu sua senha?
        </S.LinkButton>
        <Button fullWidth="true" type="submit">
          Entrar
        </Button>
        <S.LinkButton onClick={() => history.push('/register')}>
          Crie sua conta
        </S.LinkButton>
      </S.Form>
    </AuthTemplate>
  );
}

export default Home;
