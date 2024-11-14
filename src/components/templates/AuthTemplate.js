// components/templates/AuthTemplate.js
import React from 'react';

const AuthTemplate = ({ header, form, footer }) => (
  <div className="auth-template">
    <header>{header}</header>
    <main>{form}</main>
    <footer>{footer}</footer>
  </div>
);

export default AuthTemplate;
