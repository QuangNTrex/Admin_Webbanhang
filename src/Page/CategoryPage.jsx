// src/pages/CategoryPage.jsx
import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { serverURL } from '../libs/http';
import CategoryItem from '../Component/UI/CategoryItem';
import CategoryList from '../Component/UI/CategoryList';

const CategoryPage = () => {
  const [inputValue, setInputValue] = useState("");
   const location = useLocation();
  const navigate = useNavigate();
  const [categories, setCategories] = useState([
    {categoryID: 123, categoryName: "cake",},{categoryID: 123, categoryName: "cake",},{categoryID: 123, categoryName: "cake",},{categoryID: 123, categoryName: "cake",},{categoryID: 123, categoryName: "cake",},{categoryID: 123, categoryName: "cake",},{categoryID: 123, categoryName: "cake",},{categoryID: 123, categoryName: "cake",},{categoryID: 123, categoryName: "cake",},{categoryID: 123, categoryName: "cake",},{categoryID: 123, categoryName: "cake",},{categoryID: 123, categoryName: "cake",},{categoryID: 123, categoryName: "cake",},{categoryID: 123, categoryName: "cake",},
  ]);

   useEffect(() => {
    fetch(serverURL + "/api/category", {
        method: "GET",
        header: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer YOUR_TOKEN_HERE'
        },
    }).then(res => res.json()).then(data => {
        setCategories(data);
    }).catch(err => console.log(err))
}, []);

  const addHandler = () => {
    fetch(serverURL + "/api/category", {
      method: "POST",
      header: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer YOUR_TOKEN_HERE'
      },
      body: JSON.stringify({CategoryName: inputValue})
  }).then(res => res.json()).then(data => {
      setCategories(prev => [{categoryName: inputValue},...prev]);
  }).catch(err => {
    setCategories(prev => [{categoryName: inputValue},...prev]);
  })
  setInputValue("");
  }

  const deleteHandler = (categoryID) => {
    fetch(serverURL + "/api/category/" + categoryID, {
      method: "DELETE",
      header: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer YOUR_TOKEN_HERE'
      }
  }).then(res => res.json()).then(data => {
      setCategories(prev => prev.filter(e => e.categoryID !== categoryID));
  }).catch(err => {
    setCategories(prev => prev.filter(e => e.categoryID !== categoryID));
  })
  }



  return (
    <div className="CategoryPage">
        <div className="wrap-top">
          <h2 className="title">Thêm mới danh mục</h2>
          <div className="wrap-form" style={{display: "flex", gap: "2rem", justifyContent: "center", margin: "4rem"}} >

            <input value={inputValue} onChange={e => setInputValue(e.target.value)}  type="text" className="title" style={{padding: "1rem"}}/>
            <button className="btn btn-add" style={{padding: "1rem 2rem", border: 0, backgroundColor: "green", color: "white"}} onClick={addHandler}>Thêm</button>
          </div>
        </div>
        <h2 className="title">Danh mục</h2>
        <CategoryList onDelete={deleteHandler} categories={categories}/>
    </div>
  );
};

export default CategoryPage;
