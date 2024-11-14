// components/molecules/LabeledInput.js
import React from 'react';
import Input from '../atoms/Input';

const LabeledInput = ({ label, type, placeholder, value, onChange }) => (
  <div className="labeled-input">
    <label>{label}</label>
    <Input type={type} placeholder={placeholder} value={value} onChange={onChange} />
  </div>
);

export default LabeledInput;
