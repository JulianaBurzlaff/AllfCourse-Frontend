import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import InputMask from 'react-input-mask';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import PhoneIcon from '@material-ui/icons/Phone';
import CalendarTodayOutlinedIcon from '@material-ui/icons/CalendarTodayOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import { UploadContext } from '../../providers/UploadProvider';
import { useUser } from '../../providers/UserProvider';
import AuthTemplate from '../../components/AuthTemplate';
import Button from '../../components/Button';
import DropArea from '../../components/DropArea';
import avatar from '../../assets/avatar.svg';
import * as S from './styles';

const schema = yup.object().shape({
  firstName: yup
    .string()
    .required('Nome obrigatório')
    .test('name-validation', 'Nome inválido', val => {
      return !/[^A-Za-z0-9áãâéêíóõúç\s']/.exec(val);
    }),
  lastName: yup
    .string()
    .required('Sobrenome obrigatório')
    .test('surname-validation', 'Sobrenome inválido', val => {
      return !/[^A-Za-z0-9áãâéêíóõúç\s']/.exec(val);
    }),
  socialName: yup
    .string()
    .notRequired()
    .test('social-name-validation', 'Nome inválido', val => {
      return !/[^A-Za-z0-9áãâéêíóõúç\s']/.exec(val);
    }),
  gender: yup.string().required('Selecione o seu gênero'),
  document: yup
    .string()
    .required('Documento obrigatório')
    .test('document-validation', 'Documento inválido', val => {
      return !/[^0-9.\-']/.exec(val);
    }),
  birthDate: yup.string().required('Informe sua data de nascimento'),
  phone: yup
    .string()
    .required('Telefone obrigatório')
    .test('phone-validation', 'Telefone inválido', val => {
      return !/[^0-9()\s']/.exec(val) && !/[0-9]{10}/.exec(val);
    }),
  email: yup.string().email('Email inválido').required('E-mail obrigatório'),
  confirmemail: yup
    .string()
    .email('Email inválido')
    .required('Confirmação obrigatória')
    .oneOf([yup.ref('email'), null], 'Os e-mails não conferem.'),
  type: yup.string().required('Escolha o tipo de usuário'),
  password: yup
    .string()
    .required('Senha obrigatória')
    .min(6, 'Tamanho mínimo de 6 caracteres'),
  confirmpassword: yup
    .string()
    .required('Confirmação obrigatória')
    .oneOf([yup.ref('password'), null], 'As senhas não conferem.')
    .min(6, 'Tamanho mínimo de 6 caracteres'),
});

function Register() {
  const { signIn } = useUser();
  const history = useHistory();
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);
  const [registerError, setRegisterError] = useState(false);

  const { uploadedFile } = useContext(UploadContext);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const signUp = async ({
    firstName,
    lastName,
    socialName,
    gender,
    document,
    birthDate,
    phone,
    email,
    password,
    type,
  }) => {
    const data = {
      firstName,
      lastName,
      socialName,
      gender,
      document: document.replace(/[^0-9]+/g, ''),
      birthDate,
      phone: phone.replace(/[^0-9]+/g, ''),
      email,
      password,
      avatar: uploadedFile.file,
      type,
    };

    try {
      setRegisterError('');
      setStatus('Aguarde...');
      setLoading(true);
      const response = await fetch('http://localhost:3001/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.status !== 201) {
        const responseError = await response.json();
        const error =
          responseError.message.validationErrors[
            Object.keys(responseError.message.validationErrors)[0]
          ].message;
        setStatus('');
        setRegisterError(error);
        setLoading(false);
        setTimeout(() => {
          setRegisterError('');
        }, 2500);
        return;
      }

      setLoading(false);
      setStatus('Usuário cadastrado com sucesso. Entrando...');
      signIn({ email, password });
    } catch (error) {
      console.log('error:', error);
    }
  };

  return (
    <AuthTemplate sizeLeft={4}>
      <S.Container>
        <DropArea
          width="95px"
          height="95px"
          dropWidth="95px"
          dropHeight="95px"
          margin="20px 0 0 0"
          borderRadius="47.5px"
          borderLine="solid"
          borderColor="none"
          image={avatar}
        />
        <S.Text>Clique para inserir a foto do perfil</S.Text>
        <S.Form onSubmit={handleSubmit(signUp)}>
          <S.InputsContainer>
            <S.Input>
              <TextField
                type="text"
                id="input-firstname"
                variant="outlined"
                placeholder="nome"
                margin="none"
                fullWidth
                {...register('firstName')}
                helperText={errors.firstName?.message}
                error={errors.firstName}
                InputProps={{
                  startAdornment: (
                    <InputAdornment>
                      <PersonOutlineOutlinedIcon color="disabled" />
                    </InputAdornment>
                  ),
                }}
              />
            </S.Input>
            <S.Input>
              <TextField
                type="text"
                id="input-lastname"
                variant="outlined"
                placeholder="sobrenome"
                margin="none"
                fullWidth
                {...register('lastName')}
                helperText={errors.lastName?.message}
                error={errors.lastName}
                InputProps={{
                  startAdornment: (
                    <InputAdornment>
                      <PersonOutlineOutlinedIcon color="disabled" />
                    </InputAdornment>
                  ),
                }}
              />
            </S.Input>
            <S.Input>
              <TextField
                type="text"
                id="input-socialname"
                variant="outlined"
                placeholder="nome social"
                margin="none"
                fullWidth
                {...register('socialName')}
                helperText={errors.socialName?.message}
                error={errors.socialName}
                InputProps={{
                  startAdornment: (
                    <InputAdornment>
                      <PersonOutlineOutlinedIcon color="disabled" />
                    </InputAdornment>
                  ),
                }}
              />
            </S.Input>
            <S.Input>
              <FormControl variant="outlined" fullWidth>
                <Select
                  id="input-gender"
                  native
                  fullWidth
                  {...register('gender')}
                  error={errors.gender}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment>
                        <PersonOutlineOutlinedIcon color="disabled" />
                      </InputAdornment>
                    ),
                  }}
                >
                  <option aria-label="None" value="">
                    Gênero
                  </option>
                  <option value="Male">Masculino</option>
                  <option value="Female">Feminino</option>
                  <option value="NI">Prefiro não informar</option>
                </Select>
                <S.ReturnError>{errors.gender?.message}</S.ReturnError>
              </FormControl>
            </S.Input>
            <S.Input>
              <InputMask
                mask="999.999.999-99"
                {...register('document')}
                disabled={false}
                maskChar=" "
              >
                {() => (
                  <TextField
                    tipe="text"
                    id="input-document"
                    variant="outlined"
                    placeholder="CPF"
                    margin="none"
                    fullWidth
                    {...register('document')}
                    helperText={errors.document?.message}
                    error={errors.document}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment>
                          <PersonOutlineOutlinedIcon color="disabled" />
                        </InputAdornment>
                      ),
                    }}
                  />
                )}
              </InputMask>
            </S.Input>
            <S.Input>
              <TextField
                type="date"
                id="input-birthdate"
                variant="outlined"
                placeholder="data de nascimento"
                margin="none"
                fullWidth
                {...register('birthDate')}
                helperText={errors.birthDate?.message}
                error={errors.birthDate}
                InputProps={{
                  startAdornment: (
                    <InputAdornment>
                      <CalendarTodayOutlinedIcon color="disabled" />
                    </InputAdornment>
                  ),
                }}
              />
            </S.Input>
            <S.Input>
              <InputMask
                mask="(99) 99999 9999"
                {...register('phone')}
                disabled={false}
                maskChar=" "
              >
                {() => (
                  <TextField
                    type="phone"
                    id="input-phone"
                    variant="outlined"
                    placeholder="telefone"
                    margin="none"
                    fullWidth
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
            </S.Input>
            <S.Input>
              <TextField
                type="text"
                id="input-email"
                variant="outlined"
                placeholder="e-mail"
                margin="none"
                fullWidth
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
            </S.Input>
            <S.Input>
              <TextField
                type="text"
                id="input-confirmemail"
                variant="outlined"
                placeholder="confirmação de e-mail"
                margin="none"
                fullWidth
                {...register('confirmemail')}
                helperText={errors.confirmemail?.message}
                error={errors.confirmemail}
                InputProps={{
                  startAdornment: (
                    <InputAdornment>
                      <MailOutlineIcon color="disabled" />
                    </InputAdornment>
                  ),
                }}
              />
            </S.Input>
            <S.Input>
              <FormControl variant="outlined" fullWidth>
                <Select
                  id="input-type"
                  native
                  fullWidth
                  {...register('type')}
                  error={errors.gender}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment>
                        <PersonOutlineOutlinedIcon color="disabled" />
                      </InputAdornment>
                    ),
                  }}
                >
                  <option aria-label="None" value="">
                    Tipo de usuário
                  </option>
                  <option value="1">Aluno</option>
                  <option value="2">Professor</option>
                  <option value="7">Aluno e professor</option>
                </Select>
                <S.ReturnError>{errors.type?.message}</S.ReturnError>
              </FormControl>
            </S.Input>
            <S.Input>
              <TextField
                type="password"
                id="input-password"
                variant="outlined"
                placeholder="senha"
                margin="none"
                fullWidth
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
            </S.Input>
            <S.Input>
              <TextField
                type="password"
                id="input-confirmpassword"
                variant="outlined"
                placeholder="confirmação de senha"
                margin="none"
                fullWidth
                {...register('confirmpassword')}
                helperText={errors.confirmpassword?.message}
                error={errors.confirmpassword}
                InputProps={{
                  startAdornment: (
                    <InputAdornment>
                      <LockOutlinedIcon color="disabled" />
                    </InputAdornment>
                  ),
                }}
              />
            </S.Input>
          </S.InputsContainer>
          <S.ButtonsContainer>
            <Button loading={loading} width="200px" size="small" type="submit">
              Cadastrar
            </Button>
            <S.LinkButton
              onClick={() => {
                history.push('login');
              }}
            >
              Voltar
            </S.LinkButton>
          </S.ButtonsContainer>
        </S.Form>
        <S.Return>{status}</S.Return>
        <S.ErrorReturn>{registerError}</S.ErrorReturn>
      </S.Container>
    </AuthTemplate>
  );
}

export default Register;
