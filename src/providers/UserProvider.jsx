import React, { createContext, useCallback, useState, useContext } from 'react';

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState([]);

  const login = useCallback(({ id, email, name, type }) => {
    const userData = [{ id, email, name, type }];
    setUser(userData);
    return true;
  }, []);

  const logout = useCallback(() => {
    setUser([]);
  }, []);

  return (
    <UserContext.Provider value={{ user, logout, login }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  return context;
};
