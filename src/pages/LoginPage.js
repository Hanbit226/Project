// login
import React from 'react';
import AuthTemplate from '../components/auth/AuthTemplate';
import AuthForm from '../components/auth/AuthForm';
// LoginForm import
import LoginForm from '../containers/LoginForm';
const LoginPage = () => {
  return(

    <AuthTemplate>
      <LoginForm />
    </AuthTemplate>
  );
};

export default LoginPage;