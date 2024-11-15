
import React from 'react';

const Container = ({ children, className }) => (
  <div className={`max-w-4xl min-h-screen mx-auto px-4 ${className}`}>
    {children}
  </div>
);

export default Container;
