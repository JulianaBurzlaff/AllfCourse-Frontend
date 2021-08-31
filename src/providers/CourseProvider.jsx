import React, { createContext, useCallback, useState, useContext } from 'react';
import { api } from '../services/api';

export const CourseContext = createContext({});

export const CourseProvider = ({ children }) => {
  const [approvedCourses, setApprovedCourses] = useState();
  const [loggedStudentCourses, setLoggedStudentCourses] = useState();

  const fetchApprovedCourses = useCallback(async () => {
    try {
      const { data } = await api.get('/courses/logged-user');

      const approved = data.filter(course => course.status === 'aprovado');

      setApprovedCourses(approved);
      return approved;
    } catch (error) {
      return null;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchLoggedStudentCourses = useCallback(async () => {
    try {
      const { data } = await api.get('/courses/logged-user');

      const loggedUser = data.filter(course => course.enrolled === true);

      setLoggedStudentCourses(loggedUser);
      return loggedUser;
    } catch (error) {
      return null;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <CourseContext.Provider
      value={{
        fetchApprovedCourses,
        approvedCourses,
        fetchLoggedStudentCourses,
        loggedStudentCourses,
      }}
    >
      {children}
    </CourseContext.Provider>
  );
};

export function useCourse() {
  const context = useContext(CourseContext);

  return context;
}
