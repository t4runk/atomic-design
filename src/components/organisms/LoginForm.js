// // components/organisms/LoginForm.js
// import React, { useState } from 'react';
// import LabeledInput from '../molecules/LabeledInput';
// import Button from '../atoms/Button';

// const LoginForm = ({ onSubmit }) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = (e) => {
//     e.preventDefault();
//     onSubmit({ username, password });
//   };

//   return (
//     <form onSubmit={handleLogin} className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto">
//       <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Login</h2>
//       <LabeledInput
//         label="Username"
//         type="text"
//         placeholder="Enter your username"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//       />
//       <LabeledInput
//         label="Password"
//         type="password"
//         placeholder="Enter your password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <Button label="Login" type="submit" className="mt-6 w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors" />
//     </form>
//   );
// };

// export default LoginForm;

// components/organisms/LoginForm.js
// import React, { useState } from 'react';
// import LabeledInput from '../molecules/LabeledInput';
// import Button from '../atoms/Button';

// const LoginForm = ({ onSubmit }) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [errors, setErrors] = useState({});

//   const handleLogin = (e) => {
//     e.preventDefault();

//     // Validate input fields
//     let formErrors = {};
//     if (!username.trim()) {
//       formErrors.username = 'Username is required';
//     }
//     if (!password.trim()) {
//       formErrors.password = 'Password is required';
//     }

//     setErrors(formErrors);

//     // If there are no errors, submit the form
//     if (Object.keys(formErrors).length === 0) {
//       onSubmit({ username, password });
//     }
//   };

//   return (
//     <form onSubmit={handleLogin} className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto">
//       <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Login</h2>
      
//       {/* Username Input with Error Display */}
//       <LabeledInput
//         label="Username"
//         type="text"
//         placeholder="Enter your username"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//       />
//       {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}
      
//       {/* Password Input with Error Display */}
//       <LabeledInput
//         label="Password"
//         type="password"
//         placeholder="Enter your password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
      
//       <Button label="Login" type="submit" className="mt-6 w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors" />
//     </form>
//   );
// };

// export default LoginForm;
// components/organisms/LoginForm.js
import React, { useState } from 'react';
import LabeledInput from '../molecules/LabeledInput';
import Button from '../atoms/Button';

const LoginForm = ({ onSubmit }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleLogin = (e) => {
    e.preventDefault();

    // Validation logic
    let formErrors = {};
    if (!username.trim()) {
      formErrors.username = 'Username is required';
    }
    if (!password.trim()) {
      formErrors.password = 'Password is required';
    }

    setErrors(formErrors);

    // If no errors, submit the form
    if (Object.keys(formErrors).length === 0) {
      onSubmit({ username, password });
      setUsername('');
      setPassword('');
    }
  };

  return (
    <form onSubmit={handleLogin} className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto">
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Login</h2>
      
      {/* Username Input with Error Display */}
      <LabeledInput
        label="Username"
        type="text"
        placeholder="Enter your username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        hasError={!!errors.username}
      />
      {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username}</p>}
      
      {/* Password Input with Error Display */}
      <LabeledInput
        label="Password"
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        hasError={!!errors.password}
      />
      {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
      
      <Button label="Login" type="submit" className="mt-6 w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors" />
    </form>
  );
};

export default LoginForm;
