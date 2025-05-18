// src/pages/CheckoutItem.jsx
import { useDispatch } from "react-redux";
import "./CheckoutItem.css"
import { addProduct, changeProduct, deleteProduct } from "../../redux/cartSlice";
import { useEffect, useState } from "react";
import { serverURL } from "../../libs/http";


const CheckoutItem = ({ productID, quantity = 1 }) => {
    const token = localStorage.getItem("token")
    const [product, setProduct] = useState({});
    const dispatch = useDispatch();
    function shortenString(str = "", num = 50) {
        if (str.length <= num) return str;
        return str.slice(0, num) + '...';
    }

    useEffect(() => {
        fetch(serverURL + "/api/product/" + productID, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        }).then(res => res.json()).then(data => {
            console.log(data);
            setProduct(data);
            //user
            // fetch(serverURL + "/api/admin/account/" + data.userID, {
            //     method: "GET",
            //     header: {
            //         'Content-Type': 'application/json',
            //         'Authorization': `Bearer ${token}`
            //     }
            // }).then(res => res.json()).then(data => {
            //     console.log(data);
            //     setUser(data);

            // }).catch(err => console.log(err))
        }).catch(err => console.log(err))


    }, [productID]);

    return (
        <div className="CheckoutItem">
            <div className="wrap-left">
                <div className="wrap-img">
                    <img src={product.images} alt="" className="img" />
                </div>
                <div className="wrap-title">
                    <p className="title">{shortenString(product.title)}</p>
                </div>
            </div>
            <div className="wrap-center">
                <p className="title">Đơn giá: {product.price}</p>
                <div className="wrap-quantity">
                    <p>Số lượng: {quantity}</p>
                </div>
                <p className="total-price">Thành tiền: {product.price * (Number(product.quantity) || 1)}</p>
            </div>
        </div>
    );
};

export default CheckoutItem;
