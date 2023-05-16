import { TextField } from "@mui/material"
import { useDispatch } from "react-redux"
import { searchFilms } from "../redux/reducers/SearchSlice"

const Suggestion = () => {
    const dispatch = useDispatch()

    const inputOnChange = (event) => {
        if (!event.target.value) {
            return
        }

        dispatch(searchFilms(event.target.value))
    }
    return (
        <>
            <TextField
                id="search"
                placeholder="search"
                fullWidth={true}
                sx={{ mb: 5 }}
                variant="standard"
                InputProps={{
                    onChange: inputOnChange
                }}
            />
        </>
    )
}

export { Suggestion }