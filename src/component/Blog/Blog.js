import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='container'>
            <h1 className='text-center text-success'>Read Blog</h1>

            <div className='blog-area'>
                <h5>question-1  :What is the purpose of react router?</h5>
                <h6>Ans--ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.</h6>
            </div>
            <div className='blog-area'>
                <h5>question-2  :How does context api works?</h5>
                <h6>Ans--The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</h6>
            </div>
            <div className='blog-area'>
                <h5>question-3  :Details about useRef hook in react</h5>
                <h6>Ans-- The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.The useRef is a hook that allows to directly create a reference to the DOM element in the functional component. Syntax: const refContainer = useRef(initialValue); The useRef returns a mutable ref object</h6>
            </div>
        </div>
    );
};

export default Blog;