import React from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';
export default function Chart(users) {
    return (
        <ResponsiveContainer width="100%" height={400}>
            <BarChart
                users={data}
                margin={{
                    top: 10,
                    left: 20,
                    right: 20,
                    bottom: 10
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
                <Bar dataKey="name" fill='#8884d8' />
                <Bar dataKey="Price" fill='#82ca9d' />
            </BarChart>
        </ResponsiveContainer>
    );
}