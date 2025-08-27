import React from 'react';
import { NavLink } from 'react-router';
import './Header.css';

const Header = () => {
    return (
        <div>
            <p>This is Header
            </p>
            <nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/mobiles'>Mobiles</NavLink>
                <NavLink to='/laptops'>Laptops</NavLink>
                <NavLink to='/about'>About us</NavLink>
            </nav>
        </div>
    );
};

export default Header;