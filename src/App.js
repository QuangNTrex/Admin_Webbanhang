import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import SignInPage from './Page/SignInPage';
import SignUpPage from './Page/SignUpPage';
import MainLayout from './Component/Layout/MainLayout';
import HomePage from './Page/HomePage';
import SearchPage from './Page/SearchPage';
import ProductDetailPage from './Page/ProductDetailPage';
import CartPage from './Page/CartPage';
import OrderPage from './Page/OrderPage';
import CheckoutPage from './Page/CheckoutPage';
import CategoryPage from './Page/CategoryPage';
import UserDetailPage from './Page/UserDetailPage';
import UserPage from './Page/UserPage';
import ProductOfCategoryPage from './Page/ProductOfCategoryPage';
import { useDispatch, useSelector } from 'react-redux';
import { serverURL } from './libs/http';
import { useEffect } from 'react';
import { setUser } from './redux/userSlice';


function App() {
  const role = useSelector(state => state.user.role);
  console.log(role);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {

    } else {
      fetch(serverURL + "/api/account", {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })
        .then(res => res.json())
        .then(data => {
          navigate("/")
          console.log("user", data)
          dispatch(setUser(data));
        })
        .catch(err => console.log(err));
    }

  }, [])
  return (
    <div className="App">

      <Routes>
        {role === 1 && <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path='/search/:type' element={<SearchPage />} />
          <Route path="/detail/:id" element={<ProductDetailPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/category/:id" element={<ProductOfCategoryPage />} />
          <Route path="/category" element={<CategoryPage />} />
          <Route path="/user/:id" element={<UserDetailPage />} />
          <Route path="/user" element={<UserPage />} />
        </Route>}
        {role !== 1 &&
          <Route path="*" element={<Navigate to="/signin" replace />} />
        }
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>

    </div>
  );
}

export default App;
