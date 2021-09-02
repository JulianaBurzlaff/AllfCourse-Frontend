import React, { createContext, useCallback, useState, useContext } from 'react';
import { api } from '../services/api';

export const CourseContext = createContext({});

export const CourseProvider = ({ children }) => {
  const [approvedCourses, setApprovedCourses] = useState();
  const [loggedStudentCourses, setLoggedStudentCourses] = useState();
  const [chosenCourse, setChosenCourse] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchApprovedCourses = useCallback(async () => {
    try {
      const { data } = await api.get('/courses/logged-user');

      const approved = data.filter(
        course => course.status === 'aprovado' && course.enrolled === false,
      );

      setApprovedCourses(approved);
      return approved;
    } catch (error) {
      return null;
    }
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
  }, []);

  const fetchChosenCourse = useCallback(async ({ id }) => {
    try {
      const { data } = await api.get(`/course-informations/${id}`);
      setChosenCourse(data[0]);
      return data[0];
    } catch (error) {
      return null;
    }
  }, []);

  return (
    <CourseContext.Provider
      value={{
        fetchApprovedCourses,
        approvedCourses,
        fetchLoggedStudentCourses,
        loggedStudentCourses,
        fetchChosenCourse,
        chosenCourse,
        setLoading,
        loading,
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
