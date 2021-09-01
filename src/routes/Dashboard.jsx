import React from 'react';
import {
  BrowserRouter,
  Switch,
  useRouteMatch,
  Redirect,
  Route,
} from 'react-router-dom';
import { useUser } from '../providers/UserProvider';
import Dashboard from '../pages/Dashboard';
import TeacherRouter from './Teacher';
import StudentRouter from './Student';
import AdmRouter from './Adm';

export default function DashboardRouter() {
  const { path } = useRouteMatch();
  const { typeActive } = useUser();

  return (
    <BrowserRouter>
      <Switch>
        <Redirect exact path={path} to={`${path}/${typeActive}`} />
        <Dashboard>
          <Route path={`${path}/student`} component={StudentRouter} />
          <Route path={`${path}/teacher`} component={TeacherRouter} />
          <Route path={`${path}/adm`} component={AdmRouter} />
        </Dashboard>
      </Switch>
    </BrowserRouter>
  );
}
