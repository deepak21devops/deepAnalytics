import React, { useState } from 'react'
import './createtask.css'
import { addItem } from '../../Components/redux/userData'
import { useDispatch, useSelector } from 'react-redux'
export default function CreateTask() {

    const dispatch = useDispatch()
    const dataCount = useSelector(state => state.repo.obj)
    console.log(dataCount.length)

    const [task, setTask] = useState("")
    const [tkCreate, setTkCreate] = useState("")
    const [tkDead, setTkDead] = useState("")
    const [tkStatus, setTkStatus] = useState("In Progress")

    const handleCreate = (e) => {
        e.preventDefault()
        dispatch(addItem({ id: 2, task, tkCreate, tkDead, tkStatus }))
        setTask("")
        setTkCreate("")
        setTkDead("")
        setTkStatus("")

    }


    return (
        <div className="createTask">
            <h3 className="editTitle">Create New  Task</h3>
            <div className="formContainer">
                <form className="editform">
                    <label>TaskName</label>
                    <input type="text" value={task} onChange={(e) => setTask(e.target.value)}></input>

                    <label>Created On</label>
                    <input type="text" value={tkCreate} onChange={(e) => setTkCreate(e.target.value)}></input>

                    <label>DeadLine</label>
                    <input type="text" value={tkDead} onChange={(e) => setTkDead(e.target.value)}></input>

                    <label>Status</label>
                    <select className="userSelect" onChange={(e) => setTkStatus(e.target.value)}>
                        <option value="in progress">In Progress</option>
                        <option value="completed">Completed</option>
                        <option value="pending">Pending</option>
                    </select>

                    <button className="updbtn" onClick={(e) => handleCreate(e)}>Create</button>
                </form>
            </div>
        </div>
    )
}
