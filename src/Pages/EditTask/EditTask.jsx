import React, { useState } from 'react';
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './editTask.css'
import { updateItem } from '../../Components/redux/userData'
import { useDispatch } from 'react-redux';
export default function EditTask() {
    const dispatch = useDispatch()

    const myData = useSelector(state => state.repo.obj)
    const storageItems = localStorage.getItem('task')

    let params = useParams()

    const getData = JSON.parse(storageItems).filter(itm => itm.id === Number(params.id))
    console.log(getData)

    const [flag, setFlag] = useState(false)
    let id = Number(params.id)

    const [Taskname, setTask] = useState(getData[0].Taskname)
    const [Created, setTkCreate] = useState(getData[0].Created)
    const [Deadline, setTkDead] = useState(getData[0].Deadline)
    const [Status, setTkStatus] = useState(getData[0].Status)

    const handleUpdate = (e) => {
        e.preventDefault()

        const newData = myData.map(ele => {
            if (ele.id === id) {
                return { ...ele, Taskname, Created, Deadline, Status }

            }
            return ele
        })


        dispatch(updateItem(newData))

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
        <div className="editContainer">
            <h3 className="editTitle">Edit Task</h3>
            <div className="formContainer">

                {getData.map(ele => (
                    <form className="editform" key={ele.id}>

                        <label>TaskName</label>
                        <input type="text" value={Taskname} onChange={(e) => setTask(e.target.value)}></input>

                        <label>Created On</label>
                        <input type="text" value={Created} onChange={(e) => setTkCreate(e.target.value)}></input>

                        <label>DeadLine</label>
                        <input type="text" value={Deadline} onChange={(e) => setTkDead(e.target.value)}></input>

                        <label>Status</label>
                        <select className="userSelect" value={Status} onChange={(e) => setTkStatus(e.target.value)}>
                            <option value="in progress">In Progress</option>
                            <option value="completed">Completed</option>
                            <option value="pending">Pending</option>
                        </select>
                        <button className="updbtn" onClick={(e) => handleUpdate(e)}>Update</button>
                    </form>

                ))}
                {flag ? <span className="info">Task Updated succesfully!!!</span> : ""}
            </div>

        </div>
    )
}
