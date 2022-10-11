import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner container text-white d-flex align-items-center justify-content-center'>
            <div>
                <h1>Welcome our quiz area</h1>
                <p className='py-2'> This is our quiz website . you can complete your quiz by answer some question</p>
                <p>You can test your brain by using those question</p>
            </div>
        </div>
    );
};

export default Banner;