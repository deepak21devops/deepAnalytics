import React from 'react'
import './completedtasks.css'
import { BarChart, Bar, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { CompletedTasks } from '../../Components/dummyData'

export default function CompletedTasksChart() {
    return (
        <div className="completedChart">
            <h3 className="chartTitles">Completed Tasks Report</h3>
            <ResponsiveContainer width="100%" aspect={3 / 1}>
                <BarChart
                    data={CompletedTasks}
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
