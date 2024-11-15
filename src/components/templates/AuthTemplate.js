// // components/templates/AuthTemplate.js
// import React from 'react';

// const AuthTemplate = ({ header, form, footer }) => (
//   <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
//     <div className="w-full max-w-md p-8">
//       <header className="mb-6 text-center text-2xl font-semibold">{header}</header>
//       <main>{form}</main>
//       <footer className="mt-6 text-center text-gray-500">{footer}</footer>
//     </div>
//   </div>
// );

// export default AuthTemplate;
// components/templates/AuthTemplate.js
import React from 'react';
import Container from '../atoms/Container';

const AuthTemplate = ({ header, form, footer }) => (
  <Container className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
    <div className="w-full max-w-md p-8">
      <header className="mb-6 text-center text-2xl font-semibold">{header}</header>
      <main>{form}</main>
      <footer className="mt-6 text-center text-gray-500">{footer}</footer>
    </div>
  </Container>
);

export default AuthTemplate;
