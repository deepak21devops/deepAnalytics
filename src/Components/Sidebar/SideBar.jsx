import React from 'react'
import './sidebar.css'
import {
    HomeOutlined, AddOutlined, AssignmentOutlined, EditOutlined, CheckCircleOutlined,
    PauseCircleOutlineOutlined, BarChartOutlined, ShowChartOutlined, TimelineOutlined
} from '@material-ui/icons'
import { Link } from 'react-router-dom'



export default function SideBar() {
    return (
        <div className="sidebar">
            <div className="left">
                <div className="menuContainer">
                    <div className="menu">
                        <h3 className="menuTitle">DashBoard</h3>
                        <ul className="menulist">
                            <Link to="/" className="link">
                                <li className="menuItems">
                                    <HomeOutlined className="icons" />
                                    <span>Home</span>
                                </li>
                            </Link>


                            <Link to="/newtask" className="link">
                                <li className="menuItems">
                                    <AddOutlined className="icons" />
                                    <span>Create Task</span>
                                </li>
                            </Link>

                            <Link to="/edit/:id" className="link">
                                <li className="menuItems">
                                    <EditOutlined className="icons" />
                                    <span>Edit Task</span>
                                </li>
                            </Link>

                        </ul>
                    </div>
                </div>

                <div className="menuContainer">
                    <div className="menu">
                        <h3 className="menuTitle">Quick Menu</h3>
                        <ul className="menulist">
                            <Link to="/mytasks" className="link">
                                <li className="menuItems">
                                    <AssignmentOutlined className="icons" />
                                    <span>My Tasks</span>
                                </li>
                            </Link>

                            <Link to="/completedlist" className="link">
                                <li className="menuItems">
                                    <CheckCircleOutlined className="icons" />
                                    <span>Completed Tasks</span>
                                </li>
                            </Link>

                            <Link to="/pendinglist" className="link">
                                <li className="menuItems">
                                    <PauseCircleOutlineOutlined className="icons" />
                                    <span>Pending Tasks</span>
                                </li>
                            </Link>

                        </ul>
                    </div>
                </div>

                <div className="menuContainer">
                    <div className="menu">
                        <h3 className="menuTitle">Reports Menu</h3>
                        <ul className="menulist">
                            <Link to="/alltaskreports" className="link">
                                <li className="menuItems" >
                                    <BarChartOutlined className="icons" />
                                    <span>All Tasks Reports</span>
                                </li>
                            </Link>

                            <Link to="/completedtaskreports" className="link">
                                <li className="menuItems">
                                    <ShowChartOutlined className="icons" />
                                    <span>Completed Tasks Report</span>
                                </li>
                            </Link>


                            <Link to="/pendingtaskreports" className="link">
                                <li className="menuItems">
                                    <TimelineOutlined className="icons" />
                                    <span>Pending Tasks Report</span>
                                </li>
                            </Link>

                        </ul>
                    </div>
                </div>

            </div>



        </div>

    )
}
