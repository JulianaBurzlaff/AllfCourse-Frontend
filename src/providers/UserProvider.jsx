import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react';

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState([]);

  const login = useCallback(({ id, email, name, type }) => {
    const userData = [{ id, email, name, type }];
    setUser(userData);
    return true;
  }, []);

  useEffect(() => {
    console.log(user);
  }, [user]);

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
