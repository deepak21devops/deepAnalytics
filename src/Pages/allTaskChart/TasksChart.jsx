import React, { useState } from 'react'
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './taskschart.css'
import { userTasks } from '../../Components/dummyData.js'


export default function TasksChart() {

    const [charData, setChartData] = useState(userTasks)
    return (
        <div className="alltasksReport">
            <h3 className="chartTitles">All Tasks Report</h3>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
                <LineChart
                    data={charData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" stroke="#6b6b47" strokeDasharray="5 5" />
                    <Tooltip />
                    {/* <Legend /> */}
                    <Line type="monotone" dataKey="task" stroke="#8884d8" activeDot={{ r: 8 }} />
                    {/* <Line type="monotone" dataKey={userTasks.task} stroke="#82ca9d" /> */}
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}
