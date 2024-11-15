
import React from 'react';
import LoginForm from '../organisms/LoginForm';
import AuthTemplate from '../templates/AuthTemplate';

const LoginPage = () => {

const onsubmit=({username,password})=>{
console.log(username,password);
alert("logged in successfully")
}
  return (
    <AuthTemplate
      header={<h1>Welcome Back!</h1>}
      form={<LoginForm  onSubmit={onsubmit}/>}
      footer={<p>&copy; 2024 Leewayhertz</p>}
    />
  );
};

export default LoginPage;
