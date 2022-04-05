import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='about-container'>
            <h5>Q--1 : What is context API?</h5>
           <p>
           Ans : The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.

Context API is a (kind of) new feature added in version 16.3 of React that allows one to share state across the     entire app (or part of it) lightly and with ease. 
           </p>
                <h5>Q--2 : What is semantic tag?</h5>
                <p>Ans : semantic tag ate HTML elements that specify their purpose or decribes their meaning in more human friendly and human readable manner.Elements like nav, header,section,footer are semantic elements because they specify that it is used for creating a nav header to create a header section and footer both tags describes that they are used to create section and footer</p>
       
        </div>
    );
};

export default Blogs;