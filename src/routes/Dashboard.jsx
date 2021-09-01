import React, { useEffect } from 'react';
import {
  BrowserRouter,
  Switch,
  useRouteMatch,
  Redirect,
  Route,
} from 'react-router-dom';
// import { Route } from './Route';
import { useUser } from '../providers/UserProvider';
import Dashboard from '../pages/Dashboard';

import AdmRouter from './Adm';
import TeacherRouter from './Teacher';
import StudentRouter from './Student';

export default function DashboardRouter() {
  const { path } = useRouteMatch();
  const { typeActive } = useUser();

  useEffect(() => {
    console.log(typeActive);
  }, [typeActive]);

  return (
    <BrowserRouter>
      <Switch>
        <Redirect exact path={path} to={`${path}/${typeActive}`} />
        <Dashboard>
          <Route exact path={`${path}/student`} component={StudentRouter} />
          <Route exact path={`${path}/teacher`} component={TeacherRouter} />
          <Route exact path={`${path}/adm`} component={AdmRouter} />
        </Dashboard>
      </Switch>
    </BrowserRouter>
  );
}
