// components/organisms/LoginForm.js
import React, { useState } from 'react';
import LabeledInput from '../molecules/LabeledInput';
import Button from '../atoms/Button';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Handle login logic here
    console.log('Logging in with:', { username, password });
    alert("logged in");
  };

  return (
    <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
      <LabeledInput label="Username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      <LabeledInput label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <Button label="Login" onClick={handleLogin} />
    </form>
  );
};

export default LoginForm;
