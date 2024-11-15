// components/atoms/Button.js
import React from 'react';

const Button = ({ label, onClick, type = 'button', className }) => (
  <button
    type={type}
    onClick={onClick}
    className={`py-2 px-4 font-semibold text-white bg-blue-500 hover:bg-blue-600 rounded ${className}`}
  >
    {label}
  </button>
);

export default Button;
