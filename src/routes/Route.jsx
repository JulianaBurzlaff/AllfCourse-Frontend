import React from 'react';
import { Redirect, Route as ReactDOMRoute } from 'react-router-dom';
import { useUser } from '../providers/UserProvider';

export const Route = ({ isPrivate = false, component: Component, ...rest }) => {
  const { user } = useUser();

  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => {
        return isPrivate === !!user.length ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : '/dashboard',
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};
