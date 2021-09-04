import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import InputMask from 'react-input-mask';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneIcon from '@material-ui/icons/Phone';
import { TextField, InputAdornment } from '@material-ui/core';
import { api } from '../../services/api';

import * as S from './styles';

const method = { email: undefined, phone: undefined };

const schema = yup.object().shape({
  email: yup
    .string()
    .email('Email inválido')
    .test('verify-email', 'Escolha um único método de verificação', val => {
      method.email = val;
      if ((method.phone && method.email) || (!method.phone && !method.email)) {
        return false;
      }
      return true;
    }),
  phone: yup
    .string()
    .test('phone-validation', 'Telefone inválido', val => {
      return !/[^0-9()\s']/.exec(val) && !/[0-9]{11}/.exec(val);
    })
    .test('verify-phone', 'Escolha um único método de verificação', val => {
      method.phone = val;
      if ((method.phone && method.email) || (!method.phone && !method.email)) {
        return false;
      }
      return true;
    }),
});

function ForgotPasswd({ onSuccess, loading, setLoading }) {
  const history = useHistory();
  const [recoveryError, setrecoveryError] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const codeSend = async ({ email, phone }) => {
    if (email) {
      setLoading(true);
      const response = await api.post('requestpass-email', { email });

      if (response.status !== 201) {
        setrecoveryError(true);
      }
    }

    if (phone) {
      setLoading(true);
      const response = await api.post('requestpass-sms', {
        phone: phone.replace(/[^0-9]+/g, ''),
      });

      if (response.status !== 201) {
        setrecoveryError(true);
      }
    }
    setLoading(false);
    onSuccess();
  };

  return (
    <>
      <S.Title>Esqueceu a senha?</S.Title>
      <S.Text>
        Informe o seu e-mail ou telefone para que possamos te ajudar a
        recuperá-la.
      </S.Text>
      <S.Form onSubmit={handleSubmit(codeSend)}>
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
        <S.Separation>
          <S.SeparationText component="span">ou</S.SeparationText>
        </S.Separation>
        <InputMask
          mask="(99)99999 9999"
          {...register('phone')}
          disabled={false}
          maskChar=" "
        >
          {() => (
            <TextField
              type="telefone"
              id="input-with-icon-adornment"
              variant="outlined"
              placeholder="telefone"
              fullWidth="true"
              margin="normal"
              {...register('phone')}
              helperText={errors.phone?.message}
              error={errors.phone}
              InputProps={{
                startAdornment: (
                  <InputAdornment>
                    <PhoneIcon color="disabled" />
                  </InputAdornment>
                ),
              }}
            />
          )}
        </InputMask>
        <S.SubmitButton loading={loading} fullWidth="true" type="submit">
          Recuperar senha
        </S.SubmitButton>
        <S.LinkButton onClick={() => history.push('/')}> Voltar </S.LinkButton>
        <S.Return>
          {loading ? 'Aguarde...' : ''}
          {recoveryError ? 'Email or password not found' : ''}
        </S.Return>
      </S.Form>
    </>
  );
}

export default ForgotPasswd;
