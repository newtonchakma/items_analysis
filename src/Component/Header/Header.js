import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <nav className='header'>
        
        
            <Link className='nav-link' to="/">Home</Link>
            <Link className='nav-link' to="/review">Review</Link>
            <Link className='nav-link' to="/chart">Chart</Link>
            <Link className='nav-link' to="/blogs">Blogs</Link>
            <Link className='nav-link' to="/about">About</Link>
       
    </nav>
    );
};

export default Header;