import React from 'react';
import { Card } from 'react-bootstrap';

const Review = (props) => {
   console.log(props);
   const {name,picture} = props.review;
    return (
        <>
      
    
      <Card>
      <Card.Img variant="top" src={picture} />
    <img src={picture} alt="" />
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card> 
          
        </>
      
    
    );
};

export default Review;