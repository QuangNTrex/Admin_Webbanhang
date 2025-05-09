// src/pages/UserDetailPage.jsx
import React, { useEffect, useState } from 'react';
import { serverURL } from '../libs/http';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import UserDetail from '../Component/UI/UserDetail';

const UserDetailPage = () => {
    const [user, setUser] = useState({});
    const userID = useParams().id;
    const pseudoUser = useLocation().state;
    const token = localStorage.getItem("token");

    console.log(userID);
    useEffect(() => {
        fetch(serverURL + "/api/admin/account/" + userID, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        }).then(res => res.json()).then(data => {
            setUser(data);
        }).catch(err => {
            // setUser(pseudoUser);
            console.log(err)
        })
    }, []);
    console.log(user);

    return <div className="UserDetailPage">
        <UserDetail user={user} userID={user.userID}></UserDetail>
    </div>;
};

export default UserDetailPage;
