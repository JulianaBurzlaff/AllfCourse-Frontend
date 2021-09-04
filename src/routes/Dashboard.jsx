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
import EditCourse from '../components/EditCourse';
import CourseData from '../components/CourseData';
import CourseDetail from '../components/CourseDetail';
import CourseContent from '../components/CourseContent';
import ClassContent from '../components/ClassContent';

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
            path={`${path}/teacher/edit-course`}
            component={EditCourse}
            isPrivate
          />
          <Route
            exact
            path={`${path}/teacher/course-data`}
            component={CourseData}
            isPrivate
          />
          <Route
            exact
            path={`${path}/student/course/:id`}
            component={CourseDetail}
            isPrivate
          />
          <Route
            exact
            path={`${path}/student/course/:id/content`}
            component={CourseContent}
            isPrivate
          />
          <Route
            exact
            path={`${path}/student/course/:courseId/module/:moduleId/class/:classId`}
            component={ClassContent}
            isPrivate
          />
        </Dashboard>
      </Switch>
    </BrowserRouter>
  );
}
