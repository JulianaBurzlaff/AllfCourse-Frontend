import React from 'react';
import { BrowserRouter, Switch, useRouteMatch } from 'react-router-dom';
import { Route } from './Route';

import Dashboard from '../pages/Dashboard';
import TeacherDashboard from '../components/TeacherDashboard';

export default function TeacherRouter() {
  const { path } = useRouteMatch();

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={path} isPrivate>
          <Dashboard>
            <TeacherDashboard />
          </Dashboard>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
