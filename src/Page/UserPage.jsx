// src/pages/UserPage.jsx
import React, { useEffect, useState } from 'react';
import NavCategory from '../Component/UI/NavCategory';
import ProductList from '../Component/UI/ProductList';
import { serverURL } from '../libs/http';
import { useNavigate } from 'react-router-dom';
import UserList from '../Component/UserList/UserList';

const UserPage = () => {
  const [users, setUsers] = useState([]);
  const token = localStorage.getItem("token");


  useEffect(() => {
    fetch(serverURL + "/api/admin/account", {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    }).then(res => res.json()).then(data => {
      setUsers(data);
    }).catch(err => console.log(err))
  }, []);

  const navigation = useNavigate();



  return (
    <div className="UserPage">
      <div className="wrap-users" >
        <h2 className="title">Người dùng</h2>
        <div style={{ border: "1px solid black", marginBottom: "2rem" }}>
          <h3>Hoạt động</h3>
          <UserList users={users.filter(user => user.status === "Active")} />
          {users.filter(user => user.status === "Active").length === 0 && <p>Trống</p>}
        </div>
        <div style={{ border: "1px solid black", marginBottom: "2rem" }}>
          <h3 className="">Bị cấm</h3>
          <UserList users={users.filter(user => user.status === "Banned")} />
          {users.filter(user => user.status === "Banned").length === 0 && <p>Trống</p>}
        </div>
        <div style={{ border: "1px solid black", marginBottom: "2rem" }}>
          <h3 className="">Không hoạt động</h3>
          <UserList users={users.filter(user => user.status === "Inactive")} />
          {users.filter(user => user.status === "Inactive").length === 0 && <p>Trống</p>}
        </div>
      </div>
    </div>
  );
};

export default UserPage;
