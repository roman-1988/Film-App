import { createSlice } from "@reduxjs/toolkit/dist/createSlice"

const initialState = {
    results: [],
    totalResults: 0,
    page: 0,
    totalPages: 0,
    isFetching: false
}

const searchSlice = createSlice({
    name: "searchSlice",
    initialState,
    reducers: {
        searchFilms: (state) => {
            return {
                ...state,
                isFetching: true
            }
        },

        fetchedSearchFilms: (state, action) => {
            return {
                ...state,
                isFetching: false,
                results: action.payload.results,
                totalResults: action.payload.total_results,
                page: action.payload.page,
                totalPages: action.payload.total_pages
            }
        },

        resetState: (state) => {
            return state
        }
    }
})

export const { searchFilms, fetchedSearchFilms, resetState } = searchSlice.actions
export default searchSlice.reducers