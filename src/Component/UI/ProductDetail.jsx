import './ProductDetail.css';
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { serverURL } from '../../libs/http';

const ProductDetail = ({productID}) => {
    const [product, setProduct] = useState({product: {
        productID: "ahihi",
        avatarUrl: "https://down-vn.img.sproductcontent.com/file/vn-11134216-7r98o-lvvpsh3mxz2z4c@resize_w160_nl.webp",
        name: "MuscleStore -Thực Phẩm Bổ Sung",
    }, productID: "1111",price: 1000,
    title: "Creatine Monohydrate - Ostrovit (300g, 500g) Tăng Cơ, Tăng Sức Mạnh & Hiệu Suất Tập Luyện", 
    description: "OstroVit Creatine Monohydrate là sản phẩm bổ sung creatine monohydrate với mức độ vi mô hóa tuyệt vời. Creatine là một chất bổ sung được biết đến và sử dụng rộng rãi. Hiệu quả của nó đã được xác nhận bởi nhiều nghiên cứu khoa học. Nó cung cấp sự phát triển cơ bắp tốt hơn, tái tạo hiệu quả và năng lượng để tập luyện lâu hơn, hiệu quả hơn. Creatine là một hợp chất hóa học hữu cơ xuất hiện tự nhiên trong cơ thể con người. Nó thường được cung cấp cùng với các sản phẩm từ thịt động vật, trứng hoặc cá. Tác dụng có lợi của nó dựa trên một cơ chế đơn giản giải phóng năng lượng dưới dạng các phân tử năng lượng cao ATP (adenosine triphosphate) thông qua sự phân hủy phosphocreatine trong cơ. Mặc dù thực tế là creatine cũng có trong thực phẩm, nhưng cách duy nhất để giúp cơ bắp của chúng ta bão hòa 100% với creatine là bổ sung nó liên tục", 
    images: "https://down-vn.img.sproductcontent.com/file/vn-11134207-7r98o-lzr6bvyk5kf503"});

    const titleRef = useRef();
    const descRef = useRef();
    const priceRef = useRef();
    const conditionRef = useRef();
    const imagesRef = useRef();
    const locationRef = useRef();

    const navigation = useNavigate();
   
    
    useEffect(() => {
            fetch(serverURL + "/api/product/" + productID, {
                method: "GET",
                header: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer YOUR_TOKEN_HERE'
                },
                body: JSON.stringify({id: productID})
            }).then(res => res.json()).then(data => {
                    setProduct(data);
            }).catch(err => {
                console.log(err);
            })
        }, [productID]);


    
    return <div className="ProductDetail">
       <div className="wrap-top wrap-top--">
            <div className="wrap-top-left">
                <div className="wrap-avatar">
                    <img src={product.images} alt="" className="avatar" />
                </div>
                <div className="wrap-info">
                    <p className="name">{product.title}</p>
                </div>
            </div>
            <div className="wrap-top-right">
                <div className="wrap-top-right-left">
                    <p>ProductID</p>
                    <p>productID</p>
                    <p>CategoryID</p>
                    <p>Title</p>
                    <p>Description</p>
                    <p>Giá</p>
                    <p>Condition</p>
                    <p>Images</p>
                    <p>Location</p>
                </div>
                <div className="wrap-top-right-right">
                    <input readOnly type="text" className="name"  defaultValue={product.productID}/>
                    <input readOnly type="text" className="productname" defaultValue={product.productID} />
                    <input readOnly type="text" className="email" defaultValue={product.categoryID} />
                    
                    
                    <input type="text" className="birthOfDate" defaultValue={product.title} ref={titleRef} />
                    
                    <input type="text" className="birthOfDate" defaultValue={product.description} ref={descRef} />
                   
                    <input type="number" className="" ref={priceRef} defaultValue={product.price}/>
                    <input type="text" className="" ref={conditionRef} defaultValue={product.conditionRef}/>
                    <input type="text" className="" ref={imagesRef} defaultValue={product.images}/>
                    <input type="text" className="" ref={locationRef} defaultValue={product.location}/>
                </div>
            </div>
        </div>
        <div className="wrap-bottom">
            <h3 className="title">Tùy chọn</h3>
            <div className="wrap-btn">
                
                <button className="btn btn-delete" onClick={() => {}}>Xóa Sản Phẩm</button>
                <button className="btn btn-update" onClick={() => {}}>Cập nhật</button>
            </div>
        </div>
    </div>
}
export default ProductDetail;