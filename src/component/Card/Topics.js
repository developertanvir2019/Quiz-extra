import React, { useContext } from 'react';
import Home from '../Home/Home';
import { LoadedData } from '../Layout';
import CardAp from './CardAp';

const Topics = () => {
    const topics = useContext(LoadedData);
    return (
        <div>
            <div className='row my-4 mx-5'>
                <h2 className='mt-3'>All topics</h2>
                {
                    topics.map(data => <CardAp key={data.id} data={data} ></CardAp>)
                }
            </div>
        </div>
    );
};

export default Topics;