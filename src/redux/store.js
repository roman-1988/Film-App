import { configureStore, combineReducers } from "@reduxjs/toolkit"
import SearchReducer from "./reducers/SearchSlice"

const rootReducer = combineReducers({
    search: SearchReducer,
})

const store = configureStore({
    reducer: {
        rootReducer
    }
})

export { store }