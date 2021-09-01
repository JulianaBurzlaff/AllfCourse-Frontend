import React, { useCallback } from 'react';
import {
  BrowserRouter,
  Switch,
  useRouteMatch,
  Redirect,
  Route,
} from 'react-router-dom';
// import { Route } from './Route';

import TeacherRouter from './Teacher';
import StudentRouter from './Student';

export default function DashboardRouter() {
  const { path } = useRouteMatch();

  const userType = 1;

  const RedirectDashboard = useCallback(() => {
    switch (userType) {
      case 1:
        return <Redirect exact path={path} to={`${path}/student`} />;
      case 2:
        return <Redirect exact path={path} to={`${path}/teacher`} />;
      case 3:
        return <Redirect exact path={path} to={`${path}/teacher`} />;
      // case 4:
      //   return <Redirect exact path={path} to={`${path}/adm`} />;
      // case 5:
      //   return <Redirect exact path={path} to={`${path}/adm`} />;
      // case 6:
      //   return <Redirect exact path={path} to={`${path}/adm`} />;
      // case 7:
      //   return <Redirect exact path={path} to={`${path}/adm`} />;
      default:
        break;
    }
    return true;
  }, [userType, path]);

  return (
    <BrowserRouter>
      <Switch>
        {RedirectDashboard()}
        <Route path={`${path}/student`} component={StudentRouter} />
        <Route path={`${path}/teacher`} component={TeacherRouter} />
        {/* <Route path={`${path}/adm`} /> */}
      </Switch>
    </BrowserRouter>
  );
}
