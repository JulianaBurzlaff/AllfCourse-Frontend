import React, { createContext, useCallback, useState, useContext } from 'react';
import jwt from 'jsonwebtoken';

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [typeActive, setTypeActive] = useState('');
  const [loading, setLoading] = useState(false);
  const [userError, setUserError] = useState(false);

  const handleTypeActive = useCallback(type => {
    setTypeActive(type);
  }, []);

  const login = useCallback(({ id, email, name, type }) => {
    const userData = [{ id, email, name, type }];

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
  }, []);

  const signIn = async ({ email, password }) => {
    try {
      setUserError(false);
      setLoading(true);
      const response = await fetch('http://localhost:3001/login', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Basic ${btoa(`${email}:${password}`)}`,
        },
      });

      if (response.status !== 200) {
        setLoading(false);
        setUserError(true);
        setTimeout(() => {
          setUserError(false);
        }, 2500);
        return;
      }

      const responseData = await response.json();
      const userData = jwt.decode(responseData.token);
      console.log(userData);
      login(userData);
      setLoading(false);
    } catch (error) {
      console.log('error:', error);
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        typeActive,
        logout,
        login,
        signIn,
        loading,
        userError,
        handleTypeActive,
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
