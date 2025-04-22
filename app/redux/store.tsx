import { configureStore } from "@reduxjs/toolkit";
import menuReducer from './slices/appSlice'

export const store = configureStore({
    reducer: {
        app: menuReducer,
    }
})

export default store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;