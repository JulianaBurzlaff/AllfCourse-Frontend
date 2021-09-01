import React, { createContext, useCallback, useState, useContext } from 'react';

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [typeActive, setTypeActive] = useState('');

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

  return (
    <UserContext.Provider
      value={{ user, typeActive, logout, login, handleTypeActive }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  return context;
};
