import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from './slices/appSlice'

export const store = configureStore({
    reducer: {
        sideBar: sidebarReducer
    }
})

export default store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;