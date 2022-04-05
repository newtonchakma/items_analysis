import React from 'react';
import './Home.css';
import laptop from '../../image/laptop.jpg';

const Home = () => {
    return (
        <div className='home-container'>
            <div className="home-details">
                <h2>Lorem ipsum dolor sit amet consectetur,<br></br> adipisicing elit. Atque, ut.</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero inventore nobis doloribus perferendis, reprehenderit quasi impedit officia nam aliquam ab.</p>
                <button className='home-btn'>BUY NOW</button>
            </div>
            <div className="home-cover-photo">
            <img src={laptop} alt="" />
            </div>
        </div>
    );
};

export default Home;