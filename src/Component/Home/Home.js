import React from 'react';
import './Home.css';
import laptop from '../../image/laptop.jpg';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
       <div className="div">
            <div className='home-container'>
            <div className="home-details">
                <h2>HP ENVY Laptop - 17t-ch100</h2>
                <p>Unleash your creativity with the HP ENVY 17 inch Laptop that gives you the performance, features and freedom to create the way you want. Powered by an Intel® processor[1], brings your ideas to life in stunning colors that match your imagination. </p>
                <button className='home-btn'>BUY NOW</button>
            </div>
            <div className="home-cover-photo">
            <img src={laptop} alt="" />
            </div>
           
        </div>
        <Reviews></Reviews>
       </div>
       
       
    );
  
};

export default Home;