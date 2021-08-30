import React from 'react';
import { BrowserRouter, Switch, Redirect } from 'react-router-dom';
import { Route } from './Route';

import Home from '../pages/Home';
import Register from '../pages/Register';
import Dashboard from '../pages/Dashboard';
import Password from '../pages/Password';
import StudentDashboard from '../pages/StudentDashboard';
import TeacherDashboard from '../pages/TeacherDashboard';

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect exact path="/" to="/login" />
        <Route path="/login" component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/password" component={Password} />
        <Route path="/dashboard" component={Dashboard} isPrivate />
        <Route path="/student/dashboard" component={StudentDashboard} />
        <Route
          path="/teacher/dashboard"
          component={TeacherDashboard}
          isPrivate
        />
      </Switch>
    </BrowserRouter>
  );
}
