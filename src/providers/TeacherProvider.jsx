import React, { createContext, useCallback, useEffect, useState } from 'react';
import { useSnackbar } from 'notistack';
import { api } from '../services/api';

export const TeacherContext = createContext({});

export const TeacherProvider = ({ children }) => {
  const { enqueueSnackbar } = useSnackbar();
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [categoriesError, setCategoriesError] = useState(false);
  const [courseHeader, setCourseHeader] = useState({});
  const [courseModules, setCourseModules] = useState([]);
  const [courseCategories, setCourseCategories] = useState([]);
  const [courseClasses, setCourseClasses] = useState([]);
  const [modulesNumber, setModulesNumber] = useState(0);
  const [editStatus, setEditStatus] = useState(0);
  const [order, setOrder] = useState(0);
  const [position, setPosition] = useState(0);

  useEffect(() => {
    console.log(courseHeader);
    console.log(courseModules);
    console.log(courseClasses);
    console.log(courseCategories);
  }, [courseHeader, courseModules, courseClasses, courseCategories]);

  // =============================================== controle de modais

  // const [categoriesModalOpen, setCategoriesModalOpen] = useState(false);

  // ==================================================================

  const handleSetEditStatus = useCallback(status => {
    setEditStatus(status);
  }, []);

  const handleSetCourseHeader = useCallback(data => {
    setCourseHeader(data);
  }, []);

  const handleSetCourseCategories = useCallback(data => {
    setCourseCategories(data);
  }, []);

  const handleSetModulesNumber = useCallback(number => {
    setModulesNumber(number);
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

  // =============================================== controle de modais

  // const handleCategoriesModalOpen = useCallback(() => {
  //   setCategoriesModalOpen(true);
  // }, []);

  // const handleCategoriesModalClose = useCallback(() => {
  //   setCategoriesModalOpen(false);
  // }, []);

  // ==================================================================

  const getCoursesCategories = useCallback(async () => {
    if (categories.length === 0) {
      try {
        setLoading(true);
        const response = await api.get('/category/0');

        if (response.status !== 200) {
          setLoading(false);
          setCategoriesError(true);
          return;
        }

        setLoading(false);
        setCategoriesError(false);

        const categoriesData = await response.data;
        setCategories(categoriesData);
        console.log(categoriesData);
      } catch (error) {
        console.log(error);
      }
    }
  }, [categories]);

  // const handleToogleCourseCategories = useCallback(
  //   categoryId => {
  //     const verification = courseCategories.filter(category => {
  //       return category.id === parseInt(categoryId, 10);
  //     });

  //     const categoriesToSet = courseCategories;

  //     if (verification.length === 0) {
  //       categories.forEach((item, index) => {
  //         if (item.id === parseInt(categoryId, 10)) {
  //           categoriesToSet.push(categories[index]);
  //         }
  //       });
  //     } else if (verification.length > 0) {
  //       courseCategories.forEach((item, index) => {
  //         if (item.id === parseInt(categoryId, 10)) {
  //           categoriesToSet.splice(index, 1);
  //         }
  //       });
  //     }

  //     setCourseCategories(categoriesToSet);
  //   },
  //   [categories, courseCategories],
  // );

  const saveCourse = async ({ courseName, description }) => {
    console.log(courseName);
    console.log(description);

    // try {
    //   const response = await fetch('http://localhost:3001/login', {
    //     method: 'GET',
    //     headers: {
    //       'Content-Type': 'application/json',
    //       Authorization: `Basic ${btoa(`${email}:${password}`)}`,
    //     },
    //   });

    //   if (response.status !== 200) {
    //     history.push('/');
    //   }

    //   const userData = await response.json();
    //   login(userData);
    // } catch (error) {
    //   console.log('error:', error);
    // }
  };

  const cancelEditCourse = useCallback(() => {
    setCategories([]);
    setCourseHeader({});
    setCourseModules([]);
    setCourseClasses([]);
    setCourseCategories([]);
    setModulesNumber(0);
  }, []);

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
        // categoriesModalOpen,
        // handleCategoriesModalOpen,
        // handleCategoriesModalClose,
        categories,
        loading,
        categoriesError,
        modulesNumber,
        handleSetModulesNumber,
        getCoursesCategories,
        courseCategories,
        // handleToogleCourseCategories,
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
