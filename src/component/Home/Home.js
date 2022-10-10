import React, { useContext } from 'react';
import CardAp from '../Card/CardAp';
import { LoadedData } from '../Layout';
import './Home.css'

const Home = () => {
    const topics = useContext(LoadedData);
    return (
        <div className='row my-4 mx-5'>
            {
                topics.map(data => <CardAp key={data.id} data={data} ></CardAp>)
            }
        </div>
    );
};

export default Home;