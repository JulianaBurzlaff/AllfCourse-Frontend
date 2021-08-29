import React from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import InputMask from 'react-input-mask';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneIcon from '@material-ui/icons/Phone';
import IconButton from '@material-ui/core/IconButton';
import { TextField, InputAdornment } from '@material-ui/core';

import * as S from './styles';

function ForgotPasswd() {
  const history = useHistory();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const signIn = async ({ email, phone }) => {
    console.log(email);
    console.log(phone);
  };

  return (
    <>
      <S.LoginName>Esqueceu a senha?</S.LoginName>
      <S.Text>
        Informe o seu e-mail ou telefone para que a gente te ajude a
        recuperá-la.
      </S.Text>
      <S.Form onSubmit={handleSubmit(signIn)}>
        <TextField
          id="input-with-icon-adornment"
          variant="outlined"
          fullWidth="true"
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
              InputProps={{
                startAdornment: (
                  <InputAdornment>
                    <IconButton>
                      <PhoneIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          )}
        </InputMask>
        <S.SubmitButton fullWidth="true" type="submit">
          Recuperar senha
        </S.SubmitButton>
        <S.LinkButton onClick={() => history.push('/')}> Voltar </S.LinkButton>
      </S.Form>
    </>
  );
}

export default ForgotPasswd;
