// components/pages/LoginPage.js
import React from 'react';
import LoginForm from '../organisms/LoginForm';
import AuthTemplate from '../templates/AuthTemplate';

const LoginPage = () => {
  return (
    <AuthTemplate
      header={<h1>Welcome Back!</h1>}
      form={<LoginForm />}
      footer={<p>&copy; 2024 Leewayhertz</p>}
    />
  );
};

export default LoginPage;
