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
import CallOutlinedIcon from '@material-ui/icons/CallOutlined';
import CalendarTodayOutlinedIcon from '@material-ui/icons/CalendarTodayOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import IconButton from '@material-ui/core/IconButton';
import { useUser } from '../../providers/UserProvider';
import { UploadContext } from '../../providers/UploadProvider';
import AuthTemplate from '../../components/AuthTemplate';
import Button from '../../components/Button';
import DropArea from '../../components/DropArea';
import * as S from './styles';

const emailValue = { value: '' };
const passwordValue = { value: '' };

const schema = yup.object().shape({
  name: yup
    .string()
    .required('Nome obrigatório')
    .test('name-validation', 'Nome inválido', val => {
      return !/[^A-Za-z0-9áãâéêíóõúç\s']/.exec(val);
    }),
  surname: yup
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
  gender: yup.string().notRequired(),
  document: yup
    .string()
    .required('Documento obrigatório')
    .test('document-validation', 'Documento inválido', val => {
      return !/[^0-9.\-']/.exec(val);
    }),
  date: yup.string().notRequired(),
  phone: yup
    .string()
    .required('Telefone obrigatório')
    .test('phone-validation', 'Telefone inválido', val => {
      return !/[^0-9()\s']/.exec(val) && !/[0-9]{10}/.exec(val);
    }),
  email: yup
    .string()
    .email('Email inválido')
    .required('E-mail obrigatório')
    .test('email-store', '', val => {
      emailValue.value = val;
      return true;
    }),
  confirmEmail: yup
    .string()
    .email('Email inválido')
    .required('Confirmação obrigatória')
    .test('confirm-email-validation', 'Os e-mails não são iguais', val => {
      return val === emailValue.value;
    }),
  password: yup
    .string()
    .required('Senha obrigatória')
    .test(
      'password-validation',
      'A senha deve ter no mínimo 6 caracteres',
      val => {
        return /.{6}/.exec(val);
      },
    )
    .test('password-store', '', val => {
      passwordValue.value = val;
      return true;
    }),
  confirmPassword: yup
    .string()
    .required('Confirmação obrigatória')
    .test(
      'password-validation',
      'A senha deve ter no mínimo 6 caracteres',
      val => {
        return /.{6}/.exec(val);
      },
    )
    .test('confirm-password--validation', 'As senhas não são iguais', val => {
      return val === passwordValue.value;
    }),
});

function Register() {
  const { login } = useUser();
  const history = useHistory();
  const [, setLoading] = useState(false);
  const [, setUserError] = useState(false);

  const { uploadedFile } = useContext(UploadContext);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const signUp = async ({
    name,
    surname,
    socialName,
    gender,
    document,
    date,
    phone,
    email,
    password,
  }) => {
    const data = {
      name,
      surname,
      social_name: socialName,
      gender,
      document,
      birth_date: date,
      phone,
      email,
      password,
      avatar: uploadedFile,
    };

    try {
      setUserError(false);
      setLoading(true);
      const response = await fetch('http://localhost:3001/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: data,
      });

      if (response.status !== 200) {
        setLoading(false);
        setUserError(true);
        setTimeout(() => {
          setUserError(false);
        }, 2500);
        return;
      }

      login({
        email,
        password,
      });
      setLoading(false);
    } catch (error) {
      console.log('error:', error);
    }
  };

  return (
    <AuthTemplate sizeLeft={4}>
      <S.Container>
        <DropArea
          width="150px"
          height="150px"
          borderRadius="75px"
          borderLine="solid"
          borderColor="none"
        />
        <S.Text>Clique para inserir a foto do perfil</S.Text>
        <S.Form onSubmit={handleSubmit(signUp)}>
          <S.InputsContainer>
            <S.Input>
              <TextField
                type="text"
                id="input-name"
                variant="outlined"
                placeholder="nome"
                margin="none"
                fullWidth
                {...register('name')}
                helperText={errors.name?.message}
                error={errors.name}
                InputProps={{
                  startAdornment: (
                    <InputAdornment>
                      <IconButton>
                        <PersonOutlineOutlinedIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </S.Input>
            <S.Input>
              <TextField
                type="text"
                id="input-surname"
                variant="outlined"
                placeholder="sobrenome"
                margin="none"
                fullWidth
                {...register('surname')}
                helperText={errors.surname?.message}
                error={errors.surname}
                InputProps={{
                  startAdornment: (
                    <InputAdornment>
                      <IconButton>
                        <PersonOutlineOutlinedIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </S.Input>
            <S.Input>
              <TextField
                type="text"
                id="input-social-name"
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
                      <IconButton>
                        <PersonOutlineOutlinedIcon />
                      </IconButton>
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
                  InputProps={{
                    startAdornment: (
                      <InputAdornment>
                        <IconButton>
                          <PersonOutlineOutlinedIcon />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                >
                  <option aria-label="None" value="">
                    Gênero
                  </option>
                  <option value="Masculino">Masculino</option>
                  <option value="Feminino">Feminino</option>
                  <option value="Prefiro não informar">
                    Prefiro não informar
                  </option>
                </Select>
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
                          <IconButton>
                            <PersonOutlineOutlinedIcon />
                          </IconButton>
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
                id="input-date"
                variant="outlined"
                placeholder="data de nascimento"
                margin="none"
                fullWidth
                {...register('date')}
                InputProps={{
                  startAdornment: (
                    <InputAdornment>
                      <IconButton>
                        <CalendarTodayOutlinedIcon />
                      </IconButton>
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
                          <IconButton>
                            <CallOutlinedIcon />
                          </IconButton>
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
                      <IconButton>
                        <MailOutlineIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </S.Input>
            <S.Input>
              <TextField
                type="text"
                id="input-email-confirm"
                variant="outlined"
                placeholder="confirmação de e-mail"
                margin="none"
                fullWidth
                {...register('confirmEmail')}
                helperText={errors.confirmEmail?.message}
                error={errors.confirmEmail}
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
                      <IconButton>
                        <LockOutlinedIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </S.Input>
            <S.Input>
              <TextField
                type="password"
                id="input-confirm-password"
                variant="outlined"
                placeholder="confirmação de senha"
                margin="none"
                fullWidth
                {...register('confirmPassword')}
                helperText={errors.confirmPassword?.message}
                error={errors.confirmPassword}
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
            </S.Input>
          </S.InputsContainer>
          <S.ButtonsContainer>
            <Button width="200px" size="small" type="submit">
              Cadastrar
            </Button>
            <S.LinkButton
              onClick={() => {
                history.push('home');
              }}
            >
              Voltar
            </S.LinkButton>
          </S.ButtonsContainer>
        </S.Form>
      </S.Container>
    </AuthTemplate>
  );
}

export default Register;
