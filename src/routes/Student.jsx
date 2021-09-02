import React from 'react';
import { BrowserRouter, Switch, useRouteMatch } from 'react-router-dom';
import { Route } from './Route';

import StudentDashboard from '../components/StudentDashboard';
import CourseDetail from '../components/CourseDetail';
import CourseContent from '../components/CourseContent';

export default function StudentRouter() {
  const { path } = useRouteMatch();

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={path} component={StudentDashboard} isPrivate />
        <Route
          exact
          path={`${path}/course/:id`}
          component={CourseDetail}
          isPrivate
        />
        <Route
          exact
          path={`${path}/course/:id/content`}
          component={CourseContent}
          isPrivate
        />
      </Switch>
    </BrowserRouter>
  );
}
