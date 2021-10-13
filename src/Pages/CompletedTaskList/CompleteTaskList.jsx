import React, { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { taskList } from '../AllTaskList/columnsData'
import { Link } from 'react-router-dom';
import { DeleteForever } from '@material-ui/icons'
import './completedTasklist.css'
import { useSelector } from 'react-redux';


export default function CompleteTaskList() {

    const allData = useSelector(state => state.repo.obj)
    console.log(allData)

    const [data, setData] = useState(allData)
    console.log(data)

    const deleteTask = (id) => {
        setData(data.filter(ele => ele.id !== id))
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 120 },
        {
            field: 'Taskname',
            headerName: 'Taskname',
            width: 150,
            editable: true,
        },
        {
            field: 'Created',
            headerName: 'Created On',
            width: 200,
            editable: true,
        },
        {
            field: 'Deadline',
            headerName: 'Deadline',
            // type: 'number',
            width: 170,
            editable: true,
        },
        {
            field: 'Status',
            headerName: 'Status',
            // description: 'This column has a value getter and is not sortable.',
            // sortable: false,
            width: 160,
            // valueGetter: (params) =>
            //     `${params.getValue(params.id, 'firstName') || ''} ${params.getValue(params.id, 'lastName') || ''
            //     }`,
        },
        {
            field: "action",
            headerName: 'Action',
            width: 200,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={`edit/${params.row.id}`}>
                            <button className="editbtn">Edit</button>
                        </Link>

                        <DeleteForever className="delbtn" onClick={() => deleteTask(params.row.id)} />

                    </>
                )
            }
        }
    ];
    return (
        <>

            <div style={{ height: 500, width: '100%' }} className="dataGrid">
                <h3 className="headerlist">Completed Tasks</h3>
                <DataGrid
                    rows={data}
                    columns={columns}
                    pageSize={7}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                    disableSelectionOnClick
                />
            </div>
        </>
    )
}
