import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SignInPage from './Page/SignInPage';
import MainLayout from './Component/Layout/MainLayout';
import HomePage from './Page/HomePage';


function App() {
  return (
    <div className="App">
        <Router>
            <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<HomePage />} />
            </Route>
            <Route path="/signin" element={<SignInPage />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
