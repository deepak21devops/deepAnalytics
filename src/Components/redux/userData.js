import { createSlice } from '@reduxjs/toolkit'

export const userDataSlice = createSlice({
    name: "repo",
    initialState: {
        obj: [
            { id: 1, Taskname: 'Deepak', Created: 'Oct-4-2021', Deadline: 'Oct-10-2021', Status: 'Active' }
        ]
    },
    reducers: {
        addItem: (state, action) => {
            state.obj = [...state.obj, action.payload]


        },
        updateItem: (state, action) => {
            state.obj = action.payload
        }

    }
})



export const { addItem, updateItem } = userDataSlice.actions
export default userDataSlice.reducer