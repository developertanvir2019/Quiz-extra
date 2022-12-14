import React, { useContext } from 'react';
import CardAp from '../Card/CardAp';
import Banner from '../Banner/Banner';
import { LoadedData } from '../Layout';
import './Home.css'

const Home = () => {
    const topics = useContext(LoadedData);
    return (
        <div>
            <Banner></Banner>
            <div className='row my-4 mx-5'>
                <h2 className='mt-3'>All topics</h2>
                {
                    topics.map(data => <CardAp key={data.id} data={data} ></CardAp>)
                }
            </div>
        </div>
    );
};

export default Home;