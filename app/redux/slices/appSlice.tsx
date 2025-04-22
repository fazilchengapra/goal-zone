import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    value: true,
    theme: 'light'
}

export const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        menuAction: (state) => {
            state.value = !state.value
        },
        themeAction: (state) => {
            if (state.theme === 'light') {
                state.theme = 'dark';
            } else {
                state.theme = 'light';
            }
        }
    }
}) 


export const {menuAction, themeAction} = menuSlice.actions

export default menuSlice.reducer