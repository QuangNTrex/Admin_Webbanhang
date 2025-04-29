// src/components/UserItem.jsx
import React from 'react';
import './UserItem.css';
import { useNavigate, useParams } from 'react-router-dom';

const UserItem = ({user}) => {
  const navigate = useNavigate();
  return (
    <div className="UserItem" onClick={() => navigate("/user/" + user.userID, {state: user})}>
        <div className="wrap-top">
            <img src={user.avatarUrl} alt="" className="img" />
        </div>
        <div className="wrap-bottom">
            <p className="name">{user.name}</p>
            <p className="username">username: {user.username}</p>
        </div>
    </div>
  );
};

export default UserItem;
