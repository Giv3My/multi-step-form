import React from 'react';

const initialFields = (fields) => {
  return fields.map((field) => ({
    ...field,
    error: false,
  }));
};

export const useForm = (...fields) => {
  const [formFields, setFormFields] = React.useState(initialFields(fields));
  const [formError, setFormError] = React.useState(true);
  const [formValues, setFormValues] = React.useState({});

  React.useEffect(() => {
    if (isFormValid) {
      setFormValues(
        formFields.reduce((userData, field) => {
          return { ...userData, [field.name]: field.value };
        }, {})
      );
    }

    setFormError(!isFormValid);
  }, [formFields]);

  const setErrorFields = () => {
    if (!isFormValid) {
      setFormFields((prev) =>
        prev.map((field) => ({ ...field, error: field.required && !field.value }))
      );
    }
  };

  const isFormValid = React.useMemo(
    () => formFields.filter((field) => field.required).every((field) => field.value),
    [formFields]
  );

  return { setErrorFields, formValues, formFields, setFormFields, formError };
};
