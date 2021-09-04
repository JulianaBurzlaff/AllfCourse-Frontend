import React, { createContext, useCallback, useState, useContext } from 'react';
import { api } from '../services/api';

export const CourseContext = createContext({});

export const CourseProvider = ({ children }) => {
  const [approvedCourses, setApprovedCourses] = useState();
  const [loggedStudentCourses, setLoggedStudentCourses] = useState();
  const [chosenCourse, setChosenCourse] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchCourses = useCallback(async () => {
    try {
      const { data } = await api.get('/courses/logged-user');

      const approved = data.filter(
        course => course.status === 'aprovado' && course.enrolled === false,
      );

      const loggedUser = data.filter(course => course.enrolled === true);

      setApprovedCourses(approved);
      setLoggedStudentCourses(loggedUser);
      return approved;
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
        fetchCourses,
        approvedCourses,
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
