import React, { createContext, useCallback, useState } from 'react';
import { useSnackbar } from 'notistack';
import { api } from '../services/api';

export const TeacherContext = createContext({});

export const TeacherProvider = ({ children }) => {
  const { enqueueSnackbar } = useSnackbar();
  const [categories, setCategories] = useState([]);
  const [courseHeader, setCourseHeader] = useState({});
  const [courseModules, setCourseModules] = useState([]);
  const [courseCategories, setCourseCategories] = useState([]);
  const [courseClasses, setCourseClasses] = useState([]);
  const [modulesNumber, setModulesNumber] = useState(0);
  const [editStatus, setEditStatus] = useState(0);
  const [order, setOrder] = useState(0);
  const [position, setPosition] = useState(0);

  const handleSetEditStatus = useCallback(status => {
    setEditStatus(status);
  }, []);

  const handleSetCourseHeader = useCallback(data => {
    setCourseHeader(data);
  }, []);

  const handleSetCourseCategories = useCallback(data => {
    setCourseCategories(data);
  }, []);

  const handleSetCourseModules = useCallback(modules => {
    setCourseModules(modules);
  }, []);

  const handleSetCourseClasses = useCallback(classe => {
    setCourseClasses(classe);
  }, []);

  const handleSetOrder = useCallback(value => {
    setOrder(value);
  }, []);

  const handleSetPosition = useCallback(value => {
    setPosition(value);
  }, []);

  const handleSetModulesNumber = useCallback(() => {
    const counter = courseModules.map(() => {
      return true;
    });
    setModulesNumber(counter.length);
  }, [courseModules]);

  const cancelEditCourse = useCallback(() => {
    setCategories([]);
    setCourseHeader({});
    setCourseModules([]);
    setCourseClasses([]);
    setCourseCategories([]);
    setModulesNumber(0);
  }, []);

  const saveCourse = async ({ courseName, description }) => {
    handleSetCourseHeader({
      courseName,
      description,
    });

    const newCourse = {};
    newCourse.courseName = courseName;
    newCourse.description = description;
    newCourse.price = '00,00';
    newCourse.courseCategories = courseCategories;
    newCourse.courseModules = courseModules;
    newCourse.courseClasses = courseClasses;

    try {
      await api.post('/addcourse', newCourse);
      enqueueSnackbar('Curso criado com sucesso.', {
        variant: 'success',
      });
    } catch (error) {
      console.log('error:', error.response.data);
    }
  };

  const deleteModule = useCallback(() => {
    if (editStatus === 0) {
      const modules = courseModules;
      const classes = courseClasses;
      const index = modules.findIndex(module => {
        return module.order === parseInt(order, 10);
      });

      if (index !== -1) {
        const indexClassesToExclusion = classes.map((item, itemIndex) => {
          if (item.position === parseInt(order, 10) - 1) {
            return itemIndex;
          }
          return null;
        });

        for (let i = indexClassesToExclusion.length - 1; i >= 0; i -= 1) {
          if (indexClassesToExclusion[i] !== null) {
            classes.splice([i], 1);
          }
        }

        const indexClassesToChagePosition = classes.map((item, itemIndex) => {
          if (item.position >= parseInt(order, 10)) {
            return itemIndex;
          }
          return null;
        });

        for (let i = 0; i < classes.length; i += 1) {
          if (indexClassesToChagePosition[i] !== null) {
            classes[i].position -= 1;
          }
        }

        modules.splice(index, 1);

        for (let i = 0; i < modules.length; i += 1) {
          modules[i].order = i + 1;
        }

        handleSetCourseModules(modules);
        handleSetCourseClasses(classes);
        handleSetModulesNumber();

        enqueueSnackbar('Módulo excluído com sucesso!', {
          variant: 'success',
        });
      }
    } else if (editStatus === 1) {
      console.log('');
    }
  }, [
    editStatus,
    courseModules,
    courseClasses,
    handleSetCourseModules,
    handleSetCourseClasses,
    handleSetModulesNumber,
    enqueueSnackbar,
    order,
  ]);

  const deleteClass = useCallback(() => {
    if (editStatus === 0) {
      const classes = courseClasses;

      const index = classes.findIndex(classItem => {
        return (
          classItem.order === parseInt(order, 10) &&
          classItem.position === parseInt(position, 10)
        );
      });

      if (index !== -1) {
        classes.splice([index], 1);

        const indexClassesToChageOrder = classes.map((item, itemIndex) => {
          if (item.order > parseInt(order, 10)) {
            return itemIndex;
          }
          return null;
        });

        for (let i = 0; i < classes.length; i += 1) {
          if (indexClassesToChageOrder[i] !== null) {
            classes[i].order -= 1;
          }
        }

        handleSetCourseClasses(classes);

        enqueueSnackbar('Aula excluída com sucesso!', {
          variant: 'success',
        });
      }
    } else if (editStatus === 1) {
      console.log('');
    }
  }, [
    editStatus,
    courseClasses,
    handleSetCourseClasses,
    enqueueSnackbar,
    order,
    position,
  ]);

  return (
    <TeacherContext.Provider
      value={{
        editStatus,
        handleSetEditStatus,
        categories,
        // loading,
        // categoriesError,
        modulesNumber,
        handleSetModulesNumber,
        // getCoursesCategories,
        courseCategories,
        handleSetCourseCategories,
        courseHeader,
        handleSetCourseHeader,
        courseModules,
        handleSetCourseModules,
        courseClasses,
        handleSetCourseClasses,
        handleSetOrder,
        handleSetPosition,
        saveCourse,
        cancelEditCourse,
        deleteModule,
        deleteClass,
      }}
    >
      {children}
    </TeacherContext.Provider>
  );
};
