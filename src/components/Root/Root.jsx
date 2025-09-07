import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SideBar from '../Sidebar/SideBar';
import { Outlet, useNavigation } from 'react-router';
import './Root.css';



const Root = () => {
    const navigation = useNavigation();
    const isNavigating = Boolean(navigation.location);

    return (
        <div>
            <Header></Header>
            <div className='flex-me'>
                <SideBar></SideBar>
                {isNavigating && <h2>~~~~~Loading~~~~~</h2>}
                <Outlet></Outlet>
            </div>
            <Footer></Footer>

        </div>
    );
};

export default Root;