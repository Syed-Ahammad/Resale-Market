import React from 'react';
import Navbar from '../SharedPage/Navbar/Navbar';
import {Outlet} from 'react-router-dom';
import Footer from '../SharedPage/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div  className='mx-8'>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;