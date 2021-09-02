import React, { createContext, useCallback, useContext } from 'react';
import { useSnackbar } from 'notistack';
import { api } from '../services/api';

export const StudentContext = createContext({});

export const StudentProvider = ({ children }) => {
  const { enqueueSnackbar } = useSnackbar();

  const enrollStudent = useCallback(
    async ({ studentId, courseId }) => {
      try {
        const { data } = await api.post('/buy', {
          studentId,
          courseId,
          paymentMethodId: '1',
          price: '0,00',
        });
        enqueueSnackbar('Matrícula efetuada com sucesso', {
          variant: 'success',
        });
        return data;
      } catch (error) {
        console.error(error);
        return null;
      }
    },
    [enqueueSnackbar],
  );

  return (
    <StudentContext.Provider
      value={{
        enrollStudent,
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
