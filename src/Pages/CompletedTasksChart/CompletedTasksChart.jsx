import React from 'react'
import './completedtasks.css'
import { BarChart, Bar, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function CompletedTasksChart({ title, data, datakey }) {
    return (
        <div className="completedTaskContainer">
            <h3 className="chartTitle">{title}</h3>
            <ResponsiveContainer width="100%" aspect={2 / 1}>
                <BarChart
                    data={data}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" stroke="#6b6b47" strokeDasharray="5 5" />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="task" fill="red" />
                    <Bar dataKey="completed" fill="blue" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}
