import { ThemeProvider, createTheme } from "@mui/material/styles"
import { CssBaseline } from "@mui/material"

const darkTheme = createTheme({
    palette: {
        mode: "dark"
    }
})

const Layout = ({ children }) => {
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    )
}

export { Layout }