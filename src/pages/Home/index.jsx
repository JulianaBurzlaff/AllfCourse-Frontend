import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Grid from '@material-ui/core/Grid';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import IconButton from '@material-ui/core/IconButton';
import { TextField, InputAdornment } from '@material-ui/core';
import { useAuth } from '../../hooks/useAuth';
import logo from '../../assets/logo.svg';
import Button from '../../components/Button';
import * as S from './styles';

const schema = yup.object().shape({
  email: yup.string().email('Email inválido').required('E-mail obrigatório'),
  password: yup.string().required('Senha obrigatória').min(6),
});

function Home() {
  const { login } = useAuth();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async ({ email, password }) => {
    try {
      await login({ email, password });
    } catch (error) {
      //
    }
  };

  return (
    <Grid container>
      <S.LeftGrid
        container
        item
        sm={6}
        direction="column"
        alignContent="center"
        alignItems="center"
      >
        <S.Logo src={logo} alt="AllfCourse Logo" />
        <S.Phrase>Sua plataforma de cursos online</S.Phrase>
      </S.LeftGrid>
      <S.RightGrid
        container
        direction="column"
        alignContent="center"
        alignItems="center"
        item
        sm={6}
      >
        <S.LoginName>Login</S.LoginName>
        <S.Form onSubmit={handleSubmit(onSubmit)}>
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
          <S.LinkButton>Esqueceu sua senha?</S.LinkButton>
          <Button width="200px" type="submit">
            Entrar
          </Button>
          <S.LinkButton>Crie sua conta</S.LinkButton>
        </S.Form>
      </S.RightGrid>
    </Grid>
  );
}

export default Home;