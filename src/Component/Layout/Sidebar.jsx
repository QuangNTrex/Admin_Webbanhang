// src/components/Sidebar.jsx
import React from 'react';
import './Sidebar.css';
import { Link, useNavigate, NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="Sidebar">
        <NavLink to="/">Trang chủ</NavLink>
        <NavLink to="/user">Người dùng</NavLink>
      <NavLink to="/category">Thể loại</NavLink>
      <NavLink to="/order">Đơn người dùng đã đặt </NavLink>
    </div>
  );
};

export default Sidebar;
