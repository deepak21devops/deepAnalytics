import React from 'react'
import './navbar.css'
import { NotificationsNone } from '@material-ui/icons'

export default function NavBar() {
    return (
        <div className="navbar">
            <div className="navContainer">
                <div className="navIcon">DeepAnalytics</div>
                <ul className="navHeaders">
                    <li className="createTask">CREATE TASK</li>
                    <li className="alltask">MY TASKS</li>
                </ul>
                <div className="navProfile">
                    <div className="profileContent">
                        <div className="notification">
                            <NotificationsNone className="notify" />
                            <span className="messages">2</span>
                        </div>

                        <img className="profileimg" src="https://pyxis.nymag.com/v1/imgs/428/089/f25f44f807a04235e9cabaf68fe424ea07-20-florence-pugh.rvertical.w1200.jpg" alt=""></img>
                        <h3 className="profiletext">Alica Vikanders</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
