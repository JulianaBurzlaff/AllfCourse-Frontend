import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { TextField } from '@material-ui/core';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import * as S from './styles';

const schema = yup.object().shape({
  token: yup
    .string()
    .required('Código obrigatório')
    .min(40, 'Código informado inválido')
    .max(40, 'Código informado inválido'),
});

function PassCode({ onSuccess, setToken, loading, setLoading }) {
  const history = useHistory();
  const [recoveryError, setRecoveryError] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const codeCheck = async ({ token }) => {
    setRecoveryError(false);
    setLoading(true);
    const response = await fetch('http://localhost:3001/checkpasstoken', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token }),
    });
    if (response.status !== 201) {
      setLoading(false);
      setRecoveryError(true);
      setTimeout(() => {
        setRecoveryError(false);
      }, 2500);
      return false;
    }
    setToken(token);
    setLoading(false);
    onSuccess();
    return true;
  };

  return (
    <>
      <S.Title>Esqueceu a senha?</S.Title>
      <S.Text>
        Digite abaixo o código recebido por e-mail ou SMS para que possamos
        continuar.
      </S.Text>
      <S.Form onSubmit={handleSubmit(codeCheck)}>
        <TextField
          id="token"
          variant="outlined"
          fullWidth="true"
          placeholder="código"
          margin="normal"
          {...register('token')}
          helperText={errors.token?.message}
          error={errors.token}
          inputProps={{
            style: { textAlign: 'center' },
          }}
        />
        <S.LinkButton>Não recebeu o código? Enviar novamente</S.LinkButton>
        <S.SubmitButton loading={loading} fullWidth="true" type="submit">
          Continuar
        </S.SubmitButton>
        <S.LinkButton onClick={() => history.push('/')}> Voltar </S.LinkButton>
        <S.Return>{loading ? 'Aguarde...' : ''}</S.Return>
        <S.ErrorReturn>
          {recoveryError ? 'O código informado não é válido' : ''}
        </S.ErrorReturn>
      </S.Form>
    </>
  );
}

export default PassCode;
