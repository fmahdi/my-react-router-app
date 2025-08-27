import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Legend, Tooltip } from 'recharts';
const data = [{ name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
{ name: 'Page A', uv: 300, pv: 2400, amt: 2400 },
{ name: 'Page B', uv: 500, pv: 2400, amt: 2400 },
{ name: 'Page C', uv: 900, pv: 2400, amt: 2400 },
{ name: 'Page D', uv: 200, pv: 2400, amt: 2400 }];

const Home = () => {
    return (
        <div>
            <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <CartesianGrid stroke="#aaa" strokeDasharray="5 5" />
                <Line type="monotone" dataKey="uv" stroke="purple" strokeWidth={2} name="My UV data series" />
                <XAxis dataKey="name" />
                <YAxis width="auto" label={{ value: 'UV', position: 'insideLeft', angle: -90 }} />
                <Legend align="right" />
                <Tooltip />
            </LineChart>
        </div>
    );
};

export default Home;