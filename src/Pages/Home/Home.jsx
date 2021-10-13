import React from 'react'
import './home.css'
import TasksChart from '../allTaskChart/TasksChart'
import { userTasks, CompletedTasks } from '../../Components/dummyData'
import CompletedTasksChart from '../CompletedTasksChart/CompletedTasksChart'
import PendingTaskChart from '../PendingTaskCharts/PendingTaskChart'

export default function Home() {
    return (
        <div className="homeContainer">
            <div className="right">
                <div className="chartContainer">
                    <TasksChart />
                </div>
                <div className="chartContainer2">
                    <div className="contentContainer">
                        <div className="leftChart">
                            <CompletedTasksChart title="Completed Tasks Report" data={CompletedTasks} datakey="month" />
                        </div>
                        <div className="rightChart">
                            <PendingTaskChart title="Pending Tasks Report" data={CompletedTasks} datakey="month" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
