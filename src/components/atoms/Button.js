// components/atoms/Button.js
import React from 'react';

const Button = ({ label, onClick, type = 'button', className }) => (
  <button type={type} onClick={onClick} className={className}>
    {label}
  </button>
);

export default Button;
