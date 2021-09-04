import React, { createContext, useCallback, useState, useContext } from 'react';
import jwt from 'jsonwebtoken';
import { useCookies } from 'react-cookie';
import { api } from '../services/api';

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [photo, setPhoto] = useState('');
  const [typeActive, setTypeActive] = useState('');
  const [loading, setLoading] = useState('');
  const [userError, setUserError] = useState();
  const [cookies, setCookies, removeCookies] = useCookies(['auth']);

  const handleTypeActive = useCallback(type => {
    setTypeActive(type);
  }, []);

  const login = useCallback(({ id, email, name, type, socialName }) => {
    const userData = [{ id, email, name, type, socialName }];

    switch (type) {
      case 1:
        setTypeActive('student');
        break;
      case 2:
        setTypeActive('teacher');
        break;
      case 3:
        setTypeActive('teacher');
        break;
      case 4:
        setTypeActive('adm');
        break;
      case 5:
        setTypeActive('adm');
        break;
      case 6:
        setTypeActive('adm');
        break;
      case 7:
        setTypeActive('adm');
        break;
      default:
        break;
    }

    setUser(userData);
    return true;
  }, []);

  const logout = useCallback(() => {
    setUser([]);
    removeCookies('auth');
  }, [removeCookies]);

  const signIn = async ({ email, password }) => {
    try {
      setUserError('');
      setLoading('Aguarde...');
      const response = await api.get('/login', {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Basic ${btoa(`${email}:${password}`)}`,
        },
      });

      const userData = await jwt.decode(response.data.token);
      login(userData);
      // setCookies('auth',);
      setLoading('');
    } catch (error) {
      if (error.response.status !== 200) {
        setLoading('');

        const pathError = Object.keys(
          error.response.data.message.criticalErrors,
        )[0];
        setUserError(
          error.response.data.message.criticalErrors[pathError].message,
        );
        setTimeout(() => {
          setUserError('');
        }, 2500);
      }
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        typeActive,
        logout,
        login,
        signIn,
        loading,
        userError,
        handleTypeActive,
        cookies,
        setCookies,
        photo,
        setPhoto,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  return context;
};
