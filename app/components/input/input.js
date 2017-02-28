import React from 'react';

const Input = ({onChange, value, name, placeholder, type, className, checked, disabled}) => (
  <input  type={type}
          name={name}
          onChange={onChange}
          value={value}
          checked={checked}
          className={className}
          disabled={disabled}/>
)

export default Input;
