import React, { createContext, useCallback, useState } from 'react';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();

  const login = useCallback(async ({ email, password }) => {
    const data = { email, password };
    setUser(data);
    return data;
  }, []);

  // const logout = useCallback(async () => {
  //   await api.post('/logout');
  //   localStorage.removeItem('user');
  //   setUser(null);
  // }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
