import React from 'react';
import { Card } from 'react-bootstrap';
import './review.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Review = (props) => {
   console.log(props);
   const {name,picture,comment,rating} = props.review;
    return (
        <>
      
    
      <Card className='card-diteals'>
      <div className="card-img">
      <img src={picture} alt="" />
      </div>
      {/* <Card.Img variant="top" src={picture} /> */}
    
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <Card.Text>
       {comment}
      </Card.Text>
      <p>
      {rating}
      <FontAwesomeIcon className='icon-color' icon={faStar}></FontAwesomeIcon>
      </p>
    </Card.Body>
    
  </Card> 
  
          
        </>
      
    
    );
};

export default Review;