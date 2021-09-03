import React from 'react';
import { BrowserRouter, Switch, Redirect } from 'react-router-dom';
import { Route } from './Route';

import Home from '../pages/Home';
import Register from '../pages/Register';
import Password from '../pages/Password';
import DashboardRouter from './Dashboard';

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect exact path="/" to="/login" />
        <Route path="/login" component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/password" component={Password} />
        <Route path="/dashboard" component={DashboardRouter} isPrivate />
      </Switch>
    </BrowserRouter>
  );
}
