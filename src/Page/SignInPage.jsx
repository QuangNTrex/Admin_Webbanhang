// src/pages/SignInPage.jsx
import React from 'react';
import AuthForm from '../Component/AuthForm/AuthForm';
import {serverURL} from "../libs/http";
import { useNavigate } from 'react-router-dom';

const SignInPage = () => {
  const navigation = useNavigate();
  const handleLogin = (data) => {
    console.log('Login with:', data, serverURL);
    navigation("/")

    return;

    fetch(serverURL + "/api/admin/account/signin", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: data.username, password: data.password })
    }).then(res => {
      const token = res.headers.get('Authorization'); // hoặc 'x-access-token'
      console.log(token);
      localStorage.setItem("token", token);
      return res.json();
    }).then(data => console.log(data));
  };

  return <AuthForm type="signin" onSubmit={handleLogin} />;
};

export default SignInPage;
