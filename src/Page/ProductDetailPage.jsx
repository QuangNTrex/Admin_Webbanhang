import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { serverURL } from '../libs/http';
import "./ProductDetailPage.css";
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/cartSlice';
import ProductDetail from '../Component/UI/ProductDetail';

const ProductDetailPage = () => {
    const  dispatch = useDispatch();
    const navigator = useNavigate();
    const {id} = useParams();
    

    return <ProductDetail productID = {id}/>
}
export default ProductDetailPage;