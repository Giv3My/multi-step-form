import React from 'react';

import { useForm } from '../hooks/useForm';
import { useUpdateEffect } from '../hooks/useUpdateEffect';
import { useAppContext } from './AppContext';

const FormContext = React.createContext({});

export const FormProvider = ({ children }) => {
  const { userData, setUserData } = useAppContext();

  const { formFields, setFormFields, setErrorFields, formValues, formError } = useForm(
    { name: 'name', value: userData?.name || '', required: true },
    { name: 'email', value: userData?.email || '', required: true },
    { name: 'phone', value: userData?.phone || '', required: true }
  );

  useUpdateEffect(() => {
    if (!formError) {
      setUserData(formValues);
      localStorage.setItem('user-data', JSON.stringify(formValues));
    }
  }, [formValues]);

  return (
    <FormContext.Provider
      value={{ formFields, setFormFields, formError, setErrorFields }}
    >
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => React.useContext(FormContext);
