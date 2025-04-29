// src/components/Header.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';
import { useSelector } from 'react-redux';
import { serverURL } from '../../libs/http';
import { useDispatch } from 'react-redux';
import { clearUser } from '../../redux/userSlice';

const Header = () => {
    const dispatch = useDispatch();
    const navigator = useNavigate();
    const {avatarUrl, username, email, role} = useSelector(state => state.user);
    const isSaler = (role === "SALER");
    const isLogin = !!username;
    const [showMenuPerson, setShowMenuPerson] = useState(false);
    const [keyword, setKeyword] = useState("");
    
    const logoutHandler = () => {
        dispatch(clearUser());
        fetch(serverURL + "/api/admin/account/logout", {
            method: "POST",
        }).catch(err => console.log(err))
    }

    return (
        <header className="header">
        <h1 onClick={() => {navigator("/")}}>Admin</h1>
        {/* avatar */}
        <div className="wrap-center">
            <input onKeyDown={(e) => {
                if (e.key === "Enter" && keyword.trim()) {
                    navigator(`/search?q=${encodeURIComponent(keyword)}`);
                    setKeyword("");
                }
            }} onChange={(e) => setKeyword(e.target.value)} value={keyword} type="text" className="input-find" placeholder='Tìm người dùng, sản phẩm tại đây'/>
        </div>
        
        <div className="wrap-right">
            <div className="wrap-avatar" onClick={() => setShowMenuPerson(true)}>
                {avatarUrl ? <img className="avatar" src={avatarUrl}/>: <i className="bi bi-person-bounding-box icon"></i>}
            </div>
            {/* <div className="wrap-cart" onClick={() => navigator('/cart')}>
                <i class="bi bi-cart4 icon-mini"></i>
            </div> */}
        </div>
        {/* menu */}
        {showMenuPerson && <div className="menuPerson" onClick={() => {setShowMenuPerson(false)}}>
            <div className="wrap-menu">
                <div className="wrap-top">
                    {avatarUrl ? <img className="avatar" src={avatarUrl}/>: <i className="bi bi-person-bounding-box avatar-icon"></i>}
                        <div className="wrap-email">
                            <h5 className="email">{email}</h5>
                        </div>
                    </div>
                <div className="wrap-center">
                    <Link className="link" to="/order"></Link>
                </div>
                <div className="wrap-bottom">
                    <div className="wrap-btns">
                        {isLogin && <Link onClick={logoutHandler}>logout</Link>}
                        {!isLogin &&  <Link to="/signin">đăng nhập</Link>}
                    </div>
                </div>
            </div>
        </div>}
        </header>
    );
};

export default Header;
