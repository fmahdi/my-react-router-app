import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SideBar from '../Sidebar/SideBar';
import { Outlet } from 'react-router';
import './Root.css';



const Root = () => {
    return (
        <div>
            <Header></Header>
            <div className='flex-me'>
                <SideBar></SideBar>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>

        </div>
    );
};

export default Root;