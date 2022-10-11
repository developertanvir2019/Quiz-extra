import React, { useContext } from 'react';
import { LoadedData } from '../component/Layout';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import './Statics.css'
const Statics = () => {
    const data = useContext(LoadedData)
    return (
        <div>
            <h2 className='orange'>Chart for total quiz</h2>
            <div className='d-flex align-items-center justify-content-center my-5'>
                <div>
                    <LineChart width={420} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                        <Line type="monotone" dataKey="400" stroke="#8884d8" />
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <XAxis dataKey="name" />
                        <YAxis dataKey="total" />
                        <Tooltip />
                    </LineChart>
                </div>
            </div>
        </div>
    );
};

export default Statics;