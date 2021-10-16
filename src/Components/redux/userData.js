import { createSlice } from '@reduxjs/toolkit'

export const userDataSlice = createSlice({
    name: "repo",
    initialState: {
        obj: [
            // { id: 1, Taskname: 'Deepak', Created: 'Oct-4-2021', Deadline: 'Oct-10-2021', Status: 'completed' }
            // { id: 1, Taskname: '', Created: '', Deadline: '', Status: '' }
        ]
    },
    reducers: {
        addItem: (state, action) => {
            state.obj = [...state.obj, action.payload]
            localStorage.setItem("task",JSON.stringify(state.obj))


        },
        updateItem: (state, action) => {
            state.obj = action.payload
            localStorage.setItem("task",JSON.stringify(state.obj))
        }

    }
})



export const { addItem, updateItem } = userDataSlice.actions
export default userDataSlice.reducer