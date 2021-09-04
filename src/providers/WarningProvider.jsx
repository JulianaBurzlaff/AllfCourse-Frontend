import React, { createContext, useState, useCallback } from 'react';

export const WarningContext = createContext({});

export const WarningProvider = ({ children }) => {
  const [modalWarning, setModalWarning] = useState(false);

  const handleSetModalWarningOpen = useCallback(() => {
    setModalWarning(true);
  }, []);

  const handleSetModalWarningClose = useCallback(() => {
    setModalWarning(false);
  }, []);

  return (
    <WarningContext.Provider
      value={{
        modalWarning,
        handleSetModalWarningOpen,
        handleSetModalWarningClose,
      }}
    >
      {children}
    </WarningContext.Provider>
  );
};
