import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    value: true
}

export const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        action: (state) => {
            state.value = !state
        }
    }
}) 


export const {action} = menuSlice.actions

export default menuSlice.reducer