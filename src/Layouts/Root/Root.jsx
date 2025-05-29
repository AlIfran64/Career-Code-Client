import React from 'react';
import Footer from '../../Components/Footer/Footer';
import { Outlet } from 'react-router';
import Navbar from '../../Components/Header/Navbar';

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;