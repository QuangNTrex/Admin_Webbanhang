// src/pages/CategoryList.jsx
import { useDispatch } from "react-redux";
import "./CategoryList.css"
import { addProduct, changeProduct, deleteProduct } from "../../redux/cartSlice";
import CategoryItem from "./CategoryItem";


const CategoryList = ({categories, onDelete}) => {
    
  return (
    <div className="CategoryList">
        {categories.map(e => <CategoryItem onDelete={onDelete} category={e}/>)}
    </div>
  );
};

export default CategoryList;
