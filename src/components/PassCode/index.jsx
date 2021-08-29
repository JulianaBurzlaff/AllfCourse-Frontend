import React from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { TextField } from '@material-ui/core';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import * as S from './styles';

const schema = yup.object().shape({
  code: yup.string().required('Código obrigatório'),
});

function PassCode({ onSuccess }) {
  const history = useHistory();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const codeCheck = async ({ code }) => {
    console.log(code);
    onSuccess();
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
          id="code"
          variant="outlined"
          fullWidth="true"
          placeholder="código"
          margin="normal"
          {...register('code')}
          helperText={errors.code?.message}
          error={errors.code}
          inputProps={{
            style: { textAlign: 'center' },
          }}
        />
        <S.LinkButton>Não recebeu o código? Enviar novamente</S.LinkButton>
        <S.SubmitButton fullWidth="true" type="submit">
          Continuar
        </S.SubmitButton>
        <S.LinkButton onClick={() => history.push('/')}> Voltar </S.LinkButton>
      </S.Form>
    </>
  );
}

export default PassCode;
