import React from 'react'
import './sidebar.css'
import {
    HomeOutlined, AddOutlined, AssignmentOutlined, EditOutlined, CheckCircleOutlined,
    PauseCircleOutlineOutlined, BarChartOutlined, ShowChartOutlined, TimelineOutlined
} from '@material-ui/icons'
import TasksChart from '../../Pages/allTaskChart/TasksChart'
import { userTasks, CompletedTasks } from '../dummyData'
import CompletedTasksChart from '../../Pages/CompletedTasksChart/CompletedTasksChart'
import PendingTaskChart from '../../Pages/PendingTaskCharts/PendingTaskChart'


export default function SideBar() {
    return (
        <div className="sidebar">
            <div className="left">
                <div className="menuContainer">
                    <div className="menu">
                        <h3 className="menuTitle">DashBoard</h3>
                        <ul className="menulist">
                            <li className="menuItems">
                                <HomeOutlined className="icons" />
                                <span>Home</span>
                            </li>

                            <li className="menuItems">
                                <AddOutlined className="icons" />
                                <span>Create Task</span>
                            </li>

                            <li className="menuItems">
                                <EditOutlined className="icons" />
                                <span>Edit Task</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="menuContainer">
                    <div className="menu">
                        <h3 className="menuTitle">Quick Menu</h3>
                        <ul className="menulist">
                            <li className="menuItems">
                                <AssignmentOutlined className="icons" />
                                <span>My Tasks</span>
                            </li>

                            <li className="menuItems">
                                <CheckCircleOutlined className="icons" />
                                <span>Completed Tasks</span>
                            </li>

                            <li className="menuItems">
                                <PauseCircleOutlineOutlined className="icons" />
                                <span>Pending Tasks</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="menuContainer">
                    <div className="menu">
                        <h3 className="menuTitle">Reports Menu</h3>
                        <ul className="menulist">
                            <li className="menuItems">
                                <BarChartOutlined className="icons" />
                                <span>All Tasks Reports</span>
                            </li>

                            <li className="menuItems">
                                <ShowChartOutlined className="icons" />
                                <span>Completed Tasks Report</span>
                            </li>

                            <li className="menuItems">
                                <TimelineOutlined className="icons" />
                                <span>Pending Tasks Report</span>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
            <div className="right">
                <div className="chartContainer">
                    <TasksChart title="All Tasks Report" data={userTasks} datakey="month" />
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
