import { TextField } from "@mui/material"

const Suggestion = () => {
    return (
        <>
            <TextField
                id="search"
                placeholder="search"
                fullWidth={true}
                sx={{ mb: 5 }}
                variant="standard"
            />
        </>
    )
}

export { Suggestion }