import { configureStore } from "@reduxjs/toolkit"
import SearchReducer from "./reducers/SearchSlice"

const store = configureStore({
    reducer: {
        search: SearchReducer
    }
})

export { store }