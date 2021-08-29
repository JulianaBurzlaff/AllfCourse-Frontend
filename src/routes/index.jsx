import React from 'react';
import { BrowserRouter, Switch, Redirect } from 'react-router-dom';
import { Route } from './Route';

import Home from '../pages/Home';
import Register from '../pages/Register';
import Dashboard from '../pages/Dashboard';
import Password from '../pages/Password';
import StudentDashboard from '../pages/StudentDashboard';

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect exact path="/" to="/home" />
        <Route path="/home" component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/dashboard" component={Dashboard} isPrivate />
        <Route path="/password" component={Password} />
        <Route
          path="/student/dashboard"
          component={StudentDashboard}
          isPrivate
        />
      </Switch>
    </BrowserRouter>
  );
}
