import React from 'react';
import { BrowserRouter, Switch, useRouteMatch } from 'react-router-dom';
import { Route } from './Route';

import AdmDashboard from '../components/AdmDashboard';

export default function TeacherRouter() {
  const { path } = useRouteMatch();

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={path} component={AdmDashboard} isPrivate />
      </Switch>
    </BrowserRouter>
  );
}
