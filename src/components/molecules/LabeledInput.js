import React from 'react';
import Input from '../atoms/Input';

const LabeledInput = ({ label, type, placeholder, value, onChange, hasError }) => (
  <div className="mb-2">
    <label className="block text-gray-800 font-medium text-sm mb-1">
      {label}
    </label>
    <Input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`w-full px-4 py-2 border ${hasError ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 ${hasError ? 'focus:ring-red-500' : 'focus:ring-blue-400'}`}
    />
  </div>
);

export default LabeledInput;
