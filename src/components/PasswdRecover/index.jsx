import React from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { TextField, InputAdornment } from '@material-ui/core';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import * as S from './styles';

const schema = yup.object().shape({
  password: yup
    .string()
    .required('Senha obrigatória')
    .min(6, 'Tamanho mínimo de 6 caracteres'),
  confirmPassword: yup
    .string()
    .required('Confirmação de senha obrigatória.')
    .oneOf([yup.ref('password'), null], 'As senhas não conferem.')
    .min(6, 'Tamanho mínimo de 6 caracteres'),
});

function PasswdRecover({ onSuccess }) {
  const history = useHistory();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const passwordChange = async ({ password, confirmPassword }) => {
    console.log(password);
    console.log(confirmPassword);
    onSuccess();
  };

  return (
    <>
      <S.Title>Recuperação de senha</S.Title>
      <S.Text>Insira abaixo a sua nova senha.</S.Text>
      <S.Form onSubmit={handleSubmit(passwordChange)}>
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
        <TextField
          type="password"
          id="input-with-icon-adornment"
          variant="outlined"
          fullWidth="true"
          placeholder="confirmação de senha"
          margin="normal"
          {...register('confirmPassword')}
          helperText={errors.confirmPassword?.message}
          error={errors.confirmPassword}
          InputProps={{
            startAdornment: (
              <InputAdornment>
                <LockOutlinedIcon color="disabled" />
              </InputAdornment>
            ),
          }}
        />

        <S.SubmitButton fullWidth="true" type="submit">
          Confirmar
        </S.SubmitButton>
        <S.LinkButton onClick={() => history.push('/')}> Voltar </S.LinkButton>
      </S.Form>
    </>
  );
}

export default PasswdRecover;
