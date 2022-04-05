/* const [carts, setCarts] = use
useEffect(()=>{
    fetch('review.json')
    .then(response => response.json())
    .then(data => setCarts(data))
},[]) */
import React, { useEffect, useState } from 'react';
const  useCarts = ()=>{
    const [carts,setCarts] = useState([]);
    useEffect(()=>{
        fetch('review.json')
        .then(response => response.json())
        .then(data => setCarts(data))
    },[]);
    return [carts,setCarts];

}
export default useCarts;
