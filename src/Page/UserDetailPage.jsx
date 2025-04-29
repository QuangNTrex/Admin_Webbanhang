// src/pages/UserDetailPage.jsx
import React, { useEffect, useState } from 'react';
import { serverURL } from '../libs/http';
import { useNavigate,useLocation, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import UserDetail from '../Component/UI/UserDetail';

const UserDetailPage = () => {
    const [user, setUser ] = useState({});
    const userID = useParams().id;
    const pseudoUser = useLocation().state;
    console.log(userID);
    useEffect(() => {
        fetch(serverURL + "/api/admin/account/" + userID , {
            method: "POST",
            header: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer YOUR_TOKEN_HERE'
            }
        }).then(res => res.json()).then(data => {
            setUser(data);
        }).catch(err => {
            setUser(pseudoUser);
        })
    }, []);
    
    

    return <div className="UserDetailPage">
        <UserDetail user={user}></UserDetail>
    </div>;
};

export default UserDetailPage;
