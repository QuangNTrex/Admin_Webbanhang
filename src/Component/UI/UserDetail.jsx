import ProductCard from './ProductCard';
import './UserDetail.css';
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { serverURL } from '../../libs/http';
import ProductList from './ProductList';

const UserDetail = ({ userID, user }) => {
    // const [user, setUser] = useState({});
    const token = localStorage.getItem("token");
    const usernameRef = useRef();
    const gmailRef = useRef();
    const nameRef = useRef();
    const genderRef = useRef();
    const birthOfDateRef = useRef();
    const phoneNumberRef = useRef();
    const addressRef = useRef();
    const avatarUrlRef = useRef();
    const roleRef = useRef();

    const navigation = useNavigate();
    const pseudoUser = useLocation().state;

    // useEffect(() => {
    //     fetch(serverURL + "/api/account/" + userID, {
    //         method: "GET",
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Authorization': `Bearer ${token}`
    //         },
    //     }).then(res => res.json()).then(data => {
    //         setUser(data);
    //     }).catch(err => {
    //         console.log(err)
    //     })
    // }, [userID]);

    //const datee = new Date(user.birthOfDate).toISOString().split('T')[0]
    console.log(user.birthOfDate, "datee");

    const deleteAccountHandler = () => {
        return;
        fetch(serverURL + "/api/admin/account/delete/" + userID, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        }).then(res => {
            navigation("/");
        }).catch(err => {

        })
    }
    const updateAccountHandler = () => {
        fetch(serverURL + "/api/admin/account/update/" + userID, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                UserID: user.userID,
                Username: usernameRef.current.value,
                Gmail: gmailRef.current.value,
                Name: nameRef.current.value,
                Gender: genderRef.current.value ? true : false,
                BirthOfDate: birthOfDateRef.current.value,
                PhoneNumber: phoneNumberRef.current.value,
                Address: addressRef.current.value,
                AvatarUrl: avatarUrlRef.current.value,
            })
        }).then(res => res.json()).then(data => {
            navigation("/");
        }).catch(err => {

        })
    }
    const banAccountHandler = () => {
        fetch(serverURL + "/api/admin/account/ban/" + userID, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        }).then(res => {
            navigation("/")
            return res.json()
        }).then(data => {
            navigation("/")
        }).catch(err => {

        })
    }
    const undoBanAccountHandler = () => {
        fetch(serverURL + "/api/admin/account/undoban/" + userID, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        }).then(res => {
            navigation("/");
        }).catch(err => {
            console.log(err)
        })
    }

    return <div className="UserDetail">
        <div className="wrap-top wrap-top--">
            <div className="wrap-top-left">
                <div className="wrap-avatar">
                    <img src={user.avatarUrl} alt="" className="avatar" />
                </div>
                <div className="wrap-info">
                    <p className="name">{user.name}</p>
                </div>
            </div>
            <div className="wrap-top-right">
                <div className="wrap-top-right-left">
                    <p>Tên</p>
                    <p>Tên đăng nhập</p>
                    <p>Email</p>
                    <p>Giởi tính</p>
                    <p>Ngày sinh</p>

                    <p>Địa chỉ</p>
                    <p>Số điện thoại</p>
                    <p>Avatar</p>
                </div>
                <div className="wrap-top-right-right">
                    <input type="text" className="name" ref={nameRef} defaultValue={user.name} />
                    <input type="text" className="username" ref={usernameRef} defaultValue={user.username} />
                    <input type="text" className="email" ref={gmailRef} defaultValue={user.email} />
                    <div>
                        <label htmlFor="">Nam</label>
                        <input type="radio" name="gender" className="gender" ref={genderRef} value="Nam" checked={user.gender} />
                        <label htmlFor="">Nữ</label>
                        <input type="radio" name="gender" className="gender" value="Nữ" checked={!user.gender} />
                    </div>

                    <input type="date" className="birthOfDate" defaultValue={new Date(user.birthOfDate || Date.now()).toISOString().split('T')[0]} ref={birthOfDateRef} />

                    <input type="text" className="" ref={addressRef} defaultValue={user.address} />
                    <input type="text" className="" ref={phoneNumberRef} defaultValue={user.phoneNumber} />
                    <input type="text" className="" ref={avatarUrlRef} defaultValue={user.avatarUrl} />
                </div>
            </div>
        </div>
        <div className="wrap-bottom">
            <h3 className="title">Tùy chọn</h3>
            <div className="wrap-btn">
                {user.status === "Banned" ? <button className="btn btn-ban" onClick={undoBanAccountHandler}>Hủy cấm</button> : <button className="btn btn-ban" onClick={banAccountHandler}>Cấm</button>}

                <button className="btn btn-delete" onClick={deleteAccountHandler}>Xóa</button>
                <button className="btn btn-update" onClick={updateAccountHandler}>Cập nhật</button>
            </div>
        </div>
    </div>
}
export default UserDetail;