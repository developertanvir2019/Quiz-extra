import React from 'react';
import { Link } from 'react-router-dom';
import './Error.css'

const Error = () => {
    return (
        <div className='w-100 error-page bg-dark text-white'>
            <div>
                <h1>404</h1>
                <h1>Opps</h1>
                <h4>The page could not found</h4>
                <Link to={'/'}><button className='btn btn-outline-primary'>Go Home</button></Link>
            </div>
        </div>
    );
};

export default Error;