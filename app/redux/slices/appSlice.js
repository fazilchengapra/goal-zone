import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    value: true
}

export const sideBarSlice = createSlice({
    name: 'sideBar',
    initialState,
    reducers: {
        action: (state) => {
            state.value = !state
        }
    }
}) 


export const {action} = sideBarSlice.actions

export default sideBarSlice.reducer