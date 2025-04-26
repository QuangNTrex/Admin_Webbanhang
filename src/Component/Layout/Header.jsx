// src/components/Header.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { useSelector } from 'react-redux';
import { serverURL } from '../../libs/http';
import { useDispatch } from 'react-redux';
import { clearUser } from '../../redux/userSlice';

const Header = () => {
    const {avatarUrl, username, email} = useSelector(state => state.user);
    const isLogin = !!username;
    const [showMenuPerson, setShowMenuPerson] = useState(false);
    const dispatch = useDispatch();

    const logoutHandler = () => {
        fetch(serverURL + "/api/admin/account/logout", {
            method: 'GET',
            headers: {
            'Authorization': `Bearer ${localStorage.getItem("token")}`
            }
        }).then(res => {
            if(res.ok) {
                //logout
                dispatch(clearUser());
            }
        })
    }
    
    return (
        <header className="header">
        <h1>Admin</h1>
        {/* avatar */}
        <div className="wrap-avatar" onClick={() => setShowMenuPerson(true)}>
            {avatarUrl ? <img className="avatar" src={avatarUrl}/>: <i className="bi bi-person-bounding-box"></i>}
        </div>
        {showMenuPerson && <div className="menuPerson">
            <div className="wrap-menu">
                {avatarUrl ? <img className="avatar" src={avatarUrl}/>: <i className="bi bi-person-bounding-box"></i>}
                <div className="wrap-email">
                    <h5 className="email">{email}</h5>
                </div>
                
                <div className="wrap-btns">
                    {isLogin && <Link onClick={logoutHandler}>logout</Link>}
                    {!isLogin &&  <Link to="/signin">login</Link>}
                    {!isLogin &&  <Link to="/signup">sign up</Link>}
                </div>
            </div>
        </div>}
        </header>
    );
};

export default Header;
