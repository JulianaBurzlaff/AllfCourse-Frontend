import React from 'react';
import { BrowserRouter, Switch, useRouteMatch } from 'react-router-dom';
import { Route } from './Route';

import Dashboard from '../pages/Dashboard';
import StudentDashboard from '../components/StudentDashboard';

export default function StudentRouter() {
  const { path } = useRouteMatch();

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={path} isPrivate>
          <Dashboard>
            <StudentDashboard />
          </Dashboard>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
