// src/pages/CategoryItem.jsx
import { useDispatch } from "react-redux";
import "./CategoryItem.css"
import { addProduct, changeProduct, deleteProduct } from "../../redux/cartSlice";


const CategoryItem = ({category, onDelete}) => {
    
  return (
    <div className="CategoryItem">
        <div className="wrap-left">

        <h3 className="title">{category.categoryName}</h3>
        <p className="id">ID: {category.categoryID}</p>
        </div>
        <div className="wrap-right" onClick={onDelete.bind(null, category.categoryID)}>
        <i class="bi bi-trash3"></i>
        </div>
    </div>
  );
};

export default CategoryItem;
