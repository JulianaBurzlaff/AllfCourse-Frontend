import React from 'react';
import { BrowserRouter, Switch, useRouteMatch } from 'react-router-dom';
import { Route } from './Route';

import Teacher from '../pages/Teacher';
import TeacherDashboard from '../components/TeacherDashboard';

export default function TeacherRouter() {
  const { path } = useRouteMatch();

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={path}>
          <Teacher>
            <TeacherDashboard />
          </Teacher>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
