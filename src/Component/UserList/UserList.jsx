// src/components/UserList.jsx
import React from 'react';
import './UserList.css';
import UserItem from './UserItem';

const UserList = ({users}) => {
  return (
    <div className="UserList">
        <div className="wrap">
            
        {users.map(user => <UserItem user={user}/>)}
        </div>
    </div>
  );
};

export default UserList;
