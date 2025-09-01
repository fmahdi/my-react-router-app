import React from 'react';
import { NavLink } from 'react-router';
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/mobiles'>Mobiles</NavLink>
                <NavLink to='/laptops'>Laptops</NavLink>
                <NavLink to='/user'>User</NavLink>
                <NavLink to='/user2'>User2</NavLink>
                <NavLink to='/posts'>Posts</NavLink>
                <NavLink to='/viteApp'>About us</NavLink>
            </nav>
        </div>
    );
};

export default Header;