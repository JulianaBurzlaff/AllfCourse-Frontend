import React, { createContext, useCallback, useState, useEffect } from 'react';
import { api } from '../services/api';

export const TeacherContext = createContext({});

export const TeacherProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [categoriesError, setCategoriesError] = useState(false);
  const [courseModules, setCourseModules] = useState([]);
  const [courseCategories, setCourseCategories] = useState([]);
  const [courseClasses, setCourseClasses] = useState([]);
  const [modulesNumber, setModulesNumber] = useState(0);

  const [categoriesModalOpen, setCategoriesModalOpen] = useState(false);
  const [modulesModalOpen, setModulesModalOpen] = useState(false);

  const [editStatus, setEditStatus] = useState(0);

  useEffect(() => {
    setCourseModules([
      {
        id: '1',
        name: 'Preparação',
        description: 'Primeiros passos para uma hipnose',
        order: '1',
      },
      {
        id: '2',
        name: 'Preparação 2',
        description: 'Segundos passos para uma hipnose',
        order: '2',
      },
      {
        id: '3',
        name: 'Preparação 3',
        description: 'Terceiros passos para uma hipnose',
        order: '3',
      },
    ]);

    setCourseClasses([
      {
        id: '1',
        name: 'Dormindo modulo 1 order1',
        description: 'Tô com sono',
        order: '1',
        position: 0,
        link: 'www.youtube.com',
        inactive: false,
      },
      {
        id: '2',
        name: 'Dormindo  modulo 1 order2',
        description: 'Tô com sono',
        order: '2',
        position: 0,
        link: 'www.youtube.com',
        inactive: false,
      },
      {
        id: '3',
        name: 'Acordando  modulo 2 order1',
        description: 'Ainda Tô com sono',
        order: '1',
        position: 1,
        link: 'www.youtube.com',
        inactive: false,
      },
      {
        id: '4',
        name: 'Dormindo modulo 2 order2',
        description: 'Ainda Tô com sono',
        order: '2',
        position: 1,
        link: 'www.youtube.com',
        inactive: false,
      },
      {
        id: '5',
        name: 'Dormindo modulo 3 order1',
        description: 'Morrendo de sono',
        order: '1',
        position: 2,
        link: 'www.youtube.com',
        inactive: false,
      },
      {
        id: '6',
        name: 'Dormindo modulo 3 order2',
        description: 'Morrendo de sono',
        order: '2',
        position: 2,
        link: 'www.youtube.com',
        inactive: false,
      },
      {
        id: '7',
        name: 'Dormindo modulo 3 order3',
        description: 'Morrendo de sono',
        order: '3',
        position: 2,
        link: 'www.youtube.com',
        inactive: false,
      },
    ]);
  }, []);

  const handleCategoriesModalOpen = useCallback(() => {
    setCategoriesModalOpen(true);
  }, []);

  const handleCategoriesModalClose = useCallback(() => {
    setCategoriesModalOpen(false);
  }, []);

  const handleModulesModalOpen = useCallback(() => {
    setModulesModalOpen(true);
  }, []);

  const handleModulesModalClose = useCallback(() => {
    setModulesModalOpen(false);
  }, []);

  const handleSetEditStatus = useCallback(status => {
    setEditStatus(status);
  }, []);

  const handleSetModulesNumber = useCallback(number => {
    setModulesNumber(number);
  }, []);

  const handleAddCourseModule = useCallback(module => {
    setCourseModules(module);
  }, []);

  const handleRemoveCourseModule = useCallback(moduleId => {
    setCourseModules(moduleId);
  }, []);

  const handleAddCourseClasse = useCallback(classe => {
    setCourseClasses(classe);
  }, []);

  const handleRemoveCourseClasse = useCallback(classeId => {
    setCourseClasses(classeId);
  }, []);

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
      } catch (error) {
        console.log(error);
      }
    }
  }, [categories]);

  const handleToogleCourseCategories = useCallback(
    categoryId => {
      const verification = courseCategories.filter(category => {
        return category.id === parseInt(categoryId, 10);
      });

      const categoriesToSet = courseCategories;

      if (verification.length === 0) {
        categories.forEach((item, index) => {
          if (item.id === parseInt(categoryId, 10)) {
            categoriesToSet.push(categories[index]);
          }
        });
      } else if (verification.length > 0) {
        courseCategories.forEach((item, index) => {
          if (item.id === parseInt(categoryId, 10)) {
            categoriesToSet.splice(index, 1);
          }
        });
      }

      setCourseCategories(categoriesToSet);
    },
    [categories, courseCategories],
  );

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

  const saveModule = async ({ name, description }) => {
    console.log(name);
    console.log(description);
  };

  return (
    <TeacherContext.Provider
      value={{
        editStatus,
        handleSetEditStatus,
        categoriesModalOpen,
        handleCategoriesModalOpen,
        handleCategoriesModalClose,
        modulesModalOpen,
        handleModulesModalOpen,
        handleModulesModalClose,
        categories,
        loading,
        categoriesError,
        modulesNumber,
        handleSetModulesNumber,
        getCoursesCategories,
        courseCategories,
        handleToogleCourseCategories,
        courseModules,
        handleAddCourseModule,
        handleRemoveCourseModule,
        courseClasses,
        handleAddCourseClasse,
        handleRemoveCourseClasse,
        saveCourse,
        saveModule,
      }}
    >
      {children}
    </TeacherContext.Provider>
  );
};
