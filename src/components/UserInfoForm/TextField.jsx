import React from 'react';

export const TextField = ({
  label,
  type,
  placeholder,
  value,
  onChange,
  error,
  errorMessage,
  required,
}) => {
  return (
    <div className="form-field">
      <p className="field-title">{label}</p>
      <div className={`textfield ${error ? 'error' : ''}`}>
        <input
          type={type ?? 'text'}
          className="textfield-input"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
        />
        <p className="error-message">{errorMessage}</p>
      </div>
    </div>
  );
};
