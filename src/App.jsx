import { BrowserRouter, Route, Routes } from "react-router-dom"
import { PopularFilms } from "./containers/PopularFilms"
import { FilmsDetails } from "./containers/FilmsDetails"

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PopularFilms />}>
                <Route path="/films/:id" element={<FilmsDetails />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export { App }