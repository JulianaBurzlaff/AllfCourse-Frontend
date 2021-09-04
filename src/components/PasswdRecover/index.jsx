import React, { useState } from 'react';
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

function PasswdRecover({ onSuccess, token, loading, setLoading }) {
  const history = useHistory();
  const [success, setMessage] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const passwordChange = async ({ password, confirmPassword }) => {
    setLoading(true);
    const response = await fetch('http://localhost:3001/resetpass', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token, password, confirmPassword }),
    });
    if (response.status !== 201) {
      setLoading(false);
      return false;
    }
    setLoading(false);
    setMessage(true);
    setTimeout(() => {
      setMessage(false);
      onSuccess();
    }, 2500);
    return true;
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
          id="input-with-icon-adornment-two"
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

        <S.SubmitButton loading={loading} fullWidth="true" type="submit">
          Confirmar
        </S.SubmitButton>
        <S.LinkButton onClick={() => history.push('/')}> Voltar </S.LinkButton>
        <S.Return>
          {loading ? 'Aguarde...' : ''}
          {success ? 'Senha alterada com sucesso' : ''}
        </S.Return>
      </S.Form>
    </>
  );
}

export default PasswdRecover;
