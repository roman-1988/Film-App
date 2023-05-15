import { BrowserRouter, Route, Routes } from "react-router-dom"
import { PopularFilms } from "./containers/PopularFilms"
import { FilmsDetails } from "./containers/FilmsDetails"
import { Layout } from "./components/Layout"

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<PopularFilms />}></Route>
                    <Route path="/films/:id" element={<FilmsDetails />}></Route>
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}

export { App }