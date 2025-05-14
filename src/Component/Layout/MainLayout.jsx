// src/layouts/MainLayout.jsx
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const MainLayout = () => {
  return (
    <>
      <Header />
      <main style={{  minHeight: '70vh', display: "flex", gap: "2rem" }}>
        <Sidebar/>
        <div style={{width: "100%"}}>

        <Outlet style={{width: "100%"}}/>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
