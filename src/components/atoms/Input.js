
import React from 'react';

const Input = ({ type = 'text', placeholder, value, onChange, className }) => (
  <input
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    className={`py-2 px-4 border rounded w-full ${className}`}
  />
);

export default Input;
