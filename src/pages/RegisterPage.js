// register
import React from 'react';
import AuthTemplate from '../components/auth/AuthTemplate';
import AuthForm from '../components/auth/AuthForm';
// regitserform import
import RegisterForm from '../containers/RegisterForm';
const RegisterPage = () => {
  return (
    <AuthTemplate>
     <RegisterForm />
    </AuthTemplate>);
};


export default RegisterPage;