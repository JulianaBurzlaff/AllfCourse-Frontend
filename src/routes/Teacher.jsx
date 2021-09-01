import React from 'react';
import { BrowserRouter, Switch, useRouteMatch } from 'react-router-dom';
import { Route } from './Route';

import TeacherDashboard from '../components/TeacherDashboard';

export default function TeacherRouter() {
  const { path } = useRouteMatch();

  return (
    <BrowserRouter>
      <Switch>
        <Route path={path} component={TeacherDashboard} isPrivate />
      </Switch>
    </BrowserRouter>
  );
}
