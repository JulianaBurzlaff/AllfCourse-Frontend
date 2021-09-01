import React, { createContext, useCallback, useState, useContext } from 'react';

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [typeActive, setTypeActive] = useState('');

  const handleTypeActive = useCallback(type => {
    setTypeActive(type);
  }, []);

  const login = useCallback(
    ({ id, email, name, type }) => {
      const userData = [{ id, email, name, type }];

      switch (type) {
        case 1:
          handleTypeActive('student');
          break;
        case 2:
          handleTypeActive('teacher');
          break;
        case 3:
          handleTypeActive('teacher');
          break;
        case 4:
          handleTypeActive('adm');
          break;
        case 5:
          handleTypeActive('adm');
          break;
        case 6:
          handleTypeActive('adm');
          break;
        case 7:
          handleTypeActive('adm');
          break;
        default:
          break;
      }

      setUser(userData);
      return true;
    },
    [handleTypeActive],
  );

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
