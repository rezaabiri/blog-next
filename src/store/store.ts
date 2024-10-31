import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
export const store = configureStore({
    reducer: {
        counter: counterReducer,
    }
})

// Infer the type of makeStore
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch