import React, { useContext } from 'react';
import { LoadedData } from '../component/Layout';
import './Statics.css'
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
const data = [{ name: 'Page A', uv: 400, pv: 2400, amt: 2400 }];
const Statics = () => {
    const data = useContext(LoadedData)
    data.map(d => (d.total))
    return (
        <div>
            <BarChart width={600} height={300} data={data}>
                <XAxis dataKey="name" stroke="#8884d8" />
                <YAxis />
                <Tooltip />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <Bar dataKey="uv" fill="#8884d8" barSize={30} />
            </BarChart>
        </div>
    );
};

export default Statics;