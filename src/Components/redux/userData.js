import { createSlice } from '@reduxjs/toolkit'

export const userDataSlice = createSlice({
    name: "repo",
    initialState: {
        obj: [
            { id: 1, taskname: 'Deepak', created: 'Oct-4-2021', deadline: 'Oct-10-2021', status: 'Active' }
        ]
    },
    reducers: {
        addItem: (state, action) => {
            state.obj = [...state.obj, action.payload]
        }
    }

})

export const { addItem } = userDataSlice.actions
export default userDataSlice.reducer