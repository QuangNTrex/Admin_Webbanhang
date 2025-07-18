// src/pages/SignInPage.jsx
import React from 'react';
import AuthForm from '../Component/AuthForm/AuthForm';
import { serverURL } from "../libs/http";
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/userSlice';
// import { pushNotify } from '../redux/notifySlice';

const SignInPage = () => {

  const navigation = useNavigate();
  const state = useLocation().state || {};
  console.log(JSON.stringify(state));

  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const handleLogin = (data) => {
    fetch(serverURL + "/api/admin/account/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",

      },
      body: JSON.stringify({ Email: data.username, Password: data.password, email: data.username, password: data.password })
    })
      .then(response => response.json())
      .then(result => {
        console.log(result);
        dispatch(setUser(result.user))
        if (result.token) {
          // Lưu token vào localStorage
          localStorage.setItem('token', result.token);
          // dispatch(pushNotify({ title: "Đăng nhập thành công, chào mừng " + result.user.name + " đến với trang mua sắm" }))
          if (state.link) {
            navigation(state.link, { state });
          }
          else navigation('/');
        }
      })
      .catch(error => console.error("Login error:", error));
  };

  return <AuthForm type="signin" onSubmit={handleLogin} />;
};

export default SignInPage;