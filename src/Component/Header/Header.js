import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <nav className='header'>
        
        
            <Link to="/">Home</Link>
            <Link to="/review">Review</Link>
            <Link to="/chart">Chart</Link>
            <Link to="/blogs">Blogs</Link>
            <Link to="/about">About</Link>
       
    </nav>
    );
};

export default Header;