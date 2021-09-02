import React from 'react';
import { BrowserRouter, Switch, useRouteMatch } from 'react-router-dom';
import { Route } from './Route';

import TeacherDashboard from '../components/TeacherDashboard';
import NewCourse from '../components/NewCourse';

export default function TeacherRouter() {
  const { path } = useRouteMatch();

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={path} component={TeacherDashboard} isPrivate />
        <Route
          exact
          path={`${path}/new-course`}
          component={NewCourse}
          isPrivate
        />
      </Switch>
    </BrowserRouter>
  );
}
