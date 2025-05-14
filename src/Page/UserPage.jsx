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
          <h3>Active</h3>
          <UserList users={users.filter(user => user.status === "Active")} />
        </div>
        <div style={{ border: "1px solid black", marginBottom: "2rem" }}>
          <p className="">Banned</p>
          <UserList users={users.filter(user => user.status === "Banned")} />
        </div>
        <div style={{ border: "1px solid black", marginBottom: "2rem" }}>
          <p className="">Inactive</p>
          <UserList users={users.filter(user => user.status === "Inactive")} />
        </div>
      </div>
    </div>
  );
};

export default UserPage;
