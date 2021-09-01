import React from 'react';
import { BrowserRouter, Switch, useRouteMatch } from 'react-router-dom';
import { Route } from './Route';

import AdmDashboard from '../components/AdmDashboard';

export default function AdmRouter() {
  const { path } = useRouteMatch();

  return (
    <BrowserRouter>
      <Switch>
        <Route path={path} component={AdmDashboard} isPrivate />
      </Switch>
    </BrowserRouter>
  );
}
