import React from 'react';

const FormRow = ({ type, name, labelText, defaultValue, onChange }) => {
  return (
    <div className='from-row'>
      <label htmlFor={name} className='form-label'>
        {labelText || name}
      </label>
      <input
        className='form-input'
        type={type}
        id={name}
        name={name}
        defaultValue={defaultValue || ''}
        required
        onChange={onChange}
      />
    </div>
  );
};

export default FormRow;
