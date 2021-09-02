import React from 'react';
import {
  BrowserRouter,
  Switch,
  useRouteMatch,
  Redirect,
} from 'react-router-dom';
import { Route } from './Route';
import { useUser } from '../providers/UserProvider';
import Dashboard from '../pages/Dashboard';
import TeacherDashboard from '../components/TeacherDashboard';
import StudentDashboard from '../components/StudentDashboard';
import AdmDashboard from '../components/AdmDashboard';
import NewCourse from '../components/NewCourse';
import CourseDetail from '../components/CourseDetail';

export default function DashboardRouter() {
  const { path } = useRouteMatch();
  const { typeActive } = useUser();

  return (
    <BrowserRouter>
      <Switch>
        <Redirect exact path={path} to={`${path}/${typeActive}`} />
        <Dashboard>
          <Route
            exact
            path={`${path}/student`}
            component={StudentDashboard}
            isPrivate
          />
          <Route
            exact
            path={`${path}/teacher`}
            component={TeacherDashboard}
            isPrivate
          />
          <Route
            exact
            path={`${path}/adm`}
            component={AdmDashboard}
            isPrivate
          />
          <Route
            exact
            path={`${path}/teacher/new-course`}
            component={NewCourse}
            isPrivate
          />
          <Route
            exact
            path={`${path}/student/course/:id`}
            component={CourseDetail}
            isPrivate
          />
        </Dashboard>
      </Switch>
    </BrowserRouter>
  );
}
