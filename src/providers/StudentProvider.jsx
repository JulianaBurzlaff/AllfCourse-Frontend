import React, { createContext, useCallback, useState, useContext } from 'react';
import { useSnackbar } from 'notistack';
import { api } from '../services/api';

export const StudentContext = createContext({});

export const StudentProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const { enqueueSnackbar } = useSnackbar();

  const enrollStudent = useCallback(async ({ studentId, courseId }) => {
    try {
      const { data } = await api.post('/buy', {
        studentId,
        courseId,
        paymentMethodId: 1,
        price: 0,
      });
      enqueueSnackbar('Matrícula efetuada com sucesso', {
        variant: 'success',
      });
      return data;
    } catch (error) {
      return null;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StudentContext.Provider
      value={{
        enrollStudent,
        setLoading,
        loading,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
};

export function useStudent() {
  const context = useContext(StudentContext);

  return context;
}
