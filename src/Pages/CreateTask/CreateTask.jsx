import React, { useState } from 'react'
import './createtask.css'
import { addItem } from '../../Components/redux/userData'
import { useDispatch, useSelector } from 'react-redux'
export default function CreateTask() {

    const dispatch = useDispatch()
    const dataCount = useSelector(state => state.repo.obj.length)

    const [flag, setFlag] = useState(false)
    const [Taskname, setTask] = useState("")
    const [Created, setTkCreate] = useState("")
    const [Deadline, setTkDead] = useState("")
    const [Status, setTkStatus] = useState("In Progress")

    const handleCreate = (e) => {
        e.preventDefault()
        dispatch(addItem({ id: dataCount + 1, Taskname, Created, Deadline, Status }))
        setTask("")
        setTkCreate("")
        setTkDead("")
        setTkStatus("")
        setFlag(true)
        setInterval(() => {
            setFlag(false)
        }, 2000)

    }

    return (
        <div className="createTask">
            <h3 className="editTitle">Create New  Task</h3>
            <div className="formContainer">
                <form className="editform">
                    <label>TaskName</label>
                    <input type="text" value={Taskname} onChange={(e) => setTask(e.target.value)}></input>

                    <label>Created On</label>
                    <input type="text" value={Created} onChange={(e) => setTkCreate(e.target.value)}></input>

                    <label>DeadLine</label>
                    <input type="text" value={Deadline} onChange={(e) => setTkDead(e.target.value)}></input>

                    <label>Status</label>
                    <select className="userSelect" onChange={(e) => setTkStatus(e.target.value)}>
                        <option value="in progress">In Progress</option>
                        <option value="completed">Completed</option>
                        <option value="pending">Pending</option>
                    </select>

                    <button className="crtbtn" onClick={(e) => handleCreate(e)}>Create</button>
                </form>
                {flag ? <span className="info">Task created succesfully!!!</span> : ""}
            </div>
        </div>
    )
}
