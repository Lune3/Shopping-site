import { Outlet } from "react-router-dom"
import { Header } from "./header/header"

function App() {
    return (
        <>
            <Header/>
            <Outlet/>
        </>
    )
}

export default App
