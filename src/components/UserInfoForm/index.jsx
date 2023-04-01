import React from 'react';

import { useFormContext } from '../../context/FormContext';

import { TextField } from './TextField';

import './styles.scss';

export const UserInfoForm = () => {
  const { formFields, setFormFields } = useFormContext();

  const handleFieldChange =
    (name) =>
    ({ target: { value } }) => {
      setFormFields((prev) =>
        prev.map((field) =>
          field.name === name ? { ...field, value, error: false } : field
        )
      );
    };

  return (
    <form>
      <TextField
        label="Name"
        placeholder="e.g. Stephen King"
        value={formFields[0].value}
        onChange={handleFieldChange('name')}
        error={formFields[0].error}
        errorMessage="This field is required"
        required={formFields[0].required}
      />
      <TextField
        label="Email Address"
        type="email"
        placeholder="e.g. stephenking@lorem.com"
        value={formFields[1].value}
        onChange={handleFieldChange('email')}
        error={formFields[1].error}
        errorMessage="This field is required"
        required={formFields[1].required}
      />
      <TextField
        label="Phone Number"
        placeholder="e.g. +1 234 567 890"
        value={formFields[2].value}
        onChange={handleFieldChange('phone')}
        error={formFields[2].error}
        errorMessage="This field is required"
        required={formFields[2].required}
      />
    </form>
  );
};
