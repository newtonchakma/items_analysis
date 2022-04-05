import React, { useEffect, useState } from 'react';
import { CardGroup } from 'react-bootstrap';
import Review from '../Review/Review';
import './reviews.css'

const Reviews = () => {
    const [carts, setCarts] = useState([]);
    useEffect(()=>{
        fetch('review.json')
        .then(response => response.json())
        .then(data => setCarts(data))
    },[])
    return (
      
       
       <div className="review-container">
    
     <CardGroup>
         
       {
        carts.slice(0,3).map(review => <Review 
            key={review.id}
            review={review}
            ></Review>)
         }
     </CardGroup>
     
       
       </div>
    );
};

export default Reviews;