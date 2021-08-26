import React, { createContext, useCallback, useState } from 'react';

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState();

  const logout = useCallback(() => {
    setUser();
  }, []);

  const login = useCallback(async ({ email, password }) => {
    const userData = { email, password };
    setUser(userData);
    return userData;
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        logout,
        login,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
