import React from 'react';
import { BrowserRouter, Switch, Redirect } from 'react-router-dom';
import { Route } from './Route';

import Home from '../pages/Home';
import Register from '../pages/Register';
import Dashboard from '../pages/Dashboard';
import Password from '../pages/Password';

// Rotas de teste
import StudentDashboard from '../pages/StudentDashboard';
import TeacherDashboardPage from '../pages/TeacherDashboardPage';

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect exact path="/" to="/login" />
        <Route path="/login" component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/password" component={Password} />
        <Route path="/dashboard" component={Dashboard} isPrivate />

        {/* Rotas de teste */}
        <Route
          path="/student/dashboard"
          component={StudentDashboard}
          isPrivate
        />
        <Route
          path="/teacher/dashboard"
          component={TeacherDashboardPage}
          isPrivate
        />
      </Switch>
    </BrowserRouter>
  );
}
