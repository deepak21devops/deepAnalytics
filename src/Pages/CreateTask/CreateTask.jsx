import React from 'react'
import './createtask.css'
export default function CreateTask() {
    return (
        <div className="createTask">
            <h3 className="editTitle">Create New  Task</h3>
            <div className="formContainer">
                <form className="editform">
                    <label>TaskName</label>
                    <input type="text"></input>

                    <label>Created On</label>
                    <input type="text"></input>

                    <label>DeadLine</label>
                    <input type="text"></input>

                    <label>Status</label>
                    <select className="userSelect">
                        <option value="in progress">In Progress</option>
                        <option value="completed">Completed</option>
                        <option value="pending">Pending</option>
                    </select>

                    <button className="updbtn">Create</button>
                </form>
            </div>
        </div>
    )
}
