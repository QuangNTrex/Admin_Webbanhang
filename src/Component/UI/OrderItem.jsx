import { useEffect, useState } from 'react';
import './OrderItem.css';
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import CheckoutItem from './CheckoutItem';
import { serverURL } from '../../libs/http';



const OrderItem = ({ order, onDeleteOrder = () => { }, onConfirmOrder = () => { } }) => {
    const [vendor, setVendor] = useState({})
    const [buyer, setBuyer] = useState({})
    const token = localStorage.getItem("token");

    useEffect(() => {
        fetch(serverURL + "/api/admin/account/" + order.vendorId, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        }).then(res => res.json()).then(data => {
            setVendor(data)
        }).catch(err => {
            console.log(err);
        })

        fetch(serverURL + "/api/admin/account/" + order.buyerId, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        }).then(res => res.json()).then(data => {
            setBuyer(data)
        }).catch(err => {
            console.log(err);
        })
    }, [order.buyerId, order.vendorId])
    const navigate = useNavigate()

    return <div className="OrderItem" >
        <div className="OrderItem--wrap">

            <div className="OrderItem--wrap-top">
                <div className="OrderItem--wrap-top-left">

                    <p className="id">ID đơn hàng: {order.orderID}</p>
                    <p className="date">Ngày đặt: {order.createdAt}</p>
                </div>

                <div className="OrderItem--wrap-top-center">
                    <p className="buyer">Tên người bán: {vendor.name}</p>
                    <p className="email">Email người bán: {vendor.email}</p>

                </div>
                <div className="OrderItem--wrap-top-bottom">
                    <p className="buyer">Tên người mua: {buyer.name}</p>
                    <p className="email">Địa chỉ: {buyer.address}</p>
                </div>
            </div>
            <div className="OrderItem--wrap-center">
                {order.orderDetails.map(e => <CheckoutItem productID={e.productID} />)}
            </div>
            <div className="OrderItem--wrap-bottom">
                <div className="OrderItem--wrap-bottom-right">

                    <h3 className="total-price" style={{ textAlign: "right" }}>Thành tiền: {order.orderDetails.reduce((total, e) => total + e.price, 0)} VND</h3>
                    {order.status !== "CANCELATION" && <div className="wrap-button" >
                        {order.status !== "CONFIRMED" && <button className="btn-confirm btn" onClick={onConfirmOrder.bind(null, order)}>Xác nhận đơn hàng</button>}
                        {order.status === "CONFIRMED" && <p>Đã xác nhận đơn hàng</p>}
                    </div>}
                    {order.status === "CANCELATION" && <div>
                        <p>Người dùng đã hủy đơn hàng này.</p>
                        <p>Lý do hủy đơn hàng: {order.reasonCancelation}</p>
                    </div>}
                </div>
            </div>
        </div>
    </div>

}
export default OrderItem;