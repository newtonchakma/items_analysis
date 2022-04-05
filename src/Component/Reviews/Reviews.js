import React, { useEffect, useState } from 'react';
import { CardGroup } from 'react-bootstrap';
import Review from '../Review/Review';

const Reviews = () => {
    const [carts, setCarts] = useState([]);
    useEffect(()=>{
        fetch('review.json')
        .then(response => response.json())
        .then(data => setCarts(data))
    },[])
    return (
      
       
       <div>
       <h2>name:{carts.length}</h2>
     <CardGroup>
         
       {
            carts.map(review => <Review 
            key={review.id}
            review={review}
            ></Review>)
         }
     </CardGroup>
     
       
       </div>
    );
};

export default Reviews;