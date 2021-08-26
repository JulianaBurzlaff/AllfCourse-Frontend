import React from 'react';

import { UserProvider } from './UserProvider';

function AppProvider({ children }) {
  return <UserProvider>{children}</UserProvider>;
}

export default AppProvider;
