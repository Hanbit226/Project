// useEffect import 
import React,{useEffect} from 'react';

import { useDispatch, useSelector } from 'react-redux';
// auth module register import
import { changeField, initializeForm,register } from '../../modules/auth';

import AuthForm from '../../components/auth/AuthForm';

import { check } from '../../modules/user'

const RegisterForm = () => {
    const dispatch = useDispatch();
    // user add
    const { form, auth, authError,user } = useSelector(({ auth,user }) => ({
      form: auth.register,
      auth: auth.auth,
      authError: auth.authError,
    //   add
      user: user.user
     
    }));
    // input change event 로 액션 디스패치. 디스패치 : 액션을 발생시키는 것.
    const onChange = e => {
        const { value, name } = e.target;
        dispatch(
          changeField({
            form: 'register',
            key: name,
            value,
          }),
        );
      };
    // form submit event 로 register 함수에 현재 username, password 를 파라미터로 넣어서 액션 디스패치. 
    // 사가에 대한 API 요청 처리후, 이에 대한 결과를 auth/authError 를 통해 조회
    const onSubmit = e => {
        e.preventDefault();
        const { username, password, passwordConfirm } = form;
        console.log(e);
        
        
        if (password !== passwordConfirm){
            // 오류처리 할 것임
            return ; 
        }
        dispatch(register({ username, password }));
    };


    // 컴포넌트 초기 렌더링시 form 초기화
    useEffect(()=>{
        // 액션 생성 함수 import
        dispatch(initializeForm('register'));
    },[dispatch]);

    // auth, authError 값 중에서 무엇이 유효한지에 따라 다른 작업을 함.
    useEffect(()=>{
        if (authError){
            console.log('오류 발생');
            console.log(authError);
            return;
        }
        if(auth){
            console.log('회원가입 성공');
            console.log(auth);
            // 회원가입이 성공하면 check 액션 디스패치.
            dispatch(check());
        }
    },[auth,authError,dispatch])
    // user check API 확인
    useEffect(()=>{
        if(user){
            console.log('check API 성공');
            console.log(user)
        }
    },[user])

    return (
        
       <AuthForm
       type="register"
       form={form}
       onChange={onChange}
       onSubmit={onSubmit} 
       />
    );
};

export default RegisterForm;